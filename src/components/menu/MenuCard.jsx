import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Flame } from 'lucide-react';

export default function MenuCard({ item, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => onClick(item)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square rounded-lg overflow-hidden bg-card">
        {item.image_url ? (
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="font-display text-4xl text-muted-foreground/30 uppercase">{item.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {item.is_popular && (
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0 font-display uppercase tracking-wider text-xs">
            <Flame className="w-3 h-3 mr-1" /> Popular
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
          <p className="font-display font-bold text-primary text-lg mt-2">${item.price?.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
}