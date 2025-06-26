import { ExperiencesQuery } from './graphql-generated'

export function generateResumePdf(experiences: ExperiencesQuery['experiences']): Buffer {
  const header = '%PDF-1.4\n'
  const escape = (text: string) => text.replace(/[()\\]/g, '\\$&')
  const lines = experiences.map(
    (e) => `${e.jobTitle} @ ${e.company} (${e.dateRange})`
  )

  const contentLines = lines
    .map((line) => `(${escape(line)}) Tj\nT* `)
    .join('')
  const contentStream = `BT\n/F1 12 Tf\n50 780 Td\n${contentLines}ET`

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  ]

  let offset = header.length
  const offsets = [0]
  for (const obj of objects) {
    offsets.push(offset)
    offset += obj.length
  }

  let pdf = header + objects.join('')
  const xrefOffset = pdf.length
  pdf += 'xref\n0 ' + (objects.length + 1) + '\n'
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i < offsets.length; i++) {
    pdf += offsets[i].toString().padStart(10, '0') + ' 00000 n\n'
  }
  pdf += 'trailer\n<< /Root 1 0 R /Size ' + (objects.length + 1) + ' >>\n'
  pdf += 'startxref\n' + xrefOffset + '\n%%EOF'

  return Buffer.from(pdf)
}
