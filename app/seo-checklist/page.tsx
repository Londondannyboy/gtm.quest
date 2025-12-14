import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GTM SEO Checklist | Product Launch SEO Guide | GTM Quest',
  description: 'Free GTM SEO checklist for product launches. Optimize for search engines while building your go-to-market strategy. Download our checklist.',
  keywords: 'seo checklist, gtm seo, product launch seo, technical seo, on-page seo, seo optimization',
  alternates: { canonical: 'https://gtm.quest/seo-checklist' },
  openGraph: {
    title: 'GTM SEO Checklist | Free Resource',
    description: 'Comprehensive SEO checklist for product launches and go-to-market strategies.',
    type: 'website'
  }
}

export default function SEOChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-400 text-blue-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Free Resource</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">GTM SEO<br /><span className="text-blue-300">Checklist</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">Optimize your product launch for search engines. Download our comprehensive SEO checklist to ensure your go-to-market reaches customers through organic search.</p>
          </div>
        </div>
      </section>

      {/* Pre-Launch SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Pre-Launch SEO Checklist</h2>
          <div className="space-y-6">
            {[
              {
                category: 'Keyword Research',
                items: [
                  '☐ Identify 20-30 target keywords (informational, commercial, transactional)',
                  '☐ Analyze keyword difficulty and search volume',
                  '☐ Research competitor keywords and rankings',
                  '☐ Create keyword map (keywords to pages)',
                  '☐ Identify long-tail keywords for quick wins'
                ]
              },
              {
                category: 'Technical SEO Foundation',
                items: [
                  '☐ Set up Google Search Console and Bing Webmaster Tools',
                  '☐ Configure robots.txt and sitemap.xml',
                  '☐ Ensure SSL/HTTPS on all pages',
                  '☐ Fix crawl errors and broken links',
                  '☐ Optimize site speed (mobile first)',
                  '☐ Implement mobile-responsive design'
                ]
              },
              {
                category: 'Site Structure',
                items: [
                  '☐ Plan logical site hierarchy (home > category > page)',
                  '☐ Create descriptive URLs (avoid dates, session IDs)',
                  '☐ Implement breadcrumb navigation',
                  '☐ Add internal linking strategy (link related pages)',
                  '☐ Create robots.txt to control crawling',
                  '☐ Generate XML sitemap and submit to GSC'
                ]
              },
              {
                category: 'Content Planning',
                items: [
                  '☐ Create content for target keywords (blog, guides, FAQs)',
                  '☐ Plan pillar content and supporting cluster content',
                  '☐ Outline homepage and key landing pages',
                  '☐ Plan for regular content updates (at least 2-3x per month)',
                  '☐ Create content for each stage of customer journey'
                ]
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                <div className="space-y-2">
                  {section.items.map((item, j) => (
                    <p key={j} className="text-gray-700 text-sm font-mono">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-Page SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">On-Page SEO Checklist</h2>
          <div className="space-y-6">
            {[
              {
                element: 'Page Title (Title Tag)',
                best_practice: '50-60 characters, include primary keyword, compelling and clear',
                example: 'Go-to-Market Consultant | GTM Strategy Expert | GTM Quest',
                priority: 'HIGH'
              },
              {
                element: 'Meta Description',
                best_practice: '150-160 characters, include target keyword, clear call-to-action',
                example: 'Expert go-to-market consultants for product launches and market entry. Strategic GTM planning, execution support, and launch management.',
                priority: 'HIGH'
              },
              {
                element: 'H1 Tag',
                best_practice: 'One per page, include primary keyword, 50-60 characters, clear and descriptive',
                example: 'Go-to-Market Consultant: Expert GTM Strategy & Execution',
                priority: 'HIGH'
              },
              {
                element: 'H2 & H3 Tags',
                best_practice: 'Use naturally, include related keywords, create logical outline',
                example: 'Subheadings that organize page content logically',
                priority: 'MEDIUM'
              },
              {
                element: 'Keyword Usage',
                best_practice: 'Primary keyword in H1, meta description, first 100 words. Natural placement throughout.',
                example: 'Use "go-to-market consultant" 2-3 times in main content',
                priority: 'MEDIUM'
              },
              {
                element: 'Internal Linking',
                best_practice: 'Link to 3-5 related pages, use descriptive anchor text (not "click here")',
                example: 'Link to GTM strategy guide, service pages, related resources',
                priority: 'HIGH'
              },
              {
                element: 'Image Optimization',
                best_practice: 'Descriptive filename, alt text with keywords, optimize file size',
                example: 'filename: gtm-strategy-framework.jpg, alt: "GTM strategy framework with 8 components"',
                priority: 'MEDIUM'
              },
              {
                element: 'Content Quality',
                best_practice: '1500+ words for competitive keywords, comprehensive, original perspective',
                example: 'In-depth guide covering all aspects of topic',
                priority: 'HIGH'
              },
              {
                element: 'Readability',
                best_practice: 'Short paragraphs (2-3 sentences), bullet points, subheadings every 200-300 words',
                example: 'Easy to scan and read on mobile',
                priority: 'MEDIUM'
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.element}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    item.priority === 'HIGH' ? 'bg-red-100 text-red-900' : 'bg-yellow-100 text-yellow-900'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-gray-700 text-sm"><strong>Best Practice:</strong> {item.best_practice}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded text-sm font-mono text-gray-700">
                  <p><strong>Example:</strong> {item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Technical SEO Checklist</h2>
          <div className="space-y-4">
            {[
              {
                category: 'Page Speed',
                items: [
                  '☐ Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)',
                  '☐ Mobile page speed < 3 seconds (test with PageSpeed Insights)',
                  '☐ Images optimized and lazy-loaded',
                  '☐ Minified CSS/JavaScript',
                  '☐ Browser caching enabled'
                ]
              },
              {
                category: 'Mobile Optimization',
                items: [
                  '☐ Mobile-first design implemented',
                  '☐ Responsive on all screen sizes',
                  '☐ Touch-friendly buttons and links',
                  '☐ Mobile viewport configured',
                  '☐ Mobile usability tested'
                ]
              },
              {
                category: 'Structured Data & Schema',
                items: [
                  '☐ Schema.org markup added (Organization, FAQPage, Article)',
                  '☐ JSON-LD format used',
                  '☐ Rich snippets tested in Google Search Console',
                  '☐ FAQPage schema for FAQ sections',
                  '☐ Breadcrumb schema implemented'
                ]
              },
              {
                category: 'Link Health',
                items: [
                  '☐ No broken links (404s)',
                  '☐ Redirects in place for old URLs',
                  '☐ No excessive external links to untrusted sites',
                  '☐ No nofollow spam links',
                  '☐ Link profile looks natural'
                ]
              },
              {
                category: 'Canonicalization',
                items: [
                  '☐ Canonical tags on all pages',
                  '☐ Self-referencing canonicals on unique pages',
                  '☐ Preferred domain set in GSC',
                  '☐ No conflicting canonical tags',
                  '☐ Handles trailing slashes properly'
                ]
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{section.category}</h3>
                <div className="space-y-1">
                  {section.items.map((item, j) => (
                    <p key={j} className="text-gray-700 text-sm font-mono">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Building */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Link Building & Authority</h2>
          <div className="space-y-6">
            {[
              {
                strategy: 'Content Marketing',
                tactic: 'Create linkable assets (guides, tools, research, data) that others want to reference'
              },
              {
                strategy: 'Outreach',
                tactic: 'Email relevant sites and blogs, ask them to link if your content is relevant to their audience'
              },
              {
                strategy: 'Media Mentions & PR',
                tactic: 'Get press coverage or mentions in industry publications (they often link)'
              },
              {
                strategy: 'Directory Listings',
                tactic: 'Submit to relevant industry directories (B2B directories, startup directories, etc.)'
              },
              {
                strategy: 'Guest Posting',
                tactic: 'Write articles for other blogs and industry publications (include link to your site)'
              },
              {
                strategy: 'Partnerships & Collaborations',
                tactic: 'Link exchanges with complementary businesses, co-marketing partnerships'
              },
              {
                strategy: 'Community & Forum Participation',
                tactic: 'Participate authentically in communities (not spammy), helpful comments with your site'
              },
              {
                strategy: 'Internal Links',
                tactic: 'Create links between your own pages to distribute authority'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.strategy}</h3>
                <p className="text-gray-700 text-sm">{item.tactic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Ongoing SEO Maintenance (Weekly/Monthly)</h2>
          <div className="bg-white p-8 rounded-lg border-2 border-blue-500 space-y-6">
            {[
              {
                frequency: 'Weekly',
                tasks: [
                  'Monitor Google Search Console for errors',
                  'Check top pages for performance',
                  'Review analytics for traffic sources',
                  'Publish new content (1-2 articles)'
                ]
              },
              {
                frequency: 'Monthly',
                tasks: [
                  'Review keyword rankings for target keywords',
                  'Analyze competitor strategy',
                  'Update underperforming pages',
                  'Build 3-5 new quality backlinks',
                  'Monitor backlink profile for negative links',
                  'Audit internal links (add more to top pages)'
                ]
              },
              {
                frequency: 'Quarterly',
                tasks: [
                  'Comprehensive SEO audit (technical, on-page, off-page)',
                  'Update old content (refresh statistics, add new insights)',
                  'Analyze new keyword opportunities',
                  'Review competitive landscape',
                  'Identify and fix any issues',
                  'Plan content strategy for next quarter'
                ]
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{section.frequency}</h3>
                <ul className="space-y-2">
                  {section.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Essential SEO Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tool: 'Google Search Console', use: 'Monitor search performance, submit sitemap, track keywords' },
              { tool: 'Google Analytics 4', use: 'Track user behavior, traffic sources, conversion data' },
              { tool: 'Ahrefs', use: 'Backlink analysis, competitor research, keyword research' },
              { tool: 'SEMrush', use: 'Keyword research, competitor analysis, position tracking' },
              { tool: 'Moz', use: 'Keyword research, site audit, link building opportunities' },
              { tool: 'Screaming Frog', use: 'Technical SEO audit, crawl errors, on-page analysis' },
              { tool: 'PageSpeed Insights', use: 'Test page speed, get optimization recommendations' },
              { tool: 'Schema.org & Google\'s Structured Data Tool', use: 'Validate and test schema markup' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{item.tool}</h3>
                <p className="text-gray-700 text-sm">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-6">Optimize Your GTM for Search</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Use this checklist to ensure your product launch reaches customers through organic search. Download the full checklist and implement today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gtm-strategy" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">Learn GTM Strategy</Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">Get Expert Help</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
