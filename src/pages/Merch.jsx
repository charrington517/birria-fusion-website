import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/layout/SectionHeading';
import MerchCard from '@/components/merch/MerchCard';
import { sanity, urlFor } from '@/lib/sanity';

export default function Merch() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    sanity.fetch(`*[_type == "merchItem"] | order(order asc)`).then(data => {
      setItems(data.map(item => ({
        ...item,
        id: item._id,
        image_url: item.image ? urlFor(item.image).width(600).url() : item.image_url || null,
      })));
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200"
          alt="Birria Fusion merch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-[8vw] pb-8">
          <SectionHeading
            label="Rep the Fusion"
            title="Merch"
            description="Tees, hats, and hoodies built for the streets."
          />
        </div>
      </div>

      <div className="px-6 md:px-[8vw]">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <MerchCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="font-display text-2xl text-muted-foreground uppercase">Drop Coming Soon</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
