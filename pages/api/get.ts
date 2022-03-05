import type { NextApiRequest, NextApiResponse } from 'next'
import quizData from '../../data/foodQuiz'

type Data = {
  name: string
  data: Array<object>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    res.status(200).json({ name: 'This is where the get route will live', data: quizData })
  }
  