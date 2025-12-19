import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // protect dashboard routes
    if (pathname.startsWith("/dashboard")) {
        const hasSession =
            req.cookies.get("better-auth.session") ||
            req.cookies.get("__Secure-better-auth.session") ||
            req.cookies.get("auth.session");

        if (!hasSession) {
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            url.searchParams.set("next", pathname); // optional: after login redirect back
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

// only run on these paths
export const config = {
    matcher: ["/dashboard/:path*"],
};
