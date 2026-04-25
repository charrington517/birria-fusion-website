import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function MerchCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-card mb-4">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="font-display text-5xl text-muted-foreground/20 uppercase">{item.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {!item.is_available && (
          <Badge className="absolute top-3 right-3 bg-destructive/90 text-destructive-foreground border-0 font-display uppercase tracking-wider text-xs">
            Sold Out
          </Badge>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-start justify-between">
          <h3 className="font-display font-bold text-lg uppercase tracking-wider text-foreground">
            {item.name}
          </h3>
          <span className="font-display font-bold text-primary">${item.price?.toFixed(2)}</span>
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
        {item.sizes_available?.length > 0 && (
          <div className="flex gap-1.5 pt-1">
            {item.sizes_available.map(size => (
              <span key={size} className="px-2 py-0.5 text-xs font-display uppercase tracking-wider bg-secondary text-muted-foreground rounded">
                {size}
              </span>
            ))}
          </div>
        )}
        {item.colors_available?.length > 0 && (
          <p className="text-xs text-muted-foreground">
            Colors: {item.colors_available.join(', ')}
          </p>
        )}
      </div>
    </motion.div>
  );
}