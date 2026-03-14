'use client'
// https://www.facebook.com/share/v/1791FhpXHU/
import { useState } from 'react'
import { Input } from '../../../ui/input'
import { cn } from '../../../../lib/utils'

// SVG Icons
const XLogo = () => (
    <svg viewBox='0 0 24 24' className='w-10 h-10 fill-white' aria-hidden='true'>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
)

const GoogleIcon = () => (
    <svg viewBox='0 0 24 24' className='w-5 h-5' aria-hidden='true'>
        <path
            d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
            fill='#4285F4'
        />
        <path
            d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
            fill='#34A853'
        />
        <path
            d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
            fill='#FBBC05'
        />
        <path
            d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
            fill='#EA4335'
        />
    </svg>
)

const AppleIcon = () => (
    <svg viewBox='0 0 24 24' className='w-5 h-5 fill-white' aria-hidden='true'>
        <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />
    </svg>
)

const GrokIcon = () => (
    <svg viewBox='0 0 24 24' className='w-5 h-5 fill-white' aria-hidden='true'>
        <path d='M20.33 14.78L8.9 3.35a1.15 1.15 0 0 0-1.55 0L3.67 7.03a1.1 1.1 0 0 0 0 1.55l4.71 4.71-4.71 4.71a1.1 1.1 0 0 0 0 1.55l3.68 3.68a1.1 1.1 0 0 0 1.55 0l11.43-11.43a1.1 1.1 0 0 0 0-1.02z' />
    </svg>
)

type View = 'home' | 'signin' | 'signup'

