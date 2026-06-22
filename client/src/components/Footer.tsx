import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-olive-200 bg-olive-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <form className="lg:col-span-2" action="#">
            <p className="text-lg font-semibold">Stay in the loop</p>
            <p className="mt-2 text-sm text-olive-300">
              Get customer support tips, product updates and customer stories that you can archive as soon as they arrive.
            </p>
            <div className="mt-4 flex gap-2 rounded-xl bg-white p-1.5">
              <input type="email" placeholder="Email" aria-label="Email" className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-olive-950 outline-none placeholder:text-olive-400" />
              <button type="submit" aria-label="Subscribe" className="inline-flex shrink-0 items-center justify-center rounded-lg bg-olive-950 px-4 py-2 text-white transition-colors hover:bg-olive-800">
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" strokeWidth="1" stroke="currentColor" className="size-4">
                  <path d="M12.5049 3.49512L0.504883 3.49512" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.5 6.5L12.5 3.5L9.5 0.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-olive-300">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-olive-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press Kit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-olive-300">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-olive-300">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-olive-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-olive-400">&copy; 2025 Oatmeal, Inc.</div>
          <div className="flex items-center gap-4">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-olive-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M13.6833 10.6218L20.2401 3H18.6864L12.9931 9.61788L8.44583 3H3.20117L10.0775 13.0074L3.20117 21H4.75501L10.7673 14.0113L15.5695 21H20.8141L13.6833 10.6218ZM11.5551 13.0956L10.8584 12.0991L5.31488 4.16971H7.7015L12.1752 10.5689L12.8719 11.5655L18.6871 19.8835H16.3005L11.5551 13.0956Z" />
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-olive-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-olive-400 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
