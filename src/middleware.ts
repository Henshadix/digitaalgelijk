import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lijst met paden die toegankelijk moeten blijven voor ontwikkeling
const ALLOWED_PATHS = [
  '/onder-constructie',
  '/_next',
  '/api',
  '/favicon.ico',
  '/images',
  '/fonts'
];

// Controleer of een pad moet worden omgeleid
const shouldRedirect = (path: string): boolean => {
  // Controleer of het pad begint met een van de toegestane paden
  return !ALLOWED_PATHS.some(allowedPath => 
    path === allowedPath || path.startsWith(`${allowedPath}/`)
  );
};

export function middleware(request: NextRequest) {
  // Middleware completely disabled - no redirects to under construction page
  return NextResponse.next();
}

// Configureer de middleware om op alle routes te werken
export const config = {
  matcher: [
    /*
     * Match alle paden behalve:
     * 1. /api routes
     * 2. /_next (Next.js interne routes)
     * 3. /_vercel (Vercel interne routes)
     * 4. /fonts, /images (statische bestanden)
     * 5. /favicon.ico, /robots.txt, /sitemap.xml (SEO bestanden)
     */
    '/((?!api|_next|_vercel|fonts|images|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}; 