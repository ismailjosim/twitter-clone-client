/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGoogle, FaApple } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'

export default function HomeActions({ setView }: any) {
	const handleGoogleLogin = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			console.log('Google access token:', tokenResponse.access_token)

			try {
				const res = await fetch(
					'https://www.googleapis.com/oauth2/v3/userinfo',
					{
						headers: {
							Authorization: `Bearer ${tokenResponse.access_token}`,
						},
					},
				)

				const userInfo = await res.json()

				console.log('Google user:', userInfo)

				// send to backend if needed
				// await fetch("/api/auth/google", { ... })
			} catch (error) {
				console.error(error)
			}
		},
		onError: () => {
			console.log('Google Login Failed')
		},
	})
	return (
		<div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
			<h1
				className='text-white font-black tracking-tight'
				style={{
					fontSize: 'clamp(2rem,5vw,3rem)',
					fontFamily: "'Georgia', serif",
				}}
			>
				Happening now
			</h1>

			<h2 className='text-white text-xl font-bold'>Join today.</h2>

			<div className='space-y-3'>
				<button
					onClick={() => handleGoogleLogin()}
					className='w-full flex items-center justify-center gap-3 bg-accent-foreground text-accent py-2.5 rounded-full cursor-pointer hover:bg-accent hover:text-accent-foreground transition duration-300 ease-in-out'
				>
					<FaGoogle />
					Sign up with Google
				</button>
				<button className='w-full flex items-center justify-center gap-3 bg-accent-foreground text-accent py-2.5 rounded-full cursor-pointer hover:bg-accent hover:text-accent-foreground transition duration-300 ease-in-out'>
					<FaApple />
					Sign up with Apple
				</button>
				<div className='flex items-center gap-3'>
					<div className='flex-1 h-px bg-zinc-800' />
					<span className='text-zinc-500 text-sm'>or</span>
					<div className='flex-1 h-px bg-zinc-800' />
				</div>
				<button
					onClick={() => setView('signup')}
					className='w-full bg-[#1d9bf0] text-white font-bold py-2.5 rounded-full cursor-pointer'
				>
					Create account
				</button>
				<p className='text-[11px] text-zinc-500 leading-relaxed'>
					By signing up, you agree to the{' '}
					<Link href='/terms' className='text-[#1d9bf0]'>
						Terms of Service
					</Link>{' '}
					and{' '}
					<Link href='/policy' className='text-[#1d9bf0]'>
						Privacy Policy
					</Link>
				</p>
			</div>

			<div className='space-y-3 pt-4'>
				<p className='text-white font-bold'>Already have an account?</p>

				<button
					onClick={() => setView('signin')}
					className='w-full border border-zinc-600 text-[#1d9bf0] py-2.5 rounded-full'
				>
					Sign in
				</button>

				<button className='w-full flex items-center justify-center gap-2 border border-zinc-600 py-2.5 rounded-full'>
					<Image src='/Grok-icon.svg' width={20} height={20} alt='grok' />
					Get Grok
				</button>
			</div>
		</div>
	)
}
