"use client";
import { useState } from "react";
import Image from "next/image";

interface CartItem {
	name: string;
	variant: string;
	price: number;
	quantity: number;
	image: string;
}

interface DeliveryOption {
	label: string;
	value: string;
	fee: number;
}

const initialCart: CartItem[] = [
	{
		name: "Peak Milk 400g",
		variant: "Tin",
		price: 2500,
		quantity: 2,
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Indomie Noodles (40 pack)",
		variant: "Chicken",
		price: 7800,
		quantity: 1,
		image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
	},
];

const deliveryOptions: DeliveryOption[] = [
	{ label: "Delivery (₦1,000)", value: "delivery", fee: 1000 },
	{ label: "Pickup (Free)", value: "pickup", fee: 0 },
];

export default function CartPage() {
	const [cart, setCart] = useState<CartItem[]>(initialCart);
	const [delivery, setDelivery] = useState<DeliveryOption>(deliveryOptions[0]);
	const [showCheckout, setShowCheckout] = useState(false);

	const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const total = subtotal + delivery.fee;

	function updateQty(idx: number, qty: number) {
		setCart((c) =>
			c.map((item, i) => (i === idx ? { ...item, quantity: Math.max(1, qty) } : item))
		);
	}
	function removeItem(idx: number) {
		setCart((c) => c.filter((_, i) => i !== idx));
	}

	function handleDeliveryChange(value: string) {
		const found = deliveryOptions.find((opt) => opt.value === value);
		if (found) setDelivery(found);
	}

	return (
		<main className="min-h-screen bg-white px-2 pb-8">
			<section className="max-w-lg mx-auto py-4">
				<h1 className="text-2xl font-bold text-primary mb-4 text-center">Your Cart</h1>
				{cart.length === 0 ? (
					<div className="text-center text-primary font-semibold py-12">Your cart is empty.</div>
				) : (
					<div className="flex flex-col gap-4">
						{cart.map((item, idx) => (
							<div
								key={item.name + idx}
								className="flex gap-3 items-center bg-gray-50 rounded-lg p-3 shadow-sm"
							>
								<Image
									src={item.image}
									alt={item.name}
									width={60}
									height={60}
									className="rounded object-cover"
								/>
								<div className="flex-1">
									<div className="font-semibold text-primary">{item.name}</div>
									<div className="text-xs text-gray-500 mb-1">{item.variant}</div>
									<div className="flex items-center gap-2 mt-1">
										<button
											onClick={() => updateQty(idx, item.quantity - 1)}
											className="px-2 py-1 rounded bg-gray-200 text-primary font-bold"
										>
											-
										</button>
										<span className="px-2 font-semibold">{item.quantity}</span>
										<button
											onClick={() => updateQty(idx, item.quantity + 1)}
											className="px-2 py-1 rounded bg-gray-200 text-primary font-bold"
										>
											+
										</button>
									</div>
								</div>
								<div className="text-right">
									<div className="text-accent font-bold text-base mb-1">
										₦{(item.price * item.quantity).toLocaleString()}
									</div>
									<button
										onClick={() => removeItem(idx)}
										className="text-xs text-red-600 hover:underline"
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
				)}
				{/* Subtotal & Delivery */}
				{cart.length > 0 && (
					<div className="mt-8 bg-white rounded-xl shadow p-4 border border-gray-100">
						<div className="flex justify-between mb-2">
							<span className="font-semibold text-primary">Subtotal</span>
							<span className="font-bold text-primary">₦{subtotal.toLocaleString()}</span>
						</div>
						<div className="flex justify-between items-center mb-2">
							<span className="font-semibold text-primary">Delivery Option</span>
							<select
								className="border rounded px-2 py-1 text-primary focus:ring-2 focus:ring-accent"
								value={delivery.value}
								onChange={(e) => handleDeliveryChange(e.target.value)}
							>
								{deliveryOptions.map((opt) => (
									<option key={opt.value} value={opt.value}>
										{opt.label}
									</option>
								))}
							</select>
						</div>
						<div className="flex justify-between mb-4">
							<span className="font-semibold text-primary">Delivery Fee</span>
							<span className="font-bold text-primary">₦{delivery.fee.toLocaleString()}</span>
						</div>
						<div className="flex justify-between text-lg font-bold border-t pt-2">
							<span className="text-primary">Total</span>
							<span className="text-primary">₦{total.toLocaleString()}</span>
						</div>
						<button
							className="btn-primary w-full mt-6 text-lg"
							onClick={() => setShowCheckout(true)}
						>
							Checkout
						</button>
					</div>
				)}
			</section>
			{/* Checkout Modal */}
			{showCheckout && (
				<div className="modal">
					<div className="modal-content max-w-md">
						<h2 className="text-xl font-bold text-primary mb-2">Order Summary</h2>
						<ul className="mb-2">
							{cart.map((item, idx) => (
								<li key={item.name + idx} className="flex justify-between text-sm mb-1">
									<span>
										{item.name} x{item.quantity}
									</span>
									<span>₦{(item.price * item.quantity).toLocaleString()}</span>
								</li>
							))}
						</ul>
						<div className="flex justify-between text-base font-semibold mb-1">
							<span>Delivery</span>
							<span>{delivery.label}</span>
						</div>
						<div className="flex justify-between text-lg font-bold border-t pt-2 mb-4">
							<span>Total</span>
							<span>₦{total.toLocaleString()}</span>
						</div>
						<div className="mb-4">
							<label className="block text-primary font-semibold mb-1">
								Choose Delivery Option:
							</label>
							<select
								className="border rounded px-2 py-1 w-full text-primary focus:ring-2 focus:ring-accent"
								value={delivery.value}
								onChange={(e) => handleDeliveryChange(e.target.value)}
							>
								{deliveryOptions.map((opt) => (
									<option key={opt.value} value={opt.value}>
										{opt.label}
									</option>
								))}
							</select>
						</div>
						{/* Paystack button placeholder */}
						<button className="btn-accent w-full text-lg mb-2">Pay with Paystack</button>
						<button
							className="w-full mt-1 text-sm text-primary underline"
							onClick={() => setShowCheckout(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
