import LeftSidebar from '../../components/layout/left-sidebar'
import RightSidebar from '../../components/layout/right-sidebar'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex justify-center w-full'>
			{/* Left Sidebar */}
			<div className='hidden md:flex w-68.75 justify-end'>
				<LeftSidebar />
			</div>

			{/* Feed */}
			<main className='w-150 border-x border-border min-h-screen'>
				{children}
			</main>

			{/* Right Sidebar */}
			<div className='hidden lg:block w-87.5'>
				<RightSidebar />
			</div>
		</div>
	)
}
