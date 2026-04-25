import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSnippet() {
  return (
    <section className="px-6 md:px-[8vw] py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
              alt="Birria meat being shredded with dramatic steam"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-display text-primary text-sm font-bold uppercase tracking-[0.25em]">Our Story</span>
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight mt-2">
            Born from <span className="text-primary">Fire</span>
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Birria Fusion started with a simple belief: traditional flavors don't need to stay in the past. We take the time-honored art of slow-braised birria — hours of simmering chiles, spices, and love — and push it into uncharted territory.
            </p>
            <p>
              From our truck to your hands, every taco, every quesabirria, every bowl of consommé tells a story of where we come from and where we're going.
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display font-black text-3xl text-primary">8+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Hours Braised</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-primary">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">From Scratch</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-primary">0</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Shortcuts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}