'use client';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import NameCard from './name-card';
import ESTCard from './est-card';
import LocationCard from './location-card';
import TitleCard from './title-card';

export default function Home() {
	// const { theme } = useTheme();
	return (
		<div className='px-[20px] py-[3.75rem]'>
			{/* <ModeToggle /> */}
			<NameCard />
			<TitleCard />
			<ESTCard />
			<LocationCard />
		</div>
	);
}
