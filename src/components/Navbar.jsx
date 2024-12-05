"use client";
import React, { useState } from "react";
import Link from "next/link";

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import { cn } from "@/lib/utils";
import { courses } from "@/utils/homePageConstants";

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
					Home
				</Link>
				<MenuItem setActive={setActive} active={active} item="Courses">
					<div className="flex flex-col space-y-4 text-sm">
						{courses.map((course) => (
							<HoveredLink key={course.id} href={course.route}>
								{course.title}
							</HoveredLink>
						))}
					</div>
				</MenuItem>
				<Link href="/contact" onMouseEnter={() => setActive(null)}>
					Contact Us
				</Link>
			</Menu>
		</div>
	);
};

export default Navbar;
