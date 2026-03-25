/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGoogle, FaApple } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'sonner'
import { graphqlClient } from '../../../../clients/api'
import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useRouter, useSearchParams } from 'next/navigation'
import { verifyUserGoogleTokenMutation } from '../../../../graphql/query/user'

export default function HomeActions({ setView }: any) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const handleGoogleLogin = useGoogleLogin({
		onSuccess: async (response) => {
			try {
				// console.log({ response })

				if (!response.access_token) {
					return toast.error('Google Token not found!')
				}

				// send to backend if needed
				const { verifyGoogleToken } = await graphqlClient.request(
					verifyUserGoogleTokenMutation as TypedDocumentNode<
						any,
						{ token: string }
					>,
					{ token: response.access_token },
				)
				if (!verifyGoogleToken) {
					return toast.error('Google login failed. Please try again.')
				}
				const { accessToken, refreshToken, user } = verifyGoogleToken
				// Send tokens to Next.js route handler to set httpOnly cookies
				const res = await fetch('/api/auth/set-tokens', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ accessToken, refreshToken }),
				})

				if (!res.ok) {
					return toast.error('Failed to save session.')
				}

				toast.success(`Welcome, ${user.name ?? user.email}!`)
				const next = searchParams.get('next') || '/'
				router.push(next)
			} catch (error) {
				console.error(error)
				toast.error('Something went wrong during Google login.')
			}
		},
		onError: () => {
			console.log('Google Login Failed')
			toast.error('Google login failed. Please try again.')
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
