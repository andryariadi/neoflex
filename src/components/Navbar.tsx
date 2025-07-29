import Image from "next/image";
import Link from "next/link";
import NavbarNav from "./NavbarNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="b-amber-500 px-40 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="p-1 bg-primary/10 rounded">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          <span className="text-xl font-bold font-mono">
            neo<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        {/* Navigation */}
        <NavbarNav />
      </div>
    </header>
  );
};

export default Navbar;
