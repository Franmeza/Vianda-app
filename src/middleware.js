import { NextResponse } from "next/server";
import  { jwtVerify } from 'jose'

export async function middleware(request) {
  
  const token = request.cookies.get("myToken");

  if (token){
    const {payload} = await jwtVerify(token.value, new TextEncoder().encode('secret')) 
    console.log(payload)
  }
  
  if (request.nextUrl.pathname.includes("/admin") || request.nextUrl.pathname.includes("/mi-cuenta")) {
    if (token === undefined) {
      return NextResponse.redirect(new URL("/catalog/login", request.url));
    }
  }

  if (request.nextUrl.pathname.includes("/login")) {
    if (token !== undefined){
      return NextResponse.redirect(new URL("/catalog/mi-cuenta", request.url))
    }
  }

  return NextResponse.next();
}
