import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { ProductCard } from '@/components/shop/product-card'
import type { Product } from '@/types/database'

export const revalidate = 60

async function getShelf(type: 'digital' | 'affiliate', limit = 4): Promise<Product[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'published')
    .eq('type', type)
    .order('created_at', { ascending: false })
    .limit(limit)

  return (data as Product[]) || []
}

export default async function HomePage() {
  const [digitalProducts, affiliateProducts] = await Promise.all([
    getShelf('digital'),
    getShelf('affiliate'),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink-100 bg-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-10 px-5 py-16 sm:py-20">
          <div className="min-w-[280px] flex-1">
            <div className="mb-6 flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 34 34" aria-hidden="true">
                <rect x="4" y="16" width="26" height="4" rx="1" fill="#14110F" />
                <rect x="7" y="6" width="6" height="16" rx="1" fill="#B4472F" />
                <rect x="15" y="4" width="6" height="18" rx="1" fill="#14110F" />
                <rect x="23" y="8" width="6" height="14" rx="1" fill="#8A6A4A" />
              </svg>
              <span className="font-display text-lg font-medium text-ink-900">Shelf</span>
            </div>

            <p className="shelf-label text-signal-dark">Issue 01 · curated this week</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-ink-900 sm:text-5xl">
              A small, well-kept shelf of things worth your money.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-500">
              Digital tools we built ourselves, and the best things we have found
              everywhere else — kept on the same shelf, priced honestly.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                href="/products?type=digital"
                className="rounded bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper hover:bg-ink-700"
              >
                Browse digital products
              </Link>
              <Link
                href="/products?type=affiliate"
                className="rounded border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-900 hover:bg-ink-50"
              >
                See curated finds
              </Link>
            </div>
          </div>

          <div className="relative w-[340px] shrink-0">
            <svg viewBox="0 0 340 260" width="100%" height="260" aria-hidden="true">
              <rect x="90" y="30" width="150" height="200" rx="10" fill="#14110F" />
              <rect x="98" y="46" width="134" height="160" rx="2" fill="#F7F4EC" />
              <path d="M155 90 L165 72 L175 90" stroke="#8A6A4A" strokeWidth="2" fill="none" />
              <text x="165" y="122" fontFamily="Georgia, serif" fontSize="14" fill="#14110F" textAnchor="middle" fontWeight="500">TEMPLATE</text>
              <text x="165" y="140" fontFamily="Georgia, serif" fontSize="9" fill="#6B6B66" textAnchor="middle">Plan. Focus. Achieve.</text>
              <rect x="10" y="90" width="80" height="140" rx="4" fill="#B4472F" />
              <text x="50" y="150" fontFamily="Georgia, serif" fontSize="11" fill="#F7F4EC" textAnchor="middle" fontWeight="500">THE</text>
              <text x="50" y="164" fontFamily="Georgia, serif" fontSize="11" fill="#F7F4EC" textAnchor="middle" fontWeight="500">GUIDE</text>
              <rect x="250" y="120" width="60" height="120" rx="10" fill="#14110F" />
              <rect x="255" y="128" width="50" height="100" rx="2" fill="#F7F4EC" />
              <text x="280" y="175" fontFamily="Georgia, serif" fontSize="8" fill="#14110F" textAnchor="middle" fontWeight="500">DAILY</text>
              <text x="280" y="186" fontFamily="Georgia, serif" fontSize="8" fill="#14110F" textAnchor="middle" fontWeight="500">NOTES</text>
            </svg>
            <div className="absolute -top-1.5 right-0 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#8A6A4A] text-center text-[10px] font-medium leading-tight text-paper">
              Curated picks
            </div>
          </div>
        </div>
      </section>

      {/* Digital shelf */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-6 flex items-end justify-between border-b border-ink-900 pb-3">
          <div>
            <p className="shelf-label">Shelf 01</p>
            <h2 className="font-display text-2xl text-ink-900">Made by us</h2>
          </div>
          <Link href="/products?type=digital" className="text-sm text-ink-500 hover:text-ink-900">
            View all →
          </Link>
        </div>
        {digitalProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {digitalProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <EmptyShelf label="No digital products published yet." />
        )}
      </section>

      {/* Affiliate shelf */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-6 flex items-end justify-between border-b border-ink-900 pb-3">
          <div>
            <p className="shelf-label">Shelf 02</p>
            <h2 className="font-display text-2xl text-ink-900">Found elsewhere, vetted by us</h2>
          </div>
          <Link href="/products?type=affiliate" className="text-sm text-ink-500 hover:text-ink-900">
            View all →
          </Link>
        </div>
        {affiliateProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {affiliateProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <EmptyShelf label="No curated finds published yet." />
        )}
      </section>

      {/* Trust strip */}
      <section className="border-t border-ink-100 bg-ink-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4">
          {[
            ['Secure checkout', 'Stripe & PayPal, PCI compliant'],
            ['Instant delivery', 'Download links by email in seconds'],
            ['Honest pricing', 'No dark patterns, no surprise fees'],
            ['Real reviews', 'We buy and use what we recommend'],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="text-sm font-medium text-ink-900">{title}</p>
              <p className="mt-1 text-[13px] text-ink-400">{sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function EmptyShelf({ label }: { label: string }) {
  return (
    <div className="rounded-md border border-dashed border-ink-200 py-16 text-center text-sm text-ink-300">
      {label}
    </div>
  )
}
