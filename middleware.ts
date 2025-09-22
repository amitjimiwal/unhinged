import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/unhinged(.*)"]);

export default clerkMiddleware(async (auth, req) => {
     if (isProtectedRoute(req)) {
          const { userId, redirectToSignIn } = await auth();
          if (!userId) {
               return redirectToSignIn({ returnBackUrl: req.url });
          }
     }
});

export const config = {
     matcher: [
          "/((?!.+\\.[\\w]+$|_next).*)",
          "/",
          "/(api|trpc)(.*)",
     ],
};


