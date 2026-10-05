import Image from 'next/image';
import { Order } from '@/types';
import { products,imagePath,formatPrice } from '@/data/products';
export function OrderSummary({order}:{order:Order}){
  const subtotal = order.subtotal ?? order.items.reduce((sum,i)=>{
    const p = products.find(prod=>prod.id===i.productId);
    return sum + (p ? p.price * i.quantity : 0);
  },0);
  const deliveryFee = order.fulfillment==='delivery' ? 1500 : 0;
  const total = order.total ?? (subtotal + deliveryFee);
  return <div className="saved-order"><h3>The good stuff</h3>{order.items.map((i,n)=>{const p=products.find(prod=>prod.id===i.productId);if(!p)return null;return <div key={n} className="saved-order-item"><Image src={imagePath(p.image)} alt={p.alt} width={58} height={62}/><div><strong>{p.name}</strong><p className="small muted">Quantity {i.quantity}{i.notes?` · ${i.notes}`:''}</p></div><strong>{formatPrice(p.price * i.quantity)}</strong></div>})}<div className="saved-order-breakdown"><div className="saved-order-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="saved-order-row"><span>{order.fulfillment==='delivery'?'Delivery fee':'Pickup'}</span><span>{order.fulfillment==='delivery'?formatPrice(deliveryFee):'Free'}</span></div></div><div className="saved-order-bottom"><span>Total ({order.fulfillment})</span><strong>{formatPrice(total)}</strong></div><p className="muted small">{order.address}</p>{order.notes&&<p className="muted small">Notes: {order.notes}</p>}</div>}
