//REAL
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
  const isLoggedIn = Boolean(token);

  const { pathname } = req.nextUrl;

  const publicPathsForUnauth = ["/login", "/signup"];
  const protectedPaths = [
    "/sell-car1",
    "/sell-car2",
    "/sell-car3",
    "/sell-car4",
    "/car",
    "/profile"
  ];

  // 🔐 Redirect authenticated users away from public pages
  if (isLoggedIn && publicPathsForUnauth.includes(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/profile";
    return NextResponse.redirect(url);
  }

  // 🔒 Redirect unauthenticated users from protected routes
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
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


