import type { Metadata } from "next"
import "./globals.css"
import { TooltipProvider } from "../components/ui/tooltip"
import ThemeProvider from "../providers/theme-provider"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import { AppSidebar } from "../components/shared/app-sidebar"
import LeftSidebar from "../components/layout/left-sidebar"
import RightSidebar from "../components/layout/right-sidebar"



export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter layout using Next.js + shadcn sidebar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <TooltipProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <div className="flex justify-center w-full">

              {/* Left Sidebar */}
              <div className="hidden md:flex w-68.75 justify-end">
                <LeftSidebar />
              </div>

              {/* Feed */}
              <main className="w-150 border-x border-border min-h-screen">
                {children}
              </main>

              {/* Right Sidebar */}
              <div className="hidden lg:block w-87.5">
                <RightSidebar />
              </div>

            </div>

          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
