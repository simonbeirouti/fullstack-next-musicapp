import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/signin', request.url))
}

export const config = {
    matcher: [
        '/',
        '/playlist',
        '/library'
    ],
}