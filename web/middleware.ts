import { NextRequest, NextResponse } from 'next/server'

export function middleware (req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl
  if (pathname.startsWith('/api')) {
    console.log(`${req.method.toUpperCase()} ${pathname} | ?${searchParams.toString()}`)
  }
  return NextResponse.next()
}
