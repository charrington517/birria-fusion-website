import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/layout/SectionHeading';
import EventCard from '../components/events/EventCard';
import { sanity, urlFor } from '@/lib/sanity';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    sanity.fetch(`*[_type == "event"] | order(date desc)`).then(data => {
      setEvents(data.map(e => ({
        ...e,
        id: e._id,
        image_url: e.image ? urlFor(e.image).width(600).url() : e.image_url || null,
      })));
    });
  }, []);

  const activeEvents = events.filter(e => e.is_active !== false);
  const upcomingEvents = activeEvents.filter(e => !e.date || new Date(e.date) >= new Date());
  const pastEvents = activeEvents.filter(e => e.date && new Date(e.date) < new Date());

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200"
          alt="Food truck at night event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-[8vw] pb-8">
          <SectionHeading
            label="Where We'll Be"
            title="Events"
            description="From street pop-ups to private parties — catch the truck in action."
          />
        </div>
      </div>

      <div className="px-6 md:px-[8vw]">
        {upcomingEvents.length > 0 ? (
          <>
            <h3 className="font-display font-bold text-lg uppercase tracking-[0.2em] text-primary mb-6">Upcoming</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 mb-16">
            <p className="font-display text-2xl text-muted-foreground uppercase">Stay Tuned</p>
            <p className="text-sm text-muted-foreground mt-2">New events are being cooked up. Follow us for updates.</p>
          </motion.div>
        )}

        {pastEvents.length > 0 && (
          <>
            <h3 className="font-display font-bold text-lg uppercase tracking-[0.2em] text-muted-foreground mb-6">Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
