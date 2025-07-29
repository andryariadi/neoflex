import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="b-amber-500">
      <Navbar />

      {/* Grid Background */}
      <div className="b-amber-500 fixed inset-0 -z-1">
        <div className="b-rose-500 absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>

        <div className="b-green-500 absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}
