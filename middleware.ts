// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("tokenu")?.value; // Replace with your actual cookie name
//   const { pathname } = req.nextUrl;
//   const isLoggedIn = Boolean(token);

//   const publicPathsForUnauth = ["/login", "/signup"];
//   const protectedPaths = ["/sell-car2","/sell-car3","/sell-car4", "/car", "/sell-car1", "/profile"];

//   //Redirect logged-in users away from auth pages
//   if (isLoggedIn && publicPathsForUnauth.includes(pathname)) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/profile"; // or "/"
//     return NextResponse.redirect(url);
//   }

//   // Block non-authenticated users from protected routes
//   const isProtected = protectedPaths.some((path) =>
//     pathname.startsWith(path)
//   );

//   if (!isLoggedIn && isProtected) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/login",
//     "/signup",
//     "/car/:path*",
//     "/sell-car1/:path*",
//     "/sell-car2/:path*",
//     "/sell-car3/:path*",
//     "/sell-car4/:path*",
//     "/profile",
//   ],
// };


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("tokenu")?.value; // Make sure "tokenu" matches your backend cookie name
  const { pathname } = req.nextUrl;
  const isLoggedIn = Boolean(token);

  const publicPathsForUnauth = ["/login", "/signup"];
  const protectedPaths = ["/sell-car1", "/sell-car2", "/sell-car3", "/sell-car4", "/car", "/profile"];

  // 🔐 Redirect authenticated users away from login/signup
  if (isLoggedIn && publicPathsForUnauth.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/profile";
    return NextResponse.redirect(url);
  }

  // 🔒 Block non-authenticated users from protected routes
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (!isLoggedIn && isProtected) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/car/:path*",
    "/sell-car1/:path*",
    "/sell-car2/:path*",
    "/sell-car3/:path*",
    "/sell-car4/:path*",
    "/profile",
  ],
};
