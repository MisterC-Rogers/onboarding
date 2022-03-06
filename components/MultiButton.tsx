import React, { useState } from 'react'

type MultiButtonProps = {
  currentId: number,
  question: string,
  answer: Array<object>,
  setCurrentQuestionId: (id: number) => void,
  setResults: ({}) => void,
  results: any
}

const MultiButton = ({currentId, question, answer, setCurrentQuestionId, setResults , results}: MultiButtonProps) => {
  const [choices, setChoices] = useState<string[]>([])
  const [nextId, ] = useState(answer[0].nextQuestionId)
  const handleSelection = (event: any) => {
    event.preventDefault()
    setChoices([...choices, event.target.value])
  }
  const handleSubmit = () => {
    setResults({...results, [question]:choices})
    setCurrentQuestionId(nextId)
  }
  return (
    <div>
      <div className="grid gap-1 grid-cols-1 md:grid-cols-3 items-center justify-center my-3">
        {answer.map((value:any, index) => (
          <input type="button" key={index} onClick={() => handleSelection(event)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded cursor-pointer" value={value.text} />
        ))}
      </div>
      <div>
        <input type="button" onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded cursor-pointer" value='SUBMIT'/>
      </div>
    </div>
  )
}

export default MultiButton