import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../layout/SectionHeading';

const features = [
  {
    title: 'The Menu',
    description: 'Slow-braised birria elevated into tacos, quesabirria, ramen, and more.',
    link: '/menu',
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600',
  },
  {
    title: 'Merch Drop',
    description: 'Rep the fusion. Tees, hats, and hoodies built for the streets.',
    link: '/merch',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
  },
  {
    title: 'Events',
    description: 'Catch us at pop-ups, festivals, and private events near you.',
    link: '/events',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600',
  },
];

export default function FeaturedSection() {
  return (
    <section className="px-6 md:px-[8vw] py-24 md:py-32">
      <SectionHeading label="Explore" title="What We Bring" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Link to={item.link} className="group block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}