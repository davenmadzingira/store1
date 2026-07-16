import { LegalPage } from '@/components/marketing/legal-page'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Shelf.',
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="[Date]"
      intro={`Welcome to Shelf ("we," "us," "our"), operated by [Your Legal Business Name], [registered address], United Kingdom. These Terms of Service ("Terms") govern your use of the website located at yodigproduct.co.uk (the "Site") and any purchases made through it. By accessing the Site or making a purchase, you agree to these Terms. If you don't agree, please don't use the Site.`}
      sections={[
        {
          heading: '1. Who we are',
          paragraphs: [
            'Shelf is an online store selling:',
          ],
          list: [
            'Digital products we create ourselves (templates, planners, guides, and similar downloadable files), and',
            'Curated affiliate recommendations — links to third-party retailers\u2019 products, from which we may earn a commission if you make a purchase.',
          ],
        },
        {
          heading: '2. Digital products',
          list: [
            'All digital products are delivered electronically. There is no physical shipment.',
            'Upon successful payment, you will receive an email with download link(s) for your purchased item(s). Download links are also accessible via your account, if you created one.',
            'Download links are limited to a maximum number of uses (currently 5 per item) and may expire after a period of time. If you need a link re-issued outside these limits, contact us at [support email].',
            'You may use purchased digital products for personal or the license scope stated on the product page. Unless explicitly stated otherwise, you may not resell, redistribute, or share purchased files with others.',
          ],
        },
        {
          heading: '3. Affiliate links',
          list: [
            'Some products on the Site are "Curated finds" — these are affiliate links to third-party retailers, not products we sell directly.',
            'When you click an affiliate link and make a purchase on the retailer\u2019s site, we may earn a commission, at no additional cost to you.',
            'We do not process payment, fulfil, or take responsibility for products purchased through affiliate links — those transactions are governed by the third-party retailer\u2019s own terms, returns policy, and customer service.',
          ],
        },
        {
          heading: '4. Pricing and payment',
          list: [
            'All prices are shown in the currency displayed at checkout and are inclusive of any taxes unless stated otherwise.',
            'Payments are processed securely by Stripe and PayPal. We do not store or have access to your full card details.',
            'We reserve the right to correct pricing errors and to cancel and refund any order placed at an incorrect price before or after payment.',
          ],
        },
        {
          heading: '5. Coupons and discounts',
          paragraphs: [
            'Coupon codes are subject to their own stated terms (expiry date, minimum order value, single-use restrictions) and may be withdrawn or changed at any time without notice.',
          ],
        },
        {
          heading: '6. Refunds',
          paragraphs: [
            'See our separate Refund Policy for full details on when refunds are available for digital products.',
          ],
        },
        {
          heading: '7. Accounts',
          paragraphs: [
            'If you create an account, you\u2019re responsible for keeping your login details secure and for all activity under your account. Notify us immediately at [support email] if you suspect unauthorised access.',
          ],
        },
        {
          heading: '8. Acceptable use',
          paragraphs: ['You agree not to:'],
          list: [
            'Use the Site for any unlawful purpose.',
            'Attempt to gain unauthorised access to the Site, other users\u2019 accounts, or our systems.',
            'Circumvent, disable, or interfere with any security or download-limiting features of the Site.',
            'Reproduce, resell, or redistribute purchased digital products beyond the license granted at the time of purchase.',
          ],
        },
        {
          heading: '9. Intellectual property',
          paragraphs: [
            'All digital products, site content, graphics, and branding are owned by us or our licensors and protected by copyright. Purchasing a product grants you a license to use it as described on the product page — it does not transfer ownership of the underlying intellectual property.',
          ],
        },
        {
          heading: '10. Limitation of liability',
          paragraphs: [
            'To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Site or products purchased through it. Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law (including liability for death, personal injury caused by negligence, or fraud).',
          ],
        },
        {
          heading: '11. Changes to these Terms',
          paragraphs: [
            'We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms.',
          ],
        },
        {
          heading: '12. Governing law',
          paragraphs: [
            'These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.',
          ],
        },
        {
          heading: '13. Contact us',
          paragraphs: ['Questions about these Terms? Contact us at [support email].'],
        },
      ]}
    />
  )
}
