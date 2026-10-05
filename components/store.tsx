'use client';
import { createContext,useCallback,useContext,useEffect,useState } from 'react';
import { CartItem } from '@/types';
import { CART_KEY,validItems } from '@/lib/orders';
type Store={items:CartItem[];ready:boolean;cartOpen:boolean;setCartOpen:(open:boolean)=>void;add:(id:string,quantity?:number,notes?:string)=>void;update:(index:number,quantity:number)=>void;clear:()=>void;count:number;notice:string};
const Context=createContext<Store|null>(null);
export function StoreProvider({children}:{children:React.ReactNode}){
 const [items,setItems]=useState<CartItem[]>([]),[ready,setReady]=useState(false),[cartOpen,setCartOpen]=useState(false),[notice,setNotice]=useState('');
 useEffect(()=>{try { const parsed=JSON.parse(localStorage.getItem(CART_KEY)||'[]');if(validItems(parsed))setItems(parsed) }catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem(CART_KEY,JSON.stringify(items))}catch{setNotice('Browser storage is unavailable. Your cart will last for this visit.')}},[items,ready]);
 useEffect(()=>{if(notice){const t=setTimeout(()=>setNotice(''),3500);return()=>clearTimeout(t)}},[notice]);
 const add=useCallback((id:string,quantity=1,notes='')=>{setItems(prev=>{const found=prev.findIndex(i=>i.productId===id&&i.notes===notes);if(found<0)return [...prev,{productId:id,quantity,notes}];return prev.map((i,n)=>n===found?{...i,quantity:Math.min(99,i.quantity+quantity)}:i)});setNotice('Added to your order');},[]);
 const update=(index:number,quantity:number)=>setItems(prev=>prev.map((i,n)=>n===index?{...i,quantity:Math.min(99,quantity)}:i).filter(i=>i.quantity>0));
 return <Context.Provider value={{items,ready,cartOpen,setCartOpen,add,update,clear:()=>setItems([]),count:items.reduce((n,i)=>n+i.quantity,0),notice}}>{children}<div className={`toast ${notice?'visible':''}`} role="status">{notice}</div></Context.Provider>
}
export function useStore(){const store=useContext(Context);if(!store)throw new Error('StoreProvider is required');return store}
