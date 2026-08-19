import { createAdminClient } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const supabase = createAdminClient()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yodigproduct.co.uk'

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('status', 'published')
    .eq('type', 'digital')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // TSV header row
  const headers = [
    'id',
    'title',
    'description',
    'link',
    'image_link',
    'availability',
    'price',
    'condition',
    'identifier_exists',
    'brand',
    'product_type',
  ]

  const rows = (products || []).map((p) => {
    const priceDollars = (p.price_cents / 100).toFixed(2)
    const currency = (p.currency || 'USD').toUpperCase()

    return [
      p.id,
      clean(p.title),
      clean(p.description || p.short_description || ''),
      `${siteUrl}/products/${p.slug}`,
      p.cover_image_url || '',
      'in_stock',
      `${priceDollars} ${currency}`,
      'new',
      'false',
      'Shelf',
      'Digital Downloads',
    ]
  })

  const tsv = [headers, ...rows]
    .map((row) => row.join('\t'))
    .join('\n')

  return new NextResponse(tsv, {
    headers: {
      'Content-Type': 'text/tab-separated-values; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

/** Strip tabs and newlines so they don't break the TSV format */
function clean(text: string): string {
  return text.replace(/[\t\r\n]+/g, ' ').trim()
}
