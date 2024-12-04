import localFont from "next/font/local";

import Navbar from "@/components/Navbar";

import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Music Store",
	description: "A practice project made using next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="relative w-full flex flex-row justify-center items-center">
					<Navbar />
				</div>
				{children}
			</body>
		</html>
	);
}
