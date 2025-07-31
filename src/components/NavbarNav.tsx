"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { NAVBAR_LINKS } from "@/constants";

const NavbarNav = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  return (
    <nav className="b-rose-500 flex items-center gap-3 lg:gap-5">
      {isSignedIn ? (
        <>
          {NAVBAR_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={`hidden md:flex items-center gap-1.5 text-sm hover:text-primary hover:scale-105 transition-all duration-300 ${pathname === link.href && "text-primary"}`}>
              <link.icon size={16} />
              <span>{link.label}</span>
            </Link>
          ))}

          <Button asChild variant="outline" className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10">
            <Link href="/generate-program">Get Started</Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <>
          <SignInButton>
            <Button variant={"outline"} className="border-primary/50 text-primary hover:text-white hover:bg-primary/10">
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          </SignUpButton>
        </>
      )}
    </nav>
  );
};

export default NavbarNav;
