import { Resend } from 'resend'

interface SendEmailParams {
  to: string
  subject: string
  html: string
  text?: string
}

let _resend: Resend | null = null

function getResendInstance(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  if (!_resend) {
    _resend = new Resend(apiKey)
  }
  return _resend
}

export async function sendEmail({ to, subject, html, text }: SendEmailParams) {
  const resend = getResendInstance()

  if (!resend) {
    console.error('Resend is not configured: RESEND_API_KEY is missing. Skipping email send.')
    return { success: false, error: 'Missing RESEND_API_KEY' }
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL
  const fromName = process.env.RESEND_FROM_NAME || 'Store'

  if (!fromEmail) {
    console.error('Resend is not configured: RESEND_FROM_EMAIL is missing. Skipping email send.')
    return { success: false, error: 'Missing RESEND_FROM_EMAIL' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''),
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    return { success: true, id: data?.id }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false, error }
  }
}
