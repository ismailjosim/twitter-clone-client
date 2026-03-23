import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_ROUTES = ['/', '/profile', '/messages', '/notifications']
const AUTH_ROUTES = ['/login', '/signup']

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl

	const accessToken = request.cookies.get('access_token')?.value
	const isLoggedIn = !!accessToken

	const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
		pathname.startsWith(route),
	)
	const isAuthRoute = AUTH_ROUTES.some((route) => pathname === route)

	// Not logged in → trying to access protected page → redirect to /login
	if (!isLoggedIn && isProtectedRoute) {
		const loginUrl = new URL('/login', request.url)
		loginUrl.searchParams.set('next', pathname)
		return NextResponse.redirect(loginUrl)
	}

	// Already logged in → trying to access /login or /signup → redirect to /
	if (isLoggedIn && isAuthRoute) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		'/',
		'/login',
		'/signup',
		'/profile/:path*',
		'/messages/:path*',
		'/notifications/:path*',
	],
}
