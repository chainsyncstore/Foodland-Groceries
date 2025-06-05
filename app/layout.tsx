import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodland Groceries",
  description: "Your one-stop shop for fresh groceries and more",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/login", label: "Login" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased bg-white text-gray-900`}>
        {/* Header */}
        <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-20">
          <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              {/* ASCII Art Logo */}
              <pre
                className="leading-none font-mono text-xs text-[#006837] whitespace-pre overflow-x-auto max-w-[100px] md:max-w-[220px] bg-transparent border-none p-0 m-0"
                aria-label="Foodland Logo"
                style={{ lineHeight: "1.1", margin: 0, padding: 0 }}
              >{`
__               _      _                  
|  __|             | |    | |                 
| |_ __   _   _| | _| | _ _ _ _   __ 
|  _/ _ \\ / _ \\ / _\` |/ _ \\ |/ _\` | ' \\ / _ \\
| | | () | () | (| |  _/ | (| | | | |  _/
||  \\_/ \\_/ \\,|\\_||\\,|| ||\\_||
`}
              </pre>
              <span className="hidden md:inline font-bold text-[#006837] text-lg tracking-tight">Foodland</span>
            </Link>
            {/* Navigation */}
            <nav className="flex gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium px-2 py-1 rounded hover:bg-[#FFDE00] hover:text-[#006837] transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 py-6 min-h-[80vh]">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full border-t border-gray-100 bg-white py-4">
          <div className="max-w-3xl mx-auto px-4 text-xs text-gray-500 flex justify-between items-center">
            <span>© {new Date().getFullYear()} Foodland Groceries</span>
            <span>
              <span className="text-[#006837] font-semibold">Made for Nigeria</span>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}