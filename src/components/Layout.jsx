import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { whatsapp } from '../data/site';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return <>
    <ScrollToTop />
    <Header />
    <main><Outlet /></main>
    <Footer />
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">☏</a>
  </>;
}
