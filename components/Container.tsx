import React from 'react'
import Button from './Button'
import MultiButton from './MultiButton'

type ContainerProps = {
    parentId: number,
    currentId: number,
    config: any,
    question: string,
    questionType: string,
    answers: Array<object>,
    setCurrentQuestionId: (id:number) => void,
    setResults: ({}) => void,
    finishQuiz: () => void,
    results: any
}

const Container = ({parentId, currentId, config, question, questionType, answers, setCurrentQuestionId, setResults, finishQuiz, results} : ContainerProps) => {
  const styles = {
    container: {
      backgroundColor: config.bgColor,
    },
    question: {
      color: config.textColor,
    }
  } as const;
  //TODO: make a previous question button
  return (
    <div className="h-full w-full p-6 rounded-lg border-2 border-gray-300 flex flex-col" style={styles.container} >
      <h3 className="text-1xl font-bold" style={styles.question}>{question}</h3>
      <div className="grid gap-1 grid-cols-1 md:flex items-center justify-center my-3">
        {questionType === "multi" ? <MultiButton currentId={currentId} question={question} answer={answers} results={results} setResults={setResults} setCurrentQuestionId={setCurrentQuestionId}/> : answers.map((value:any, index) => (
          <Button key={index} currentId={currentId} nextId={value.nextQuestionId} text={value.text} setCurrentQuestionId={setCurrentQuestionId} setResults={setResults} results={results} question={question} finishQuiz={finishQuiz} />
        ))}
      </div>
    </div>
  )
}

export default Container