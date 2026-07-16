import { LegalPage } from '@/components/marketing/legal-page'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Shelf.',
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="[Date]"
      intro={`This Privacy Policy explains how [Your Legal Business Name] ("we," "us," "our"), operator of Shelf (yodigproduct.co.uk), collects, uses, and protects your personal data when you use our Site. We are committed to handling your data in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`}
      sections={[
        {
          heading: '1. Who we are',
          paragraphs: [
            '[Your Legal Business Name]',
            '[Registered address]',
            'Contact: [support email]',
            'We are the "data controller" for the personal data described in this policy.',
          ],
        },
        {
          heading: '2. What data we collect',
          paragraphs: ['Information you give us directly:'],
          list: [
            'Email address (provided at checkout, for receipts and download links)',
            'Account details, if you register (email, and any profile information you add)',
            'Any information you send us via our contact form or email',
          ],
        },
        {
          heading: 'Information collected automatically',
          list: [
            'Basic technical data (IP address, browser type, device type) via standard web server logs and our hosting provider (Vercel)',
            'Usage data via analytics, if enabled (e.g., pages visited)',
          ],
        },
        {
          heading: 'Payment information',
          paragraphs: [
            'We do not collect or store your full card details. Payments are processed directly by Stripe and PayPal, who act as independent data controllers for the payment information you provide to them. Please see their respective privacy policies: Stripe (stripe.com/privacy) and PayPal (paypal.com/uk/legalhub/privacy-full).',
          ],
        },
        {
          heading: '3. How we use your data',
          paragraphs: ['We use your data to:'],
          list: [
            'Process and fulfil your orders (create your order record, generate download links, send receipts)',
            'Respond to customer support enquiries',
            'Detect and prevent fraud or abuse of our download system',
            'Improve the Site and understand how it\u2019s used',
            'Send you order-related emails (receipts, download links)',
            'Send you marketing emails, only if you\u2019ve opted in — you can unsubscribe at any time',
          ],
        },
        {
          heading: '4. Legal basis for processing',
          paragraphs: ['We process your data under the following legal bases:'],
          list: [
            'Contract — to fulfil an order you\u2019ve placed',
            'Legitimate interests — to prevent fraud, secure our systems, and improve our service',
            'Consent — for optional marketing communications, which you can withdraw at any time',
          ],
        },
        {
          heading: '5. Who we share data with',
          paragraphs: [
            'We share limited data with the following third-party processors, solely to operate the Site:',
          ],
          table: {
            headers: ['Provider', 'Purpose'],
            rows: [
              ['Stripe', 'Payment processing'],
              ['PayPal', 'Payment processing'],
              ['Supabase', 'Database and file storage'],
              ['Vercel', 'Website hosting'],
              ['Resend', 'Sending transactional emails (receipts, download links)'],
            ],
          },
        },
        {
          heading: '',
          paragraphs: ['We do not sell your personal data to third parties.'],
        },
        {
          heading: '6. International transfers',
          paragraphs: [
            'Some of our service providers (e.g., Stripe, Vercel) may process data outside the UK. Where this happens, we rely on appropriate safeguards such as Standard Contractual Clauses to ensure your data remains protected.',
          ],
        },
        {
          heading: '7. How long we keep your data',
          paragraphs: [
            'We retain order records for as long as necessary to comply with our legal and tax obligations (typically up to 6 years in the UK). Account data is retained until you request deletion, or your account has been inactive for an extended period.',
          ],
        },
        {
          heading: '8. Your rights',
          paragraphs: ['Under UK GDPR, you have the right to:'],
          list: [
            'Access the personal data we hold about you',
            'Request correction of inaccurate data',
            'Request deletion of your data ("right to be forgotten"), subject to our legal retention obligations',
            'Object to or restrict certain processing',
            'Request a copy of your data in a portable format',
            'Withdraw consent to marketing at any time',
          ],
        },
        {
          heading: '',
          paragraphs: [
            'To exercise any of these rights, contact us at [support email]. You also have the right to complain to the UK Information Commissioner\u2019s Office (ICO) at ico.org.uk if you believe your data has been mishandled.',
          ],
        },
        {
          heading: '9. Cookies',
          paragraphs: [
            'We use only the cookies necessary for the Site to function (e.g., maintaining your shopping cart, keeping you logged in, and tracking affiliate referrals).',
          ],
        },
        {
          heading: '10. Children\u2019s privacy',
          paragraphs: [
            'Our products and Site are not directed at children under 16, and we do not knowingly collect personal data from children.',
          ],
        },
        {
          heading: '11. Changes to this policy',
          paragraphs: [
            'We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect the most recent revision.',
          ],
        },
        {
          heading: '12. Contact us',
          paragraphs: ['Questions about this Privacy Policy or your data? Contact us at [support email].'],
        },
      ]}
    />
  )
}
