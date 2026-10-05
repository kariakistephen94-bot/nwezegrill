import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/components/store';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart';
export const metadata:Metadata={title:{default:'Nweze Grill Spot — Fire-grilled. Lagos-loved.',template:'%s | Nweze Grill Spot'},description:'Grilled fish, barbecue chicken and chips in Alapere, Lagos. Explore Nweze Grill Spot for delivery, takeaway and dine-in.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreProvider><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/><CartDrawer/></StoreProvider></body></html>}
