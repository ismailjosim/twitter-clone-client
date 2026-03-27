'use client'

import { useState } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import { MoreHorizontal } from 'lucide-react'
import { ThemeToggle } from '../shared/ThemeToggle'
import useCurrentUser from '../../hooks/useCurrentUser'

interface UserProfileProps {
	username?: string
}

export default function UserProfile({ username }: UserProfileProps) {
	const { data: currentUser, isLoading } = useCurrentUser()
	console.log(currentUser)
	if (!currentUser) {
		return <div>no info found</div>
	}

	return (
		<DropdownMenu>
			<div className='flex items-center gap-3 p-3 rounded-full cursor-pointer hover:bg-accent transition-colors duration-150 w-fit xl:w-full'>
				<Avatar className='w-9 h-9 shrink-0'>
					<AvatarImage
						src={currentUser.profileImage || ''}
						alt={currentUser.name}
					/>
					<AvatarFallback className='bg-muted text-muted-foreground text-xs font-semibold'>
						{currentUser.name?.slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<div className='hidden xl:flex flex-col min-w-0 flex-1'>
					<span className='font-bold text-sm text-foreground leading-tight truncate'>
						{currentUser.name}
					</span>
					<span className='text-muted-foreground text-sm truncate'>
						@{username || currentUser.email?.split('@')[0]}
					</span>
				</div>

				<ThemeToggle />

				<DropdownMenuTrigger asChild>
					<div className='hidden xl:flex items-center gap-1 ml-auto'>
						<MoreHorizontal size={20} className='text-muted-foreground' />
					</div>
				</DropdownMenuTrigger>
			</div>

			<DropdownMenuContent
				align='end'
				side='top'
				className='w-56 mb-5 bg-accent border border-border text-accent-foreground rounded-xl shadow-lg'
			>
				<DropdownMenuItem className='cursor-pointer hover:bg-accent focus:bg-accent'>
					Add an existing account
				</DropdownMenuItem>
				<Separator className='my-1 bg-border' />
				{/* <DropdownMenuItem
					className='cursor-pointer hover:bg-accent focus:bg-accent'
					onClick={handleLogout}
				>
					{loading
						? 'Logging out...'
						: `Log out @${username || currentUser.email?.split('@')[0]}`}
				</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
