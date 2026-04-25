import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/layout/SectionHeading';
import MenuCard from '@/components/menu/MenuCard';
import MenuDetailPanel from '@/components/menu/MenuDetailPanel';
import { sanity, urlFor } from '@/lib/sanity';

export default function Menu() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    sanity.fetch(`*[_type == "menuItem" && is_available != false] | order(order asc)`).then(data => {
      setItems(data.map(item => ({
        ...item,
        id: item._id,
        image_url: item.image ? urlFor(item.image).width(600).url() : item.image_url || null,
      })));
    });
  }, []);

  const currentItems = items.filter(i => i.status !== 'Past Special');
  const pastSpecials = items.filter(i => i.status === 'Past Special');

  const hasSpecials = currentItems.some(i => i.status === 'Special');
  const categories = ['all', ...new Set(currentItems.map(i => i.category).filter(Boolean)), ...(hasSpecials ? ['specials'] : [])];
  const filtered = activeCategory === 'all'
    ? currentItems
    : activeCategory === 'specials'
      ? currentItems.filter(i => i.status === 'Special')
      : currentItems.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative h-[40vh] mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1200"
          alt="Birria tacos spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-[8vw] pb-8">
          <SectionHeading
            label="Dip. Drip. Devour."
            title="The Menu"
            description="Slow-braised birria elevated into every bite."
          />
        </div>
      </div>

      <div className="px-6 md:px-[8vw]">
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md font-display text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} onClick={setSelectedItem} />
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="font-display text-2xl text-muted-foreground uppercase">Coming Soon</p>
          </motion.div>
        )}

        {/* Past Specials */}
        {pastSpecials.length > 0 && (
          <div className="mt-24">
            <SectionHeading
              label="The Vault"
              title="Past Specials"
              description="The ones that make you want to be a regular."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
              {pastSpecials.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} onClick={setSelectedItem} />
              ))}
            </div>
          </div>
        )}
      </div>

      <MenuDetailPanel item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
