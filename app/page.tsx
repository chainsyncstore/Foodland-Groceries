import Image from "next/image";

const categories = [
  { name: "Beverages", icon: "/file.svg" },
  { name: "Snacks", icon: "/globe.svg" },
  { name: "Produce", icon: "/window.svg" },
  { name: "Bakery", icon: "/vercel.svg" },
  { name: "Frozen", icon: "/next.svg" },
  { name: "Household", icon: "/file.svg" },
];

const featuredProducts = [
  {
    name: "Peak Milk 400g",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Golden Morn 900g",
    price: "₦3,200",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Indomie Noodles (40 pack)",
    price: "₦7,800",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fresh Tomatoes (1kg)",
    price: "₦1,200",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-10 px-4 bg-white relative">
        <Image
          src="/logo.PNG"
          alt="Foodland Logo"
          width={100}
          height={100}
          className="logo-img mb-4"
          priority
        />
        <h1 className="text-3xl md:text-5xl font-bold text-primary text-center mb-2">
          Welcome to Foodland Groceries
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-md mb-6">
          Nigeria’s freshest groceries, delivered fast. Shop local, eat better!
        </p>
        <a
          href="/products"
          className="btn-primary text-lg px-8 py-3"
        >
          Shop Now
        </a>
        <div className="absolute top-0 left-0 w-full h-2 bg-accent rounded-b-xl" />
      </section>

      {/* Popular Categories */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={cat.icon}
                alt={cat.name}
                width={40}
                height={40}
                className="mb-2"
              />
              <span className="text-sm font-semibold text-primary">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {featuredProducts.map((prod) => (
            <div
              key={prod.name}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center border border-gray-100"
            >
              <Image
                src={prod.image}
                alt={prod.name}
                width={160}
                height={120}
                className="rounded mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold text-primary mb-1 text-center">
                {prod.name}
              </h3>
              <p className="text-accent font-bold text-base mb-2">
                {prod.price}
              </p>
              <button className="btn-accent w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-2">
          <Image
            src="/logo.PNG"
            alt="Foodland Logo"
            width={48}
            height={48}
            className="logo-img mb-2"
          />
          <p className="text-white text-base font-semibold">
            Foodland Groceries &copy; {new Date().getFullYear()}
          </p>
          <p className="text-white text-sm">
            Lagos, Nigeria &middot;{" "}
            <a
              href="mailto:info@foodland.ng"
              className="underline"
            >
              info@foodland.ng
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="/products"
              className="text-accent hover:text-white"
            >
              Products
            </a>
            <a
              href="/cart"
              className="text-accent hover:text-white"
            >
              Cart
            </a>
            <a
              href="/checkout"
              className="text-accent hover:text-white"
            >
              Checkout
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
