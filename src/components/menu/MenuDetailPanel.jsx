import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function MenuDetailPanel({ item, onClose }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto"
          >
            <div className="relative">
              {item.image_url && (
                <div className="aspect-[4/3] w-full">
                  <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm hover:bg-card"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-start justify-between">
                  <h2 className="font-display font-black text-3xl uppercase tracking-tight">{item.name}</h2>
                  <span className="font-display font-bold text-2xl text-primary">${item.price?.toFixed(2)}</span>
                </div>
                {item.is_popular && (
                  <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                    <Flame className="w-3 h-3 mr-1" /> Fan Favorite
                  </Badge>
                )}
              </div>

              {item.description && (
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              )}

              {item.ingredients && (
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-2">Ingredients</h3>
                  <p className="text-sm text-muted-foreground">{item.ingredients}</p>
                </div>
              )}

              {item.flavor_profile && (
                <div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-2">Flavor Profile</h3>
                  <p className="text-sm text-muted-foreground">{item.flavor_profile}</p>
                </div>
              )}

              {item.the_ritual && (
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-2">The Ritual</h3>
                  <p className="text-sm text-muted-foreground italic">{item.the_ritual}</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}