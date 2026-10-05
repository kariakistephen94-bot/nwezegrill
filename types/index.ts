export type Product = { id: string; name: string; category: 'Fish' | 'Chicken' | 'Sides'; description: string; image: string; alt: string; price: number; tag?: string };
export type CartItem = { productId: string; quantity: number; notes: string };
export type Order = { id: string; createdAt: string; customer: string; phone: string; fulfillment: 'delivery' | 'pickup'; address: string; notes: string; payment: string; items: CartItem[]; status: 'received'; subtotal?: number; total?: number };
