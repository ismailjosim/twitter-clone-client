'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Separator } from '../ui/separator'
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
	CheckCircle2,
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/utils'

const SAMPLE_POSTS = [
	{
		id: 1,
		name: 'Abdikarim Dahir',
		handle: '@Abdikarindahirr',
		time: '3h',
		verified: true,
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdikarim',
		content: (
			<>
				Before oil wealth, <span className='text-primary'>Abu Dhabi</span> was
				isolated on the rim of the desert, a place no one wanted, sunk in
				poverty and isolated. Success can make history easy to forget.{' '}
				<span className='text-primary'>#UAE #dubai</span>
			</>
		),
		image:
			'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800',
		imageLabel: 'Dubai before oil',
		duration: '1:07',
		stats: { replies: 14, reposts: 233, likes: '1.3K', views: '90K' },
	},
	{
		id: 2,
		name: 'MD JASIM',
		handle: '@ismail_josim',
		time: '1h',
		verified: false,
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasim',
		content: (
			<>
				Just shipped a new feature using{' '}
				<span className='text-primary'>shadcn/ui</span> +{' '}
				<span className='text-primary'>Tailwind CSS v4</span>. The DX is
				absolutely incredible. 🚀
			</>
		),
		image: null,
		stats: { replies: 4, reposts: 12, likes: '87', views: '2.1K' },
	},
	{
		id: 1,
		name: 'Abdikarim Dahir',
		handle: '@Abdikarindahirr',
		time: '3h',
		verified: true,
		avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abdikarim',
		content: (
			<>
				Before oil wealth, <span className='text-primary'>Abu Dhabi</span> was
				isolated on the rim of the desert, a place no one wanted, sunk in
				poverty and isolated. Success can make history easy to forget.{' '}
				<span className='text-primary'>#UAE #dubai</span>
			</>
		),
		image:
			'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800',
		imageLabel: 'Dubai before oil',
		duration: '1:07',
		stats: { replies: 14, reposts: 233, likes: '1.3K', views: '90K' },
	},
]

