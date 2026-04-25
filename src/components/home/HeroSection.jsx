import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ChevronRight, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ truckLocation }) {
  const isOpen = truckLocation?.is_open;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1200"
          alt="Birria tacos being dipped in rich consommé"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-[8vw] py-24 md:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-display text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6">
              Street Food • Elevated
            </span>
            <div>
              <img
                src="/BirriaFusionLogo_circleonly.png"
                alt="Birria Fusion"
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
              />
            </div>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Slow-braised tradition meets bold, boundary-pushing flavor. Find the smoke. Taste the fire.
            </p>
          </motion.div>

          {/* Status card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 bg-card/80 backdrop-blur-md border border-border rounded-lg p-6 max-w-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="font-display font-bold text-lg uppercase tracking-wider">
                {isOpen ? 'We\'re Open' : 'Currently Closed'}
              </span>
            </div>

            {truckLocation ? (
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{truckLocation.address}</p>
                    {truckLocation.city && <p className="text-xs text-muted-foreground">{truckLocation.city}</p>}
                  </div>
                </div>
                {truckLocation.hours_today && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-sm text-muted-foreground">{truckLocation.hours_today}</p>
                  </div>
                )}
                {truckLocation.next_location && !isOpen && (
                  <div className="flex items-start gap-3 pt-2 border-t border-border">
                    <Navigation className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Next Stop</p>
                      <p className="text-sm font-medium">{truckLocation.next_location}</p>
                    </div>
                  </div>
                )}
                {truckLocation.latitude && truckLocation.longitude && (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${truckLocation.latitude},${truckLocation.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider">
                      Get Directions <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Check back soon for our next location!</p>
            )}
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/menu">
              <Button variant="outline" className="font-display uppercase tracking-wider text-sm border-border hover:border-primary hover:text-primary">
                View Menu
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="font-display uppercase tracking-wider text-sm border-border hover:border-primary hover:text-primary">
                Book Catering
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
