import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Merch from '@/pages/Merch';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';
import PageNotFound from '@/lib/PageNotFound';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
