export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div className='container mx-auto min-h-screen'>{children}</div>
}
