import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#006837] font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/logo.PNG" alt="Foodland Logo" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span className="text-xl font-bold text-[#006837]">Foodland Groceries</span>
        </div>
      </header>

      <main>
        <section className="text-center py-12 px-4 bg-[#FFDE00]">
          <h1 className="text-4xl font-bold text-black">Fresh Groceries, Fast Delivery</h1>
          <p className="mt-2 text-gray-800">Shop from Lagos' top-rated grocery store</p>
          <a href="/products" className="inline-block mt-6 bg-[#006837] text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800">
            Shop Now
          </a>
        </section>

        <section className="px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["Beverages", "Snacks", "Produce", "Laundry", "Dairy", "Bakery"].map((cat) => (
              <div key={cat} className="bg-[#F7F7F7] p-4 rounded shadow hover:shadow-md text-center">
                <img src={`/images/categories/${cat.toLowerCase()}.jpg`} alt={cat} className="w-full h-24 object-cover rounded" />
                <h3 className="mt-2 font-medium text-sm">{cat}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-10">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border p-4 rounded shadow hover:shadow-lg">
                <img src="/images/products/sample.jpg" alt="Product" className="w-full h-40 object-cover rounded" />
                <h4 className="mt-2 font-semibold text-sm">Product Name</h4>
                <p className="text-sm text-gray-600">₦1,200</p>
                <button className="mt-2 bg-[#FFDE00] text-black px-3 py-1 text-sm rounded hover:bg-yellow-400">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-[#006837] text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Foodland Groceries. All rights reserved.
      </footer>
    </div>
  );
}
