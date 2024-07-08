import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  '/',
  "/Upcoming",
  '/recordings',
  '/Previous',
  '/personal-room'
]);

export default clerkMiddleware((auth, req) => {
  const forwardedHost = req.headers.get('x-forwarded-host');
  const origin = req.headers.get('origin');

  // Handle headers mismatch
  if (forwardedHost && origin && forwardedHost !== origin) {
    if (origin === 'http://localhost:3000') {
      req.headers.set('origin', forwardedHost);
    } else {
      return new NextResponse('Invalid Server Actions request', { status: 500 });
    }
  }

  if (protectedRoutes(req)) auth().protect();

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
