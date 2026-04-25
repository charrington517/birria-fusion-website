import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import { sanity } from '@/lib/sanity';

async function geocode(address, city) {
  const query = encodeURIComponent(`${address || ''} ${city || ''}`.trim());
  if (!query) return null;
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
    const data = await res.json();
    if (data[0]) return { latitude: parseFloat(data[0].lat), longitude: parseFloat(data[0].lon) };
  } catch (e) { /* ignore */ }
  return null;
}

export default function Home() {
  const [truckLocation, setTruckLocation] = useState(null);

  useEffect(() => {
    sanity.fetch(`*[_type == "truckLocation"][0]`).then(async (loc) => {
      if (loc && !loc.latitude && (loc.address || loc.city)) {
        const coords = await geocode(loc.address, loc.city);
        if (coords) loc = { ...loc, ...coords };
      }
      setTruckLocation(loc);
    });
  }, []);

  return (
    <div>
      <HeroSection truckLocation={truckLocation} />
      <FeaturedSection />
      <AboutSnippet />
    </div>
  );
}
