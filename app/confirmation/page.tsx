import { Suspense } from 'react';
import { Confirmation } from '@/components/confirmation';
export const metadata={title:'Order Confirmation'};
export default function Page(){return <main id="main" className="wrap page-main"><Suspense fallback={<p>Loading order…</p>}><Confirmation/></Suspense></main>}
