"use client";

import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";
import Button from "@/common/ui/Button";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-background">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <SidebarNavigation />
          </div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contacts">Contact me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
