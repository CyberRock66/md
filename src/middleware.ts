import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { privateRoutes, publicRoutes } from '@/utils/routes.util';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = request.cookies.get('token')?.value;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static')
  ) {
    return NextResponse.next();
  }

  if (user) {
    if (privateRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    request.nextUrl.pathname = '/';
    return NextResponse.redirect(request.nextUrl);
  }

  if (!user) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    request.nextUrl.pathname = '/';
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}
