import type { NextApiRequest, NextApiResponse } from 'next'
import quizData from '../../data/foodQuiz'

type Data = {
  data: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    let response = await fetch('https://merch-test.shopvida.com/onboard-quizs', { 
      method: 'POST',
      body: JSON.stringify({
        "email": process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        "configuration": {"question": quizData},
        "results": {}
      }),
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      }
    })
    let data = await response.json()
    res.status(200).json({ data: data })
  }
  