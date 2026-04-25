import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, UtensilsCrossed, ShoppingBag, Calendar, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home', icon: MapPin },
  { path: '/menu', label: 'Menu', icon: UtensilsCrossed },
  { path: '/merch', label: 'Merch', icon: ShoppingBag },
  { path: '/events', label: 'Events', icon: Calendar },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function NavDock() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop vertical dock - right side */}
      <nav className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-l-lg py-4 px-2 space-y-1">
          <div className="mb-3 flex justify-center">
            <img src="/BF- Letter Logo_circleonly.png" alt="Birria Fusion" className="w-8 h-8 object-contain" />
          </div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group relative flex items-center justify-center"
              >
                <div className={`p-2.5 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="absolute right-full mr-3 px-2.5 py-1 bg-card border border-border rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-card/90 backdrop-blur-md border border-border rounded-lg"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-3"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <div className="space-y-6 text-center">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-4 text-2xl font-display font-bold uppercase tracking-wider transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="absolute bottom-8 text-center flex flex-col items-center gap-2">
              <img src="/BF- Letter Logo_circleonly.png" alt="Birria Fusion" className="w-16 h-16 object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
