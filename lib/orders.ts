import { CartItem, Order } from '@/types';
import { products } from '@/data/products';
export const CART_KEY = 'nweze-cart-v1';
export const ORDER_KEY = 'nweze-orders-v1';
export function validItems(value: unknown): value is CartItem[] {
 return Array.isArray(value) && value.every(i => i && products.some(p=>p.id===i.productId) && Number.isInteger(i.quantity) && i.quantity>0 && i.quantity<=99 && typeof i.notes==='string');
}
export const normalizePhone = (phone:string) => { const digits=phone.replace(/\D/g,''); return digits.startsWith('234') ? '0'+digits.slice(3) : digits; };
export function readOrders(): Order[] {
 try { const parsed=JSON.parse(localStorage.getItem(ORDER_KEY)||'[]'); return Array.isArray(parsed) ? parsed.filter(o=>o && typeof o.id==='string' && typeof o.phone==='string' && validItems(o.items) && ['delivery','pickup'].includes(o.fulfillment) && o.status==='received') : []; } catch { return []; }
}
