"use client";
import React, { useState } from "react";
import Link from "next/link";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import { cn } from "@/lib/utils";

const Navbar = ({ className }) => {
	const [active, setActive] = useState(null);

	return (
		<div
			className={cn(
				"fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 p-0",
				className
			)}
		>
			<Menu setActive={setActive}>
				<Link href="/" onMouseEnter={() => setActive(null)}>
					<MenuItem
						setActive={setActive}
						active={active}
						item="Home"
					></MenuItem>
				</Link>
				<MenuItem setActive={setActive} active={active} item="Courses">
					<ProductItem
						title="Algochurn"
						href="https://algochurn.com"
						src="https://assets.aceternity.com/demos/algochurn.webp"
						description="Prepare for tech interviews like never before."
					/>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Services">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">Web Development</HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
						<HoveredLink href="/branding">Branding</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Navbar;
