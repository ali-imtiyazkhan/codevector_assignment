"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm" id="navbar">
      <style>{":root { --scroll-padding-top: 5.25rem }"}</style>
      <nav>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <div className="hidden items-center gap-8 lg:flex">
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="#">Docs</NavLink>
            <NavLink href="#">Log in</NavLink>
          </div>
          <div className="flex items-center">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-olive-950">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v6.64l-7 3.5-7-3.5V7.68l7-3.5z" />
              </svg>
              <span className="text-lg font-semibold text-olive-950">CodeVector</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden items-center gap-3 md:flex">
              <Link href="#" className="inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-olive-950 transition-colors hover:bg-olive-100">
                Log in
              </Link>
              <Link href="#" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-olive-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-olive-800">
                Sign up
              </Link>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex shrink-0 items-center justify-center rounded-full p-2.5 text-olive-950 transition-colors hover:bg-olive-100 lg:hidden"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/20 lg:hidden" onClick={() => setOpen(false)}>
            <div className="flex h-full w-80 flex-col gap-8 overflow-y-auto bg-white px-6 pb-8 pt-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex shrink-0 items-center justify-center rounded-full p-2.5 text-olive-950 transition-colors hover:bg-olive-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-4 text-lg">
                <MobileNavLink href="/pricing">Pricing</MobileNavLink>
                <MobileNavLink href="/about">About</MobileNavLink>
                <MobileNavLink href="#">Docs</MobileNavLink>
                <MobileNavLink href="#">Log in</MobileNavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-olive-950 transition-colors hover:text-olive-600">
      {children}
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex shrink-0 items-center gap-1.5 font-medium text-olive-950 transition-colors hover:text-olive-600">
      {children}
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  );
}
