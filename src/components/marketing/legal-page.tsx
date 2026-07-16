import Link from 'next/link'

interface LegalSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
  table?: { headers: string[]; rows: string[][] }
}

interface LegalPageProps {
  title: string
  lastUpdated: string
  intro?: string
  sections: LegalSection[]
}

export function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <nav className="mb-6 text-sm text-ink-400">
        <Link href="/" className="hover:text-ink-900">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-ink-600">{title}</span>
      </nav>

      <h1 className="font-display text-4xl text-ink-900">{title}</h1>
      <p className="mt-2 text-sm text-ink-400">Last updated: {lastUpdated}</p>

      {intro && (
        <p className="mt-6 text-[15px] leading-relaxed text-ink-600">{intro}</p>
      )}

      <div className="prose prose-sm mt-8 max-w-none text-ink-600 prose-headings:font-display prose-headings:text-ink-900 prose-a:text-signal-dark">
        {sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="mb-3 text-xl">{section.heading}</h2>
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="mb-3 leading-relaxed">{p}</p>
            ))}
            {section.list && (
              <ul className="mb-3 list-disc space-y-1.5 pl-5">
                {section.list.map((item, j) => (
                  <li key={j} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="mb-3 overflow-x-auto rounded-md border border-ink-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-ink-100 bg-ink-50">
                      {section.table.headers.map((h, k) => (
                        <th key={k} className="px-4 py-2 text-left font-medium text-ink-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, r) => (
                      <tr key={r} className="border-b border-ink-100 last:border-0">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-2 text-ink-600">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
