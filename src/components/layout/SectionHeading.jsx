import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block font-display text-primary text-sm font-bold uppercase tracking-[0.25em] mb-2">
          {label}
        </span>
      )}
      <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}