import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar as CalIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const typeColors = {
  public: 'bg-primary/10 text-primary border-primary/20',
  private: 'bg-secondary text-muted-foreground border-border',
  festival: 'bg-accent/20 text-accent-foreground border-accent/30',
  popup: 'bg-primary/20 text-primary border-primary/30',
};

export default function EventCard({ event, index }) {
  const eventDate = event.date ? new Date(event.date) : null;
  const isPast = eventDate && eventDate < new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group ${isPast ? 'opacity-50' : ''}`}
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
        {event.image_url && (
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={typeColors[event.event_type] || typeColors.public}>
              {event.event_type}
            </Badge>
            {isPast && (
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Past</span>
            )}
          </div>

          <h3 className="font-display font-bold text-xl uppercase tracking-wider">
            {event.title}
          </h3>

          {event.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
          )}

          <div className="space-y-2 pt-2 border-t border-border">
            {eventDate && (
              <div className="flex items-center gap-2 text-sm">
                <CalIcon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{format(eventDate, 'EEEE, MMMM d, yyyy')}</span>
              </div>
            )}
            {(event.time_start || event.time_end) && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  {event.time_start}{event.time_end ? ` — ${event.time_end}` : ''}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}