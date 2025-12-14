import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-white font-black text-2xl mb-4 block">
              GTM Quest
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered GTM agency helping UK companies launch and scale their products faster.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://twitter.com" className="text-gray-400 hover:text-amber-500 transition">
                Twitter
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-amber-500 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* GTM Tools */}
          <div>
            <h3 className="text-white font-bold mb-4">GTM Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/planner" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Strategy Generator
                </Link>
              </li>
              <li>
                <Link href="/calculators/market-size" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Market Size Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/budget" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Budget Allocator
                </Link>
              </li>
              <li>
                <Link href="/calculators/pricing" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Pricing Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/roi" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  ROI Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* GTM Agency Services */}
          <div>
            <h3 className="text-white font-bold mb-4">GTM Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/chat" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  AI Strategist
                </Link>
              </li>
              <li>
                <Link href="/agencies" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Agency Directory
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  GTM Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Launch Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  GTM Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Best GTM Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 GTM Quest. One of the <span className="text-amber-500 font-semibold">leading GTM agencies in the UK</span>.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">
                Status
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">
                Partners
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-500 transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
