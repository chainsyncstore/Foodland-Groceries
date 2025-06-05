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
        <header className="flex items-center px-4 py-2 shadow bg-white space-x-4">
          <Image src="/logo.PNG" alt="Foodland Logo" width={40} height={40} />
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/(auth)/login">Login</Link>
        </header>
        {children}
      </body>
    </html>
  );
}