export default function LoginFrom() {
    const [view, setView] = useState<View>('home')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsLoading(false)
    }

    return (
        <section className='min-h-screen flex justify-between items-center'>
            {/* left side content */}
            <div className="flex-1 flex items-center justify-center lg:justify-start">
                <div className="transition-transform duration-300 hover:scale-105 text-foreground">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="w-full h-full fill-current"
                    >
                        <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
                    </svg>
                </div>
            </div>

            {/* Right: Auth Panel */}
            <div className='flex-1 flex flex-col justify-center w-full'>
                {view === 'home' && (
                    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
                        <div className='space-y-1'>
                            <h1
                                className='text-white font-black leading-none tracking-tight'
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                                    fontFamily: "'Georgia', serif",
                                }}
                            >
                                Happening now
                            </h1>
                        </div>

                        <div className='space-y-4'>
                            <h2 className='text-white text-xl font-bold'>Join today.</h2>

                            <div className='space-y-3'>
                                {/* Google */}
                                <button
                                    onClick={() => { }}
                                    className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'
                                >
                                    <GoogleIcon />
                                    <span>Sign up with Google</span>
                                </button>

                                {/* Apple */}
                                <button
                                    onClick={() => { }}
                                    className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'
                                >
                                    <AppleIcon />
                                    <span className='text-black'>Sign up with Apple</span>
                                </button>

                                {/* Divider */}
                                <div className='flex items-center gap-3'>
                                    <div className='flex-1 h-px bg-zinc-800' />
                                    <span className='text-zinc-500 text-sm font-medium'>
                                        or
                                    </span>
                                    <div className='flex-1 h-px bg-zinc-800' />
                                </div>

                                {/* Create account */}
                                <button
                                    onClick={() => setView('signup')}
                                    className='w-full flex items-center justify-center bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'
                                >
                                    Create account
                                </button>

                                <p className='text-[11px] text-zinc-500 leading-relaxed'>
                                    By signing up, you agree to the{' '}
                                    <a href='#' className='text-[#1d9bf0] hover:underline'>
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href='#' className='text-[#1d9bf0] hover:underline'>
                                        Privacy Policy
                                    </a>
                                    , including{' '}
                                    <a href='#' className='text-[#1d9bf0] hover:underline'>
                                        Cookie Use
                                    </a>
                                    .
                                </p>
                            </div>

                            {/* Sign in section */}
                            <div className='space-y-3 pt-4'>
                                <p className='text-white font-bold text-base'>
                                    Already have an account?
                                </p>
                                <button
                                    onClick={() => setView('signin')}
                                    className='w-full flex items-center justify-center border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-900 text-[#1d9bf0] font-bold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'
                                >
                                    Sign in
                                </button>

                                {/* Grok button */}
                                <button
                                    onClick={() => { }}
                                    className='w-full flex items-center justify-center gap-2 border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-900 text-white font-bold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'
                                >
                                    <GrokIcon />
                                    <span>Get Grok</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {view === 'signin' && (
                    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
                        <div className='flex justify-center mb-2'>
                            <XLogo />
                        </div>
                        <h2 className='text-white text-2xl font-bold text-center'>
                            Sign in to X
                        </h2>

                        <div className='space-y-3'>
                            <button className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'>
                                <GoogleIcon />
                                <span>Sign in with Google</span>
                            </button>
                            <button className='w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold text-sm py-2.5 px-4 rounded-full transition-all duration-150 active:scale-[0.98]'>
                                <AppleIcon />
                                <span className='text-black'>Sign in with Apple</span>
                            </button>

                            <div className='flex items-center gap-3'>
                                <div className='flex-1 h-px bg-zinc-800' />
                                <span className='text-zinc-500 text-sm font-medium'>or</span>
                                <div className='flex-1 h-px bg-zinc-800' />
                            </div>

                            <form onSubmit={handleSubmit} className='space-y-3'>
                                <Input
                                    type='text'
                                    placeholder='Phone, email, or username'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='bg-transparent border-zinc-600 text-white placeholder:text-zinc-500 rounded-md focus-visible:ring-[#1d9bf0] focus-visible:border-[#1d9bf0] h-12'
                                />
                                <Input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='bg-transparent border-zinc-600 text-white placeholder:text-zinc-500 rounded-md focus-visible:ring-[#1d9bf0] focus-visible:border-[#1d9bf0] h-12'
                                />

                                <button
                                    type='submit'
                                    disabled={isLoading || !email || !password}
                                    className={cn(
                                        'w-full flex items-center justify-center text-sm font-bold py-2.5 rounded-full transition-all duration-150',
                                        email && password
                                            ? 'bg-white text-black hover:bg-gray-200 active:scale-[0.98]'
                                            : 'bg-zinc-700 text-zinc-500 cursor-not-allowed',
                                    )}
                                >
                                    {isLoading ? (
                                        <span className='flex items-center gap-2'>
                                            <svg
                                                className='animate-spin h-4 w-4'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                            >
                                                <circle
                                                    className='opacity-25'
                                                    cx='12'
                                                    cy='12'
                                                    r='10'
                                                    stroke='currentColor'
                                                    strokeWidth='4'
                                                />
                                                <path
                                                    className='opacity-75'
                                                    fill='currentColor'
                                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
                                                />
                                            </svg>
                                            Signing in...
                                        </span>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </form>

                            <button className='w-full flex items-center justify-center border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-900 text-white font-bold text-sm py-2.5 px-4 rounded-full transition-all duration-150'>
                                Forgot password?
                            </button>
                        </div>

                        <p className='text-zinc-500 text-sm text-center'>
                            Don&apos;t have an account?{' '}
                            <button
                                onClick={() => setView('signup')}
                                className='text-[#1d9bf0] hover:underline font-semibold'
                            >
                                Sign up
                            </button>
                        </p>

                        <button
                            onClick={() => setView('home')}
                            className='text-zinc-500 hover:text-white text-sm flex items-center gap-1 transition-colors'
                        >
                            ← Back
                        </button>
                    </div>
                )}

                {view === 'signup' && (
                    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
                        <div className='flex justify-center mb-2'>
                            <XLogo />
                        </div>
                        <h2 className='text-white text-2xl font-bold text-center'>
                            Create your account
                        </h2>

                        <form onSubmit={handleSubmit} className='space-y-3'>
                            <Input
                                type='text'
                                placeholder='Name'
                                className='bg-transparent border-zinc-600 text-white placeholder:text-zinc-500 rounded-md focus-visible:ring-[#1d9bf0] focus-visible:border-[#1d9bf0] h-12'
                            />
                            <Input
                                type='email'
                                placeholder='Email'
                                className='bg-transparent border-zinc-600 text-white placeholder:text-zinc-500 rounded-md focus-visible:ring-[#1d9bf0] focus-visible:border-[#1d9bf0] h-12'
                            />
                            <Input
                                type='password'
                                placeholder='Password'
                                className='bg-transparent border-zinc-600 text-white placeholder:text-zinc-500 rounded-md focus-visible:ring-[#1d9bf0] focus-visible:border-[#1d9bf0] h-12'
                            />

                            <p className='text-[11px] text-zinc-500 leading-relaxed'>
                                By signing up, you agree to the{' '}
                                <a href='#' className='text-[#1d9bf0] hover:underline'>
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href='#' className='text-[#1d9bf0] hover:underline'>
                                    Privacy Policy
                                </a>
                                .
                            </p>

                            <button
                                type='submit'
                                className='w-full flex items-center justify-center bg-white hover:bg-gray-200 text-black text-sm font-bold py-2.5 rounded-full transition-all duration-150 active:scale-[0.98]'
                            >
                                Next
                            </button>
                        </form>

                        <p className='text-zinc-500 text-sm text-center'>
                            Already have an account?{' '}
                            <button
                                onClick={() => setView('signin')}
                                className='text-[#1d9bf0] hover:underline font-semibold'
                            >
                                Sign in
                            </button>
                        </p>

                        <button
                            onClick={() => setView('home')}
                            className='text-zinc-500 hover:text-white text-sm flex items-center gap-1 transition-colors'
                        >
                            ← Back
                        </button>
                    </div>
                )}
            </div>

        </section>
    )
}
