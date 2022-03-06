import type { NextApiRequest, NextApiResponse } from 'next'
import quizData from '../../data/foodQuiz'

type Data = {
  data: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const results = {...req.body.results}
    let response = await fetch('https://merch-test.shopvida.com/onboard-quizs/'+ req.body.id, { 
      method: 'PUT',
      body: JSON.stringify({
        "email": process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        "configuration": {"question": quizData},
        "result": results
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      }
    })
    let data = await response.json()
    res.status(201).json({ data: data })
  }
  