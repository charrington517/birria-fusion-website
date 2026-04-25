import React from 'react';
import { Outlet } from 'react-router-dom';
import NavDock from './NavDock';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <NavDock />
      <main className="lg:pr-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}