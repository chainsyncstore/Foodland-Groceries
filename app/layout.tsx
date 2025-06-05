import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          {/* Left: Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Foodland Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-xl font-bold text-primary">
              Foodland Groceries
            </span>
          </div>

          {/* Right: Navigation (already rendered elsewhere) */}
          <div className="flex items-center space-x-4">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
            <Link href="/(auth)/login">Login</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}