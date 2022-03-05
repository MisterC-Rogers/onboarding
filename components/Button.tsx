import React from 'react'

type ButtonProps = {
  id: number,
  text: string,
  question: string,
  setCurrentQuestionId: (id: number) => void,
  setResults: ({}) => void,
  results: any
}

const Button = ({ id, text, setCurrentQuestionId, question, setResults, results } : ButtonProps) => {
  const handleClick = () => {
    if (id === 1) {
      setResults({})
    } else {
      setResults({...results, [question]: text })
    }
    setCurrentQuestionId(id)
  }
  return (
    <div onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded cursor-pointer">{text}</div>
  )
}

export default Button