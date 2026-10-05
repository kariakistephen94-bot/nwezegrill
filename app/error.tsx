'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="wrap page-main empty"><h1>Something didn’t cook quite right.</h1><p>Please try loading the page again.</p><button onClick={reset} className="button">Try again</button></main>}
