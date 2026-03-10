import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
    Image as ImageIcon,
    FileText,
    Smile,
    Calendar,
    MapPin,
    MessageCircle,
    Repeat2,
    Heart,
    BarChart3,
    Share,
    MoreHorizontal,
    CheckCircle2
} from "lucide-react";

export default function Feed() {
    return (
        <div className="flex-1 border-x border-zinc-800 max-w-2xl bg-black min-h-screen text-white">
            {/* Sticky Header Tabs */}
            <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-zinc-800 flex">
                <div className="flex-1 hover:bg-zinc-900/50 transition cursor-pointer flex flex-col items-center justify-center pt-4">
                    <span className="font-bold pb-3 border-b-4 border-blue-500">For you</span>
                </div>
                <div className="flex-1 hover:bg-zinc-900/50 transition cursor-pointer flex flex-col items-center justify-center pt-4 text-zinc-500">
                    <span className="font-medium pb-3">Following</span>
                </div>
            </div>

            {/* Tweet Box */}
            <div className="p-4 border-b border-zinc-800">
                <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jasim" />
                        <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Textarea
                            placeholder="What's happening?"
                            className="w-full bg-transparent border-none text-xl placeholder:text-zinc-500 focus-visible:ring-0 resize-none min-h-12.5 p-0"
                        />

                        <div className="flex items-center justify-between mt-4 border-t border-zinc-900 pt-3">
                            <div className="flex gap-1 text-blue-400">
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10"><ImageIcon size={18} /></Button>
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10"><FileText size={18} /></Button>
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10"><BarChart3 size={18} /></Button>
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10"><Smile size={18} /></Button>
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10"><Calendar size={18} /></Button>
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-blue-500/10 opacity-50"><MapPin size={18} /></Button>
                            </div>
                            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-5 font-bold h-9">
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Show X posts bar */}
            <div className="p-3 text-center border-b border-zinc-800 hover:bg-zinc-900/50 cursor-pointer text-blue-400 text-sm">
                Show 139 posts
            </div>

            {/* Sample Post (Matching the image) */}
            <div className="p-4 border-b border-zinc-800 hover:bg-zinc-900/30 transition cursor-pointer">
                <div className="flex gap-3">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Abdikarim" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <span className="font-bold hover:underline">Abdikarim Dahir</span>
                                <CheckCircle2 size={16} className="fill-blue-500 text-black" />
                                <span className="text-zinc-500 ml-1">@Abdikarindahirr · 3h</span>
                            </div>
                            <MoreHorizontal size={18} className="text-zinc-500" />
                        </div>

                        <p className="mt-1 text-[15px] leading-normal">
                            Before oil wealth, <span className="text-blue-400">Abu Dhabi</span> was isolated on the rim of the desert, a place no one wanted, sunk in poverty and isolated. Success can make history easy to forget. <span className="text-blue-400">#UAE #dubai</span>
                        </p>

                        {/* Video Placeholder */}
                        <div className="mt-3 rounded-2xl border border-zinc-800 overflow-hidden relative aspect-video bg-zinc-900 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800"
                                alt="Dubai"
                                className="object-cover w-full h-full opacity-60"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold italic shadow-lg">Dubai before oil</span>
                            </div>
                            <div className="absolute bottom-2 left-2 bg-black/70 px-1 rounded text-xs">1:07</div>
                        </div>

                        {/* Engagement Icons */}
                        <div className="flex justify-between mt-3 text-zinc-500 max-w-md">
                            <div className="flex items-center gap-1 group">
                                <div className="p-2 group-hover:bg-blue-500/10 group-hover:text-blue-500 rounded-full transition"><MessageCircle size={18} /></div>
                                <span className="text-xs">14</span>
                            </div>
                            <div className="flex items-center gap-1 group">
                                <div className="p-2 group-hover:bg-green-500/10 group-hover:text-green-500 rounded-full transition"><Repeat2 size={18} /></div>
                                <span className="text-xs">233</span>
                            </div>
                            <div className="flex items-center gap-1 group">
                                <div className="p-2 group-hover:bg-pink-500/10 group-hover:text-pink-500 rounded-full transition"><Heart size={18} /></div>
                                <span className="text-xs">1.3K</span>
                            </div>
                            <div className="flex items-center gap-1 group">
                                <div className="p-2 group-hover:bg-blue-500/10 group-hover:text-blue-500 rounded-full transition"><BarChart3 size={18} /></div>
                                <span className="text-xs">90K</span>
                            </div>
                            <div className="flex items-center group">
                                <div className="p-2 group-hover:bg-blue-500/10 group-hover:text-blue-500 rounded-full transition"><Share size={18} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
