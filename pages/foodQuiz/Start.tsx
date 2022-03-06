import React, {useState, useEffect} from "react";
import Footer from "../../components/Footer";
import useSwr from 'swr'
import Container from "../../components/Container";
import Header from "../../components/Header";

const getFetcher = (url:string) => fetch(url, {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          }
        }).then((res) => res.json())

export default function Start() {
    const [userId, setUserId] = useState<number>(148)
    const [currentQuestionId, setCurrentQuestionId] = useState(1)
    const [results, setResults] = useState({})
    
    const finishQuiz = () => {
        fetch('/api/put', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            body: JSON.stringify({id: userId, results})
        })
    }
    
    const { data, error} = useSwr('https://merch-test.shopvida.com/onboard-quizs/'+ userId, getFetcher)
    
    if (error) return <div>Failed to load quiz data</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
                <Header title={data.configuration.question.filter((question:any) => question.id === currentQuestionId).map((item:any) => item.configuration.banner)}/>
                { data.configuration.question.filter((question:any) => question.id === currentQuestionId).map((item:any, index:number) => (
                    <Container
                        key={index}
                        parentId={item.parentId}
                        currentId={item.id}
                        config={item.configuration}
                        question={item.text}
                        questionType={item.questionType}
                        answers={item.answers}
                        setCurrentQuestionId={setCurrentQuestionId}
                        setResults={setResults}
                        results={results}
                        finishQuiz={finishQuiz}
                    />
                ))}
            </main>
            <Footer name={data.configuration.question.filter((question:any) => question.id === currentQuestionId).map((item:any) => item.configuration.footer)}/>
        </div>  
    )
}

function aysnc(): React.EffectCallback {
    throw new Error("Function not implemented.");
}
