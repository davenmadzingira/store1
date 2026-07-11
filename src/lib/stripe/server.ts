import Stripe from 'stripe'

let _stripe: Stripe | null = null

function getStripeInstance(): Stripe {
  if (!_stripe) {
    const apiKey = process.env.STRIPE_SECRET_KEY
    if (!apiKey) {
      throw new Error('STRIPE_SECRET_KEY is not configured.')
    }
    _stripe = new Stripe(apiKey, {
      apiVersion: '2025-02-24.acacia',
      typescript: true,
    })
  }
  return _stripe
}

// Proxy defers creating the real Stripe client until something actually
// calls a method on it (e.g. stripe.checkout.sessions.create(...)).
// This means a missing STRIPE_SECRET_KEY no longer crashes the build —
// it only throws at runtime, for the specific request that needed Stripe.
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return Reflect.get(getStripeInstance(), prop)
  },
})
