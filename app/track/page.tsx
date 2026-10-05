import { Suspense } from 'react';
import { Tracking } from '@/components/tracking';
export const metadata={title:'Track Your Order'};
export default function Page(){return <main id="main" className="wrap page-main"><Suspense fallback={<p>Loading tracking…</p>}><Tracking/></Suspense></main>}
