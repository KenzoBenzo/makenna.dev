import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@/utils/graphql-client'
import { ExperiencesDocument, ExperiencesQuery } from '@/utils/graphql-generated'
import { generateResumePdf } from '@/utils/pdf-resume'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await client.query<ExperiencesQuery>({
    query: ExperiencesDocument,
  })

  const pdf = generateResumePdf(data.experiences)
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'inline; filename="cv.pdf"')
  res.status(200).send(pdf)
}
