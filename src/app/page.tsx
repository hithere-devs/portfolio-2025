'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { useTheme } from 'next-themes';

export default function Home() {
	// const { theme } = useTheme();
	return (
		<div className='h-screen w-screen flex items-center justify-center'>
			<div className='dark:border dark:border-bc'>
				<ModeToggle />
				<h1 className='text-2xl'>We'll get there, One step at a time</h1>
			</div>
		</div>
	);
}
