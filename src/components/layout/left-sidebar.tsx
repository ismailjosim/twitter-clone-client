import {
    Home, Search, Bell, Mail, Bookmark, User,
    Slash, Bot, SquarePlay, MoreHorizontal
} from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../shared/ThemeToggle";

export default function LeftSidebar() {
    const menu = [
        { icon: Home, label: "Home" },
        { icon: Search, label: "Explore" },
        { icon: Bell, label: "Notifications" },
        { icon: Mail, label: "Chat" },
        { icon: Bot, label: "Grok" },
        { icon: Bookmark, label: "Bookmarks" },
        { icon: SquarePlay, label: "Creator Studio" },
        { icon: Slash, label: "Premium", badge: "50% off" },
        { icon: User, label: "Profile" },
        { icon: MoreHorizontal, label: "More" },
    ];

    return (
        <aside className="h-screen sticky top-0 flex flex-col justify-between p-4 w-64 ">
            <div className="flex flex-col gap-1 w-full">
                {/* Logo */}
                <div className="p-3 mb-2">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                </div>

                {/* Navigation Items */}
                {menu.map((item, i) => (
                    <Button
                        key={i}
                        variant="ghost"
                        className="group flex items-center justify-start gap-4 text-xl font-normal py-6 px-4 rounded-full hover:bg-zinc-900 transition-all w-fit pr-8"
                    >
                        <item.icon size={28} strokeWidth={item.label === "Home" ? 3 : 2} />
                        <span className="hidden xl:inline-block">{item.label}</span>
                        {item.badge && (
                            <span className="ml-2 bg-blue-500 text-[10px] text-white px-1.5 py-0.5 rounded font-bold">
                                {item.badge}
                            </span>
                        )}
                    </Button>
                ))}

                {/* Post Button */}
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-full py-6 mt-4 text-lg font-bold w-full xl:w-[90%]">
                    Post
                </Button>
            </div>

            {/* User Profile Section */}
            <div className="flex items-center justify-between p-3 mb-4 rounded-full hover:bg-zinc-900 cursor-pointer transition-all">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasim"
                            alt="avatar"
                        />
                    </div>
                    <div className="hidden xl:flex flex-col">
                        <span className="font-bold text-sm leading-tight">MD JASIM</span>
                        <span className="text-zinc-500 text-sm">@ismail_josim</span>
                    </div>
                </div>

                <ThemeToggle />
                <MoreHorizontal className="hidden xl:block" size={18} />
            </div>
        </aside>
    );
}
