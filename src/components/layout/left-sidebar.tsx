"use client";

import {
    Home, Search, Bell, Mail, Bookmark, User,
    Slash, Bot, SquarePlay, MoreHorizontal,
    Badge
} from "lucide-react";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Separator } from "../ui/separator";

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

export default function LeftSidebar() {
    const [active, setActive] = useState("Home");

    return (

        <aside className="h-screen sticky top-0 flex flex-col justify-between py-4 px-3 xl:px-4 w-18 xl:w-64 bg-sidebar border-r border-sidebar-border transition-all duration-200">

            {/* Top Section */}
            <div className="flex flex-col gap-0.5">

                {/* X Logo */}
                <div className="p-3 mb-1 w-fit">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </div>

                {/* Nav Items */}
                {menu.map((item) => {
                    const isActive = active === item.label;
                    const NavButton = (
                        <Button
                            key={item.label}
                            variant="ghost"
                            onClick={() => setActive(item.label)}
                            className={cn(
                                "group flex items-center justify-start gap-4 text-base font-normal",
                                "h-auto py-3 px-3 rounded-full w-fit xl:pr-6",
                                "text-foreground transition-colors duration-150",
                                "hover:bg-accent hover:text-accent-foreground cursor-pointer",
                                isActive && "font-bold"
                            )}
                        >
                            <item.icon
                                size={26}
                                strokeWidth={isActive || item.label === "Home" ? 2.5 : 1.75}
                                className={cn(
                                    "shrink-0 transition-colors",
                                    isActive ? "text-foreground" : "text-foreground/80"
                                )}
                            />
                            <span className="hidden xl:inline-block text-[1.05rem]">
                                {item.label}
                            </span>
                            {item.badge && (
                                <Badge
                                    className="ml-1 text-[10px] px-1.5 py-0 bg-primary text-primary-foreground rounded-sm font-bold"
                                >
                                    {item.badge}
                                </Badge>
                            )}
                        </Button>
                    );

                    return (
                        <Tooltip key={item.label}>
                            <TooltipTrigger asChild>{NavButton}</TooltipTrigger>
                            <TooltipContent
                                side="right"
                                className="xl:hidden text-sm bg-popover text-popover-foreground border border-border"
                            >
                                {item.label}
                            </TooltipContent>
                        </Tooltip>
                    );
                })}

                {/* Post Button */}
                <Button
                    className={cn(
                        "mt-3 rounded-full font-bold text-base",
                        "bg-primary text-primary-foreground hover:bg-primary/90",
                        "h-auto py-3 w-12.5 xl:w-[90%]",
                        "transition-all duration-150"
                    )}
                >
                    <span className="hidden xl:inline">Post</span>
                    <span className="xl:hidden text-xl leading-none">+</span>
                </Button>


            </div>

            {/* Bottom: User Profile */}
            <DropdownMenu>

                <div
                    className={cn(
                        "flex items-center gap-3 p-3 rounded-full cursor-pointer",
                        "hover:bg-accent transition-colors duration-150",
                        "w-fit xl:w-full"
                    )}
                >
                    <Avatar className="w-9 h-9 shrink-0">
                        <AvatarImage
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasim"
                            alt="avatar"
                        />
                        <AvatarFallback className="bg-muted text-muted-foreground text-xs font-semibold">
                            MJ
                        </AvatarFallback>
                    </Avatar>

                    <div className="hidden xl:flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-sm text-foreground leading-tight truncate">
                            MD JASIM
                        </span>
                        <span className="text-muted-foreground text-sm truncate">
                            @ismail_josim
                        </span>

                    </div>
                    <ThemeToggle />
                    <DropdownMenuTrigger asChild>
                        <div className="hidden xl:flex items-center gap-1 ml-auto">

                            <MoreHorizontal size={20} className="text-muted-foreground" />
                        </div>
                    </DropdownMenuTrigger>
                </div>

                <DropdownMenuContent
                    align="end"
                    side="top"
                    className="w-56 mb-5 bg-accent border border-border text-accent-foreground rounded-xl shadow-lg"
                >
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent focus:bg-accent">
                        Add an existing account
                    </DropdownMenuItem>
                    <Separator className="my-1 bg-border" />
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent focus:bg-accent">
                        Log out @ismail_josim
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-accent focus:bg-accent">

                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </aside>

    );
}
