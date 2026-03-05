import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS, SITE_CONFIG } from '@/utils/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#CCCCCC]/30 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl">
        <nav className="flex h-16 items-center justify-between px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-[#1D3C78] flex items-center justify-center">
              <span className="text-white font-bold text-sm leading-none">FF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#000000] leading-tight tracking-tight">
                Fair Fab
              </span>
              <span className="text-[10px] font-medium text-[#444950] uppercase tracking-[0.2em] leading-tight">
                Gallery
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                    location.pathname === item.path
                      ? 'text-[#1877F2] bg-[#ECF3FF]'
                      : 'text-[#444950] hover:text-[#1D3C78] hover:bg-[#F2F3F5]'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#444950] hover:text-[#1877F2] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <Button asChild size="default">
              <Link to="/contact">Commission Art</Link>
            </Button>
          </div>

          <div className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-lg bg-[#1D3C78] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">FF</span>
                      </div>
                      <span className="text-lg font-bold">Fair Fab Gallery</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center rounded-md px-4 py-3 text-base font-medium transition-colors',
                        location.pathname === item.path
                          ? 'text-[#1877F2] bg-[#ECF3FF]'
                          : 'text-[#000000] hover:bg-[#F2F3F5]'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-[#CCCCCC]">
                    <Button asChild className="w-full">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Commission Art
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
