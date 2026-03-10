import { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
	const url = new URL(request.url)
}

// matcher
export const config = {
	matcher: '/api/:path*',
}
