"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const allProducts = [
	{
		name: "Peak Milk 400g",
		price: 2500,
		image:
			"https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		category: "Beverages",
	},
	{
		name: "Golden Morn 900g",
		price: 3200,
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		category: "Snacks",
	},
	{
		name: "Indomie Noodles (40 pack)",
		price: 7800,
		image:
			"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
		category: "Snacks",
	},
	{
		name: "Fresh Tomatoes (1kg)",
		price: 1200,
		image:
			"https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
		category: "Produce",
	},
	{
		name: "Bread Loaf",
		price: 900,
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		category: "Bakery",
	},
	{
		name: "Frozen Chicken (1kg)",
		price: 3500,
		image:
			"https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		category: "Frozen",
	},
	{
		name: "Detergent Powder",
		price: 1500,
		image:
			"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
		category: "Household",
	},
	// Add more products as needed
];

const categories = [
	"All",
	"Beverages",
	"Snacks",
	"Produce",
	"Bakery",
	"Frozen",
	"Household",
];

export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [priceRange, setPriceRange] = useState([0, 10000]);
	const [visibleCount, setVisibleCount] = useState(6);
	const [loading, setLoading] = useState(false);

	const filtered = allProducts.filter(
		(p) =>
			(selectedCategory === "All" || p.category === selectedCategory) &&
			p.price >= priceRange[0] &&
			p.price <= priceRange[1]
	);

	// Infinite scroll
	useEffect(() => {
		const onScroll = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				setLoading(true);
				setTimeout(() => {
					setVisibleCount((v) => Math.min(v + 4, filtered.length));
					setLoading(false);
				}, 700);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [filtered.length]);

	return (
		<main className="min-h-screen bg-white px-2 pb-8">
			{/* Filters */}
			<section className="max-w-2xl mx-auto py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
				<div className="flex gap-2 flex-wrap">
					{categories.map((cat) => (
						<button
							key={cat}
							className={`px-3 py-1 rounded-full border font-semibold text-sm transition-colors ${
								selectedCategory === cat
									? "bg-primary text-white border-primary"
									: "bg-gray-50 text-primary border-gray-200 hover:bg-accent hover:text-primary"
							}`}
							onClick={() => setSelectedCategory(cat)}
						>
							{cat}
						</button>
					))}
				</div>
				<div className="flex items-center gap-2">
					<span className="text-sm text-primary font-semibold">
						₦{priceRange[0]}
					</span>
					<input
						type="range"
						min={0}
						max={10000}
						step={100}
						value={priceRange[0]}
						onChange={(e) =>
							setPriceRange([+e.target.value, priceRange[1]])
						}
						className="accent-primary"
					/>
					<input
						type="range"
						min={0}
						max={10000}
						step={100}
						value={priceRange[1]}
						onChange={(e) =>
							setPriceRange([priceRange[0], +e.target.value])
						}
						className="accent-primary"
					/>
					<span className="text-sm text-primary font-semibold">
						₦{priceRange[1]}
					</span>
				</div>
			</section>

			{/* Product Grid */}
			<section className="max-w-4xl mx-auto mt-4">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{filtered.slice(0, visibleCount).map((prod, idx) => (
						<div
							key={prod.name + idx}
							className="bg-white rounded-xl shadow p-3 flex flex-col items-center border border-gray-100"
						>
							<Image
								src={prod.image}
								alt={prod.name}
								width={120}
								height={90}
								className="rounded mb-2 object-cover"
							/>
							<h3 className="text-base font-semibold text-primary mb-1 text-center">
								{prod.name}
							</h3>
							<p className="text-accent font-bold text-sm mb-2">
								₦{prod.price.toLocaleString()}
							</p>
							<button className="btn-accent w-full text-sm">
								Add to Cart
							</button>
						</div>
					))}
					{/* Loading skeletons */}
					{loading &&
						Array.from({ length: 4 }).map((_, i) => (
							<div key={i} className="skeleton h-40 w-full" />
						))}
				</div>
				{/* No products found */}
				{filtered.length === 0 && (
					<div className="text-center text-primary font-semibold py-12">
						No products found for selected filters.
					</div>
				)}
			</section>
		</main>
	);
}
