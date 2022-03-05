import React, {useState, useEffect} from "react";
import Footer from "../../components/Footer";
import useSwr from 'swr'
import Container from "../../components/Container";
import Header from "../../components/Header";

const fetcher = (url:string) => fetch(url).then((res) => res.json())

export default function Start() {
    const { data, error } = useSwr('/api/get', fetcher)
    const [currentQuestionId, setCurrentQuestionId] = useState(1)
    const [results, setResults] = useState({})
    
    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex w-full flex-1 flex-col items-center justify-center px-2 text-center">
                <Header title={data.data.filter((question:any) => question.id === currentQuestionId).map((item:any) => item.configuration.banner)}/>
                { data.data.filter((question:any) => question.id === currentQuestionId).map((item:any, index:number) => (
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
                    />
                ))}
            </main>
            <Footer name={data.data.filter((question:any) => question.id === currentQuestionId).map((item:any) => item.configuration.footer)}/>
        </div>  
    )
}