import React from 'react'
import Button from './Button'

type ContainerProps = {
    parentId: number,
    currentId: number,
    config: any,
    question: string,
    questionType: string,
    answers: Array<object>,
    setCurrentQuestionId: (id:number) => void,
    setResults: ({}) => void,
    results: any
}

const Container = ({parentId, currentId, config, question, questionType, answers, setCurrentQuestionId, setResults, results} : ContainerProps) => {
  const styles = {
    container: {
      backgroundColor: config.bgColor,
    },
    question: {
      color: config.textColor,
    }
  } as const;
  return (
    <div className="h-full w-full p-6 rounded-lg border-2 border-gray-300 flex flex-col" style={styles.container} >
      <h3 className="text-1xl font-bold" style={styles.question}>{question}</h3>
      <div className="grid gap-1 grid-cols-1 md:grid-cols-3 items-center justify-center my-3">
        {questionType === "multi" ? <h4>multi</h4> : answers.map((value:any, index) => (
          <Button key={index} id={value.nextQuestionId} text={value.text} setCurrentQuestionId={setCurrentQuestionId} setResults={setResults} results={results} question={question} />
        ))}
      </div>
    </div>
  )
}

export default Container