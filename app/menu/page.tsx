import { MenuBrowser } from '@/components/menu-browser';
export const metadata={title:'The Menu'};
export default function Menu(){return <main id="main" className="wrap page-main"><div className="page-heading"><p className="eyebrow">FIND YOUR FLAVOUR</p><h1>Good food.<br/><span className="gold">Great decisions.</span></h1><p className="muted">A short menu. A big appetite. Pick what’s calling your name.</p></div><div className="info-note">Our curated menu · Fresh off the grill in Alapere, Lagos. Online ordering is currently a local demo.</div><MenuBrowser/></main>}
