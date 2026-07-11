import sgMail from '@sendgrid/mail'

interface SendEmailParams {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: SendEmailParams) {
  const apiKey = process.env.SENDGRID_API_KEY

  if (!apiKey) {
    console.error('SendGrid is not configured: SENDGRID_API_KEY is missing. Skipping email send.')
    return { success: false, error: 'Missing SENDGRID_API_KEY' }
  }

  try {
    sgMail.setApiKey(apiKey)

    await sgMail.send({
      to,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL!,
        name: process.env.SENDGRID_FROM_NAME || 'Store',
      },
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''),
    })
    return { success: true }
  } catch (error) {
    console.error('SendGrid error:', error)
    return { success: false, error }
  }
}
