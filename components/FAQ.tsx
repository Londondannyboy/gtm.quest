'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  className?: string
}

export function FAQ({ items, title = 'Frequently Asked Questions', className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className={`${className}`}>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <span className="flex-shrink-0 ml-4">
                <svg
                  className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Pre-defined FAQ sets for common pages
export const CMO_FAQS: FAQItem[] = [
  {
    question: 'What is a Fractional CMO?',
    answer: 'A Fractional CMO (Chief Marketing Officer) is an experienced marketing executive who works with companies on a part-time or contract basis, typically 1-3 days per week. They provide strategic marketing leadership without the commitment and cost of a full-time hire, making senior marketing expertise accessible to startups, scale-ups, and SMEs.',
  },
  {
    question: 'How much do Fractional CMO jobs pay in the UK?',
    answer: 'Fractional CMO day rates in the UK typically range from £700 to £1,400 per day, depending on experience, industry, and location. London-based roles often command premium rates of £900-£1,400/day, while regional positions average £700-£1,000/day. Annual earnings for fractional CMOs working with multiple clients can range from £100,000 to £250,000+.',
  },
  {
    question: 'What qualifications do I need for Fractional CMO jobs?',
    answer: 'Successful Fractional CMO candidates typically have 12-15+ years of marketing experience with at least 5 years in senior leadership roles. Key requirements include a proven track record of driving revenue growth, expertise in specific marketing channels (performance, brand, PLG, ABM), experience building and managing teams, and strong stakeholder management skills.',
  },
  {
    question: 'How many days per week do Fractional CMOs work?',
    answer: 'Most Fractional CMO engagements involve 1-3 days per week per client. Many fractional CMOs work with 2-4 clients simultaneously, totaling 4-5 working days per week. Engagement intensity often varies based on company needs - increasing during product launches or fundraising and reducing during steady-state periods.',
  },
  {
    question: 'What industries hire Fractional CMOs in the UK?',
    answer: 'The highest demand for Fractional CMOs in the UK comes from B2B SaaS companies, FinTech, DTC/E-commerce, HealthTech, and Professional Services. Startups post-Series A frequently hire fractional CMOs to establish marketing foundations, while established SMEs use them for specific initiatives like rebranding or market expansion.',
  },
  {
    question: 'What is the difference between a Fractional CMO and a Marketing Consultant?',
    answer: 'A Fractional CMO is an embedded executive who takes ownership of marketing strategy and typically manages teams, attends leadership meetings, and is accountable for results. A Marketing Consultant typically provides advice and recommendations on specific projects without the ongoing leadership responsibilities. Fractional CMOs are often seen as part of the executive team.',
  },
]

export const CFO_FAQS: FAQItem[] = [
  {
    question: 'What is a Fractional CFO?',
    answer: 'A Fractional CFO (Chief Financial Officer) is an experienced finance executive who works with companies on a part-time basis, typically 1-3 days per week. They provide strategic financial leadership, fundraising support, and financial operations expertise without the cost of a full-time CFO hire.',
  },
  {
    question: 'How much do Fractional CFO jobs pay in the UK?',
    answer: 'Fractional CFO day rates in the UK typically range from £800 to £1,500 per day, with London roles often at the higher end. Annual earnings for experienced fractional CFOs with multiple clients can exceed £200,000.',
  },
  {
    question: 'What qualifications do I need for Fractional CFO jobs?',
    answer: 'Fractional CFOs typically need ACA, ACCA, or CIMA qualifications, 15+ years of finance experience including senior leadership roles, and expertise in areas like fundraising, M&A, or financial transformation. Industry-specific knowledge (e.g., SaaS metrics, e-commerce) is highly valued.',
  },
  {
    question: 'What do Fractional CFOs do?',
    answer: 'Fractional CFOs handle strategic financial planning, fundraising and investor relations, financial reporting and compliance, cash flow management, building finance teams, M&A support, and board reporting. They act as a strategic partner to the CEO and leadership team.',
  },
]

export const CTO_FAQS: FAQItem[] = [
  {
    question: 'What is a Fractional CTO?',
    answer: 'A Fractional CTO (Chief Technology Officer) is an experienced technology leader who works with companies on a part-time basis. They provide technical strategy, architecture guidance, and engineering leadership without the commitment of a full-time CTO hire.',
  },
  {
    question: 'How much do Fractional CTO jobs pay in the UK?',
    answer: 'Fractional CTO day rates in the UK typically range from £800 to £1,600 per day, with highly specialized roles (AI, security) commanding premium rates. London-based and FinTech roles often pay at the higher end of this range.',
  },
  {
    question: 'When should a company hire a Fractional CTO?',
    answer: 'Companies typically hire Fractional CTOs when they need technical leadership but cannot justify or afford a full-time CTO. Common scenarios include early-stage startups building their first product, companies needing technical due diligence for fundraising, or businesses undergoing digital transformation.',
  },
]

export const COO_FAQS: FAQItem[] = [
  {
    question: 'What is a Fractional COO?',
    answer: 'A Fractional COO (Chief Operating Officer) is an experienced operations executive who works with companies on a part-time basis. They focus on operational efficiency, process optimization, scaling operations, and implementing systems to support growth.',
  },
  {
    question: 'How much do Fractional COO jobs pay in the UK?',
    answer: 'Fractional COO day rates in the UK typically range from £700 to £1,300 per day. Rates vary based on industry, company stage, and specific operational challenges being addressed.',
  },
  {
    question: 'What does a Fractional COO do?',
    answer: 'Fractional COOs focus on operational strategy, process improvement, team structure optimization, implementing operational systems, managing key initiatives, and ensuring the business can scale efficiently. They often work closely with the CEO to execute on strategic priorities.',
  },
]

// Location-based FAQs
export const LONDON_FAQS: FAQItem[] = [
  {
    question: 'How much do fractional executives earn in London?',
    answer: 'London fractional executives typically earn £800-£1,500 per day, which is 15-25% higher than national UK averages. Most professionals work with 2-4 clients simultaneously, earning £150,000-£300,000+ annually.',
  },
  {
    question: 'Which London areas have the most fractional jobs?',
    answer: 'The City of London has the most opportunities, followed by Shoreditch/Tech City. Canary Wharf, Kings Cross, and Westminster also have strong fractional markets. Each area tends to specialize: City for finance, Shoreditch for tech startups, Canary Wharf for corporate.',
  },
  {
    question: 'Do I need to commute to London for fractional roles?',
    answer: 'Most London fractional roles are hybrid, requiring 1-2 days per week in the office. Around 65% of positions offer remote working for the remaining days. Some roles are fully remote with occasional in-person meetings.',
  },
  {
    question: 'What industries hire fractional executives in London?',
    answer: 'FinTech, SaaS/Cloud, and HealthTech lead fractional hiring in London. E-commerce, PropTech, and EdTech are also growing rapidly. The City attracts finance-focused roles while Shoreditch dominates tech hiring.',
  },
  {
    question: 'Is London competitive for fractional roles?',
    answer: 'Yes, but the market is large enough for experienced executives. London accounts for around 60% of UK fractional opportunities. Building a niche specialism (industry or function) and strong network are key to standing out.',
  },
]

export const MANCHESTER_FAQS: FAQItem[] = [
  {
    question: 'How much do fractional executives earn in Manchester?',
    answer: 'Manchester fractional executives typically earn £650-£1,200 per day. While lower than London rates, the lower cost of living means comparable purchasing power. Many executives work with a mix of Manchester and remote London clients.',
  },
  {
    question: 'What industries hire fractional executives in Manchester?',
    answer: 'Manchester has strong demand in digital/ecommerce, media, and professional services. The growing tech scene in MediaCityUK and the Northern Quarter creates opportunities for fractional CTOs and CMOs.',
  },
  {
    question: 'Is Manchester a good base for fractional work?',
    answer: 'Yes. Manchester offers excellent transport links, lower living costs than London, and a growing business ecosystem. Many fractional executives are based in Manchester and work with clients across the North and remotely with London companies.',
  },
]

export const BIRMINGHAM_FAQS: FAQItem[] = [
  {
    question: 'How much do fractional executives earn in Birmingham?',
    answer: 'Birmingham fractional executives typically earn £600-£1,100 per day. The Midlands market is growing, with opportunities in manufacturing, automotive, and professional services sectors.',
  },
  {
    question: 'What sectors hire fractional executives in Birmingham?',
    answer: 'Birmingham has strong demand in manufacturing, automotive, logistics, and professional services. The city is also seeing growth in FinTech and tech startups, creating new opportunities for fractional leaders.',
  },
]

// Industry-based FAQs
export const TECH_FAQS: FAQItem[] = [
  {
    question: 'How much do Fractional CTOs earn in the UK?',
    answer: 'Fractional CTOs in the UK typically earn £1,000-£1,500 per day. Those with expertise in AI/ML, cloud architecture, or cybersecurity command the highest rates. Working 2-3 days per week across 2-3 clients, annual earnings of £200,000-£350,000 are achievable.',
  },
  {
    question: 'What experience do I need for fractional tech roles?',
    answer: 'Most fractional tech leadership roles require 15+ years of experience with at least 5 years in senior positions (CTO, VP Engineering, Tech Director). Startup or scale-up experience is highly valued, as is experience with technical due diligence and team scaling.',
  },
  {
    question: 'Are fractional tech roles mostly remote?',
    answer: 'Yes - approximately 65% of fractional tech roles offer remote or hybrid working. Tech leadership is well-suited to remote work, though most clients prefer some in-person time for team building and strategic sessions.',
  },
  {
    question: 'What tech skills are most in demand for fractional roles?',
    answer: 'Cloud architecture (AWS/GCP/Azure), AI/ML implementation, DevOps, security/compliance, and team scaling are the most sought-after skills. Experience with technical due diligence for fundraising and M&A is also highly valued.',
  },
]

export const SAAS_FAQS: FAQItem[] = [
  {
    question: 'Why do SaaS companies hire fractional executives?',
    answer: 'SaaS companies often need specialized expertise at different growth stages. Fractional executives provide experienced leadership for challenges like scaling ARR, building teams, preparing for fundraising, or expanding into new markets - without full-time costs.',
  },
  {
    question: 'What fractional roles are most common in SaaS?',
    answer: 'Fractional CMOs and CTOs are most common, followed by CFOs. SaaS companies particularly value fractional executives with experience in product-led growth, demand generation, SaaS metrics, and preparing for venture funding.',
  },
  {
    question: 'What SaaS experience do fractional roles require?',
    answer: 'Most SaaS fractional roles require proven experience with SaaS metrics (ARR, MRR, churn, CAC/LTV), understanding of subscription business models, and track record of scaling SaaS companies through different growth stages.',
  },
]

export const FINANCE_FAQS: FAQItem[] = [
  {
    question: 'What fractional roles are available in financial services?',
    answer: 'Financial services companies hire fractional executives across finance, technology, compliance, and operations. Fractional CFOs, CTOs, and Chief Risk Officers are particularly common in FinTech and growing financial services firms.',
  },
  {
    question: 'Do I need financial services experience for these roles?',
    answer: 'Most roles in financial services require sector-specific experience, particularly around regulatory compliance (FCA), risk management, and financial product development. FinTech roles often value both traditional finance and tech backgrounds.',
  },
]

export const HEALTHCARE_FAQS: FAQItem[] = [
  {
    question: 'What fractional opportunities exist in healthcare?',
    answer: 'Healthcare and HealthTech companies hire fractional executives in technology, commercial, operations, and clinical leadership. Fractional CTOs, CMOs, and COOs are common, along with specialist roles like Chief Medical Officers.',
  },
  {
    question: 'What qualifications are needed for healthcare fractional roles?',
    answer: 'Healthcare fractional roles typically require sector experience, understanding of NHS/private healthcare landscapes, and knowledge of healthcare regulations. HealthTech roles often seek executives who can bridge clinical and commercial expertise.',
  },
]

export const ECOMMERCE_FAQS: FAQItem[] = [
  {
    question: 'What fractional roles do ecommerce companies hire?',
    answer: 'Ecommerce and DTC brands commonly hire fractional CMOs (for customer acquisition and retention), CTOs (for platform scaling), and CFOs (for unit economics and funding). Fractional COOs help with fulfilment and operations scaling.',
  },
  {
    question: 'What skills are valued in ecommerce fractional roles?',
    answer: 'Experience with performance marketing, marketplace management (Amazon, Shopify), conversion optimization, and unit economics are highly valued. Understanding seasonal planning, inventory management, and logistics is also important.',
  },
]

export const STARTUPS_FAQS: FAQItem[] = [
  {
    question: 'When should a startup hire a fractional executive?',
    answer: 'Startups typically hire fractional executives when they need senior expertise but cannot afford or justify full-time C-suite hires. Common triggers include preparing for fundraising, scaling after Series A, or addressing specific growth challenges.',
  },
  {
    question: 'What do fractional executives cost vs full-time hires?',
    answer: 'Fractional executives typically cost 30-50% less than equivalent full-time hires when factoring in salary, equity, benefits, and overhead. A fractional CFO at £1,000/day for 2 days/week costs around £100k/year vs £150-180k for a full-time CFO.',
  },
  {
    question: 'How do startups structure fractional engagements?',
    answer: 'Most startup fractional engagements are 1-2 days per week on retainer, with flexibility to scale up during critical periods (fundraising, launches). Typical engagement lengths are 6-12 months, though many become ongoing relationships.',
  },
]
