import { ExperiencesQuery } from './graphql-generated'

export function generateResumePdf(
  experiences: ExperiencesQuery['experiences']
): Buffer {
  const escape = (text: string) => text.replace(/[()\\]/g, '\\$&')
  const header = '%PDF-1.4\n'

  const title = 'Makenna Smutz'
  const contact = 'https://makenna.dev'

  const bullet = String.fromCharCode(149)
  const bodyLines: string[] = []
  experiences.forEach((exp) => {
    bodyLines.push(`${exp.jobTitle} @ ${exp.company} (${exp.dateRange})`)
    exp.responsibilities.forEach((resp) => {
      bodyLines.push(`  ${bullet} ${resp}`)
    })
    bodyLines.push('')
  })

  const lineHeight = 14
  const startY = 720

  const contentParts = [
    'BT',
    '/F1 24 Tf',
    '0.067 0.094 0.153 rg',
    `1 0 0 1 50 780 Tm`,
    `(${escape(title)}) Tj`,
    '/F1 12 Tf',
    '0.216 0.255 0.318 rg',
    `1 0 0 1 50 762 Tm`,
    `(${escape(contact)}) Tj`,
    `1 0 0 1 50 ${startY} Tm`,
    `${lineHeight} TL`
  ]

  bodyLines.forEach((line, idx) => {
    if (idx > 0) contentParts.push('T*')
    contentParts.push(`(${escape(line)}) Tj`)
  })
  contentParts.push('ET')

  const contentStream = contentParts.join('\n')

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
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

  return Buffer.from(pdf, 'binary')
}
