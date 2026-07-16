import { LegalPage } from '@/components/marketing/legal-page'

export const metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Shelf.',
}

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="[Date]"
      intro="This policy explains when refunds are available for purchases made on Shelf (yodigproduct.co.uk)."
      sections={[
        {
          heading: '1. Digital products',
          paragraphs: [
            'Because our digital products (templates, planners, guides, and similar files) are delivered instantly and can be downloaded immediately, all sales are generally final, except in the following circumstances.',
            'We will provide a full refund if:',
          ],
          list: [
            'The file you received is corrupted, incomplete, or otherwise doesn\u2019t open or work as described, and we\u2019re unable to resolve the issue by re-sending a working file.',
            'You were charged in error (e.g., a duplicate charge, or a technical fault caused you to be charged without receiving a working download link).',
            'The product delivered is materially different from what was described on the product page.',
          ],
        },
        {
          heading: 'We are generally not able to offer a refund if:',
          list: [
            'You\u2019ve changed your mind after downloading the file.',
            'You purchased the wrong product by mistake — in this case, contact us and we\u2019ll try to help you exchange it where reasonably possible, but this isn\u2019t guaranteed.',
            'You\u2019re unable to open the file due to not having compatible software (e.g., no PDF reader) — we\u2019ll do our best to help you find a solution first.',
          ],
        },
        {
          heading: '2. Your UK statutory rights',
          paragraphs: [
            'Under the Consumer Contracts Regulations, the right to cancel a digital content purchase within 14 days does not apply once you\u2019ve begun downloading the content, provided you were clearly told this before purchase and gave your consent (which you do by completing checkout on this Site, per our Terms of Service). This policy doesn\u2019t affect any other statutory rights you have under the Consumer Rights Act 2015 — for example, if the digital content is faulty or not as described.',
          ],
        },
        {
          heading: '3. Affiliate ("Curated finds") purchases',
          paragraphs: [
            'Products marked "Curated find" are sold and fulfilled by the third-party retailer, not by us. Any refund, return, or cancellation request for these must be made directly with that retailer, under their own refund policy. We\u2019re not able to process refunds for affiliate purchases.',
          ],
        },
        {
          heading: '4. How to request a refund',
          paragraphs: ['Email us at [support email] with:'],
          list: [
            'Your order number (found in your receipt email)',
            'The email address used at checkout',
            'A brief description of the issue',
          ],
        },
        {
          heading: '',
          paragraphs: [
            'We aim to respond within 2 business days and will let you know the outcome of your request.',
          ],
        },
        {
          heading: '5. How refunds are issued',
          paragraphs: [
            'Approved refunds are returned to your original payment method (via Stripe or PayPal) and typically appear within 5\u201310 business days, depending on your bank or card provider.',
          ],
        },
        {
          heading: '6. Changes to this policy',
          paragraphs: [
            'We may update this Refund Policy from time to time. The "Last updated" date at the top reflects the most recent revision.',
          ],
        },
        {
          heading: '7. Contact us',
          paragraphs: ['Questions about a refund? Contact us at [support email].'],
        },
      ]}
    />
  )
}
