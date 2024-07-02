import { NextResponse } from "next/server";

export default async function authMiddle(req) {
  if (
    !req.cookies.get("next-auth.session-token") &&
    req.url.includes("/resume/create")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    !req.cookies.get("next-auth.session-token") &&
    req.url.includes("/form")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}
