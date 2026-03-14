/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"

import {
    Field,
    FieldLabel,
    FieldError,
    FieldGroup
} from "@/src/components/ui/field"

const schema = z.object({
    email: z.string().min(1, "Email required"),
    password: z.string().min(6, "Minimum 6 characters"),
})

export default function SignInForm({ setView }: any) {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: any) {
        console.log(values)
    }

    return (
        <div className="space-y-6">

            <h2 className="text-white text-2xl font-bold text-center">
                Sign in to X
            </h2>

            <form
                className="space-y-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >

                <FieldGroup>

                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel>Email</FieldLabel>

                                <Input
                                    {...field}
                                    placeholder="Phone, email, or username"
                                    className="h-12"
                                />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                    <Controller
                        name="password"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>

                                <FieldLabel>Password</FieldLabel>

                                <Input
                                    {...field}
                                    type="password"
                                    placeholder="Password"
                                    className="h-12"
                                />

                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}

                            </Field>
                        )}
                    />

                </FieldGroup>

                <Button className="w-full rounded-full">
                    Sign in
                </Button>

            </form>

            <button
                onClick={() => setView("home")}
                className="text-zinc-400 text-sm"
            >
                ← Back
            </button>

        </div>
    )
}
