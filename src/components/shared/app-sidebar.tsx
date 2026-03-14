import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from '../ui/sidebar'

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>X</SidebarHeader>

			<SidebarContent>Navigation items</SidebarContent>

			<SidebarFooter>Profile section</SidebarFooter>
		</Sidebar>
	)
}
