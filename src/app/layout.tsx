import type { Metadata } from 'next'
import './globals.css'
import { TooltipProvider } from '../components/ui/tooltip'
import ThemeProvider from '../providers/theme-provider'
import localFont from 'next/font/local'
const chirp = localFont({
	src: [
		{
			path: './fonts/Chirp-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Chirp-Medium.woff2',
			weight: '500',
			style: 'normal',
		},

		{
			path: './fonts/Chirp-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/Chirp-Heavy.woff2',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-chirp',
})

export const metadata: Metadata = {
	title: 'Twitter Clone',
	description: 'Twitter layout using Next.js + shadcn sidebar',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${chirp.variable} font-sans bg-background text-foreground min-h-screen`}
			>
				<TooltipProvider>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
						{children}
					</ThemeProvider>
				</TooltipProvider>
			</body>
		</html>
	)
}
