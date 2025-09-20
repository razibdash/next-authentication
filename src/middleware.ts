import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protect all routes that start with /dashboard
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async(auth, req) => {
  if (isProtectedRoute(req)) {
   await auth.protect(); // ✅ Note: call auth() first
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
