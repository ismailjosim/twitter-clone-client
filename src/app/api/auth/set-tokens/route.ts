import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { accessToken, refreshToken } = await req.json()

	if (!accessToken || !refreshToken) {
		return NextResponse.json({ error: 'Token missing' }, { status: 400 })
	}

	const response = NextResponse.json({ success: true })
	response.cookies.set('access_token', accessToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 7, // 7 days (match your JWT expiry)
		path: '/',
	})

	response.cookies.set('refresh_token', refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 90, // 90 days
		path: '/',
	})

	return response
}
