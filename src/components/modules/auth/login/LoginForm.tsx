'use client'

import { useState } from 'react'
import HomeActions from './HomeActions'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

type View = 'home' | 'signin' | 'signup'

export default function LoginForm() {
    const [view, setView] = useState<View>('home')

    return (
        <div className='w-95'>
            {view === 'home' && <HomeActions setView={setView} />}

            {view === 'signin' && <SignInForm setView={setView} />}

            {view === 'signup' && <SignUpForm setView={setView} />}
        </div>
    )
}
