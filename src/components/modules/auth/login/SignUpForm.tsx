/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'

import {
    Field,
    FieldLabel,
    FieldError,
    FieldGroup,
} from '@/src/components/ui/field'

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
})

export default function SignUpForm({ setView }: any) {
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    function onSubmit(values: any) {
        console.log(values)
    }

    return (
        <div className='space-y-6'>
            <h2 className='text-white text-2xl font-bold text-center'>
                Create your account
            </h2>

            <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <Controller
                        name='name'
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Name</FieldLabel>

                                <Input {...field} placeholder='Name' />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name='email'
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Email</FieldLabel>

                                <Input {...field} placeholder='Email' />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />

                    <Controller
                        name='password'
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Password</FieldLabel>

                                <Input {...field} type='password' placeholder='Password' />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </FieldGroup>

                <Button className='w-full rounded-full'>Create account</Button>
            </form>

            <button onClick={() => setView('home')} className='text-zinc-400 text-sm'>
                ← Back
            </button>
        </div>
    )
}
