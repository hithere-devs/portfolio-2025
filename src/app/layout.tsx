import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

const manropeFont = localFont({
	src: './fonts/Manrope-VariableFont_wght.ttf',
	variable: '--font-manrope',
	weight: '200 900',
});

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
		<html lang='en'>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
				enableSystem
				disableTransitionOnChange
			>
				<body className={`${manropeFont.variable} antialiased`}>
					{children}
				</body>
			</ThemeProvider>
		</html>
	);
}