export default function Feed() {
	const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou')
	const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())

	const toggleLike = (id: number) => {
		setLikedPosts((prev) => {
			const next = new Set(prev)
			next.has(id) ? next.delete(id) : next.add(id)
			return next
		})
	}

	return (
		<div className='flex-1 border-x border-border max-w-2xl bg-background min-h-screen text-foreground'>
			{/* Sticky Header Tabs */}
			<div className='sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border flex'>
				{(['foryou', 'following'] as const).map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={cn(
							'flex-1 hover:bg-accent transition cursor-pointer flex flex-col items-center justify-center pt-4 text-sm font-medium',
							activeTab === tab ? 'text-foreground' : 'text-muted-foreground',
						)}
					>
						<span
							className={cn(
								'pb-3',
								activeTab === tab && 'border-b-4 border-primary font-bold',
							)}
						>
							{tab === 'foryou' ? 'For you' : 'Following'}
						</span>
					</button>
				))}
			</div>

			{/* Compose Box */}
			<div className='p-4 border-b border-border'>
				<div className='flex gap-3'>
					<Avatar className='h-10 w-10'>
						<AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=Jasim' />
						<AvatarFallback className='bg-muted text-muted-foreground text-xs font-semibold'>
							MJ
						</AvatarFallback>
					</Avatar>
					<div className='flex-1'>
						<Textarea
							placeholder="What's happening?"
							className='w-full bg-transparent border-none text-xl placeholder:text-muted-foreground focus-visible:ring-0 resize-none min-h-12 p-0 shadow-none'
						/>
						<Separator className='my-3 bg-border' />
						<div className='flex items-center justify-between'>
							<div className='flex gap-1 text-primary'>
								{[ImageIcon, FileText, BarChart3, Smile, Calendar].map(
									(Icon, i) => (
										<Button
											key={i}
											variant='ghost'
											size='icon'
											className='rounded-full h-9 w-9 text-primary hover:bg-primary/10'
										>
											<Icon size={18} />
										</Button>
									),
								)}
								<Button
									variant='ghost'
									size='icon'
									className='rounded-full h-9 w-9 text-primary hover:bg-primary/10 opacity-40 cursor-not-allowed'
								>
									<MapPin size={18} />
								</Button>
							</div>
							<Button className='bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 font-bold h-9'>
								Post
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Show more posts bar */}
			<div className='p-3 text-center border-b border-border hover:bg-accent cursor-pointer text-primary text-sm font-medium transition-colors'>
				Show 139 posts
			</div>

			{/* Posts */}
			{SAMPLE_POSTS.map((post) => (
				<div
					key={post.id}
					className='p-4 border-b border-border hover:bg-accent/40 transition cursor-pointer'
				>
					<div className='flex gap-3'>
						<Avatar className='h-10 w-10'>
							<AvatarImage src={post.avatar} />
							<AvatarFallback className='bg-muted text-muted-foreground text-xs font-semibold'>
								{post.name.slice(0, 2).toUpperCase()}
							</AvatarFallback>
						</Avatar>

						<div className='flex-1 min-w-0'>
							{/* Post Header */}
							<div className='flex items-center justify-between'>
								<div className='flex items-center gap-1 min-w-0'>
									<span className='font-bold text-sm hover:underline truncate'>
										{post.name}
									</span>
									{post.verified && (
										<CheckCircle2
											size={15}
											className='fill-primary text-background shrink-0'
										/>
									)}
									<span className='text-muted-foreground text-sm truncate'>
										{post.handle} · {post.time}
									</span>
								</div>
								<Button
									variant='ghost'
									size='icon'
									className='rounded-full h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 shrink-0'
								>
									<MoreHorizontal size={16} />
								</Button>
							</div>

							{/* Post Content */}
							<p className='mt-1 text-[15px] leading-normal text-foreground'>
								{post.content}
							</p>

							{/* Post Image */}
							{post.image && (
								<div className='mt-3 rounded-2xl border border-border overflow-hidden relative aspect-video bg-muted flex items-center justify-center'>
									<img
										src={post.image}
										alt='Post media'
										className='object-cover w-full h-full opacity-70'
									/>
									<div className='absolute inset-0 flex flex-col items-center justify-center'>
										<span className='text-white text-2xl font-bold italic drop-shadow-lg'>
											{post.imageLabel}
										</span>
									</div>
									{post.duration && (
										<div className='absolute bottom-2 left-2 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs'>
											{post.duration}
										</div>
									)}
								</div>
							)}

							{/* Engagement */}
							<div className='flex justify-between mt-3 text-muted-foreground max-w-sm'>
								<button className='flex items-center gap-1 group'>
									<div className='p-2 group-hover:bg-primary/10 group-hover:text-primary rounded-full transition'>
										<MessageCircle size={17} />
									</div>
									<span className='text-xs group-hover:text-primary transition'>
										{post.stats.replies}
									</span>
								</button>
								<button className='flex items-center gap-1 group'>
									<div className='p-2 group-hover:bg-green-500/10 group-hover:text-green-500 rounded-full transition'>
										<Repeat2 size={17} />
									</div>
									<span className='text-xs group-hover:text-green-500 transition'>
										{post.stats.reposts}
									</span>
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation()
										toggleLike(post.id)
									}}
									className='flex items-center gap-1 group'
								>
									<div
										className={cn(
											'p-2 rounded-full transition',
											likedPosts.has(post.id)
												? 'text-pink-500'
												: 'group-hover:bg-pink-500/10 group-hover:text-pink-500',
										)}
									>
										<Heart
											size={17}
											className={cn(likedPosts.has(post.id) && 'fill-pink-500')}
										/>
									</div>
									<span
										className={cn(
											'text-xs transition',
											likedPosts.has(post.id)
												? 'text-pink-500'
												: 'group-hover:text-pink-500',
										)}
									>
										{post.stats.likes}
									</span>
								</button>
								<button className='flex items-center gap-1 group'>
									<div className='p-2 group-hover:bg-primary/10 group-hover:text-primary rounded-full transition'>
										<BarChart3 size={17} />
									</div>
									<span className='text-xs group-hover:text-primary transition'>
										{post.stats.views}
									</span>
								</button>
								<button className='flex items-center group'>
									<div className='p-2 group-hover:bg-primary/10 group-hover:text-primary rounded-full transition'>
										<Share size={17} />
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
