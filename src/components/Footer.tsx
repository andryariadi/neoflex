import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dropendborder-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="px-3 md:px-12 lg:px-28 xl:px-40 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="p-1 bg-primary/10 rounded">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold font-mono">
                neo<span className="text-primary">flex</span>.ai
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} neoflex.ai - All rights reserved</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
