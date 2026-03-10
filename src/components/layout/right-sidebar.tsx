import { Search, MoreHorizontal, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function RightSidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-87.5 p-4 gap-4 bg-black text-white h-screen sticky top-0 overflow-y-auto">

            {/* Search Bar */}
            <div className="sticky top-0 bg-black py-1 z-20">
                <Search className="absolute left-4 top-4 text-zinc-500" size={18} />
                <Input
                    placeholder="Search"
                    className="rounded-full bg-zinc-900 border-none pl-12 py-6 focus-visible:ring-1 focus-visible:ring-blue-500 placeholder:text-zinc-500"
                />
            </div>

            {/* Subscribe to Premium */}
            <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Subscribe to Premium</h2>
                    <span className="text-green-500 text-xs font-bold bg-green-500/10 px-1 rounded">50% off</span>
                </div>
                <p className="text-[15px] text-zinc-200 leading-tight">
                    Get rid of ads, see your analytics, boost your replies and unlock 20+ features.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full font-bold px-6 mt-2">
                    Subscribe
                </Button>
            </div>

            {/* Live on X Section */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Live on X</h2>
                    <div className="flex items-center gap-2">
                        <div className="bg-red-600 p-1 rounded">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Al_Jazeera_English_logo.svg" alt="AJ" className="w-4 h-4 invert" />
                        </div>
                        <span className="text-sm font-bold">Al Jazeera English</span>
                        <span className="text-yellow-500">✔</span>
                        <span className="text-zinc-500 text-xs italic">is hosting</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                        <p className="font-bold text-sm">LIVE: AL JAZEERA ENGLISH</p>
                        <div className="bg-pink-600/20 text-pink-500 px-2 py-1 rounded text-xs font-bold border border-pink-500/30 flex items-center gap-1">
                            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span> +2.4K
                        </div>
                    </div>
                </div>
            </div>

            {/* Today's News */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800">
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Today’s News</h2>
                    <X size={18} className="text-zinc-500" />
                </div>

                {/* News Items */}
                {[
                    {
                        title: "New Video Fuels Debate Over Deadly Missile Strike...",
                        meta: "2 days ago · News · 153.2K posts",
                        icons: ["🇮🇷", "🚀"]
                    },
                    {
                        title: "Tomahawk Missile Strikes Shajarah Tayyebeh Girls' School...",
                        meta: "1 hour ago · News · 11.8K posts",
                        icons: ["🏫", "💥"]
                    },
                    {
                        title: "Strait of Hormuz Traffic Drops 90% in US-Iran Conflict",
                        meta: "2 hours ago · News · 15.6K posts",
                        icons: ["🚢", "🌊"]
                    }
                ].map((news, idx) => (
                    <div key={idx} className="p-4 hover:bg-zinc-800/50 cursor-pointer transition-colors">
                        <p className="text-[15px] font-bold leading-tight">{news.title}</p>
                        <p className="text-xs text-zinc-500 mt-1">{news.meta}</p>
                    </div>
                ))}
            </div>

            {/* What's Happening / Trending */}
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800">
                <div className="p-4">
                    <h2 className="text-xl font-bold">What’s happening</h2>
                </div>

                <div className="px-4 py-3 hover:bg-zinc-800/50 cursor-pointer flex justify-between">
                    <div>
                        <p className="text-xs text-zinc-500">Politics · Trending</p>
                        <p className="font-bold">Middle East</p>
                    </div>
                    <MoreHorizontal size={16} className="text-zinc-500" />
                </div>

                <div className="px-4 py-3 hover:bg-zinc-800/50 cursor-pointer flex justify-between">
                    <div>
                        <p className="text-xs text-zinc-500">Trending</p>
                        <p className="font-bold">Tarun</p>
                    </div>
                    <MoreHorizontal size={16} className="text-zinc-500" />
                </div>
            </div>

        </aside>
    );
}
