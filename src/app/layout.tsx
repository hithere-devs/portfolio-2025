import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'hithere_devs',
	description:
		"Hi there devs! I am Azhar, a developer well versed with backend, devops and frontend tech. Let's connect if you want something built!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head />
				<body className={`${manrope.className} antialiased dark:bg-black`}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
