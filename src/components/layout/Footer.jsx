import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { sanity } from '@/lib/sanity';

export default function Footer() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    sanity.fetch(`*[_type == "siteSettings"][0]`).then(setSettings);
  }, []);

  const email = settings?.email || 'hello@birriafusion.com';
  const phone = settings?.phone || '(555) 123-4567';

  return (
    <footer className="relative bg-background border-t border-border lg:pr-14">
      {/* Giant wordmark */}
      <div className="overflow-hidden py-12 md:py-20">
        <div className="flex items-center gap-6 px-6 md:px-[8vw]">
          <img
            src="/BirriaFusionLogo_circleonly.png"
            alt="Birria Fusion"
            className="w-24 h-24 md:w-36 md:h-36 object-contain shrink-0 opacity-80"
          />
          <h2 className="font-display font-black text-[6vw] md:text-[5vw] leading-none tracking-tighter text-transparent uppercase" style={{ WebkitTextStroke: '1.5px hsl(22 93% 44% / 0.8)' }}>
            BIRRIA FUSION
          </h2>
        </div>
      </div>

      {/* Footer content */}
      <div className="px-6 md:px-[8vw] pb-8 -mt-8 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-primary text-lg uppercase tracking-wider mb-3">Navigate</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/menu" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Menu</Link>
              <Link to="/merch" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Merch</Link>
              <Link to="/events" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Events</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary text-lg uppercase tracking-wider mb-3">Follow the Smoke</h3>
            <div className="flex gap-4">
              {settings?.instagram_url && (
                <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-7 h-7" /></a>
              )}
              {settings?.facebook_url && (
                <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-7 h-7" /></a>
              )}
              <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-7 h-7" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary text-lg uppercase tracking-wider mb-3">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> {email}
              </a>
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> {phone}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Birria Fusion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
