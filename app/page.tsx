import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Image
        src="/logo.PNG"
        alt="Foodland Logo"
        width={120}
        height={120}
        priority
      />
      <h1 className="mt-6 text-3xl font-bold text-primary">
        Welcome to Foodland Groceries
      </h1>
      <p className="mt-2 text-lg text-gray-700 text-center max-w-md">
        Your mobile-first, blazing-fast grocery shopping experience. Browse our
        catalog, manage your cart, and enjoy seamless checkout!
      </p>
      <a href="/products" className="btn-primary mt-6">
        Shop Now
      </a>
    </main>
  );
}
