import React from 'react'

type ButtonProps = {
  currentId: number,
  nextId: number,
  text: string,
  question: string,
  setCurrentQuestionId: (id: number) => void,
  setResults: ({}) => void,
  finishQuiz: () => void,
  results: any
}

const Button = ({ currentId, nextId, text, setCurrentQuestionId, question, setResults, finishQuiz, results } : ButtonProps) => {
  const handleClick = () => {
    if (currentId === 100) {
      finishQuiz()
    } else {
      setResults({...results, [question]: text })
    }
    setCurrentQuestionId(nextId)
  }
  return (
    <div onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded cursor-pointer">{text}</div>
  )
}

export default Button