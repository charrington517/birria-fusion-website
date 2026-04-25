import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionHeading from '../components/layout/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import CateringForm from '../components/contact/CateringForm';
import { Mail, ChefHat, Phone, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { sanity } from '@/lib/sanity';

export default function Contact() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    sanity.fetch(`*[_type == "siteSettings"][0]`).then(setSettings);
  }, []);

  const email = settings?.email || 'hello@birriafusion.com';
  const phone = settings?.phone || '(555) 123-4567';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="relative h-[35vh] mb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200"
          alt="Catering spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-[8vw] pb-8">
          <SectionHeading
            label="Let's Connect"
            title="Get in Touch"
            description="Questions, catering requests, or just want to say what's up — we're here."
          />
        </div>
      </div>

      <div className="px-6 md:px-[8vw]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-4">Direct Line</h3>
              <div className="space-y-3">
                <a href={`mailto:${email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" /> {email}
                </a>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" /> {phone}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-4">Follow the Smoke</h3>
              <div className="space-y-3">
                {settings?.instagram_url && (
                  <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" /> {settings.instagram_handle || '@birriafusion'}
                  </a>
                )}
                {settings?.facebook_url && (
                  <a href={settings.facebook_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" /> {settings.facebook_name || 'Birria Fusion'}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-primary mb-2">Catering Info</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We cater events of all sizes — from intimate gatherings of 20 to large-scale events of 500+. Our full setup includes the truck, staff, and an unforgettable birria experience.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="w-full bg-secondary mb-8 p-1">
                <TabsTrigger value="contact" className="flex-1 font-display uppercase tracking-wider text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" /> General Contact
                </TabsTrigger>
                <TabsTrigger value="catering" className="flex-1 font-display uppercase tracking-wider text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <ChefHat className="w-4 h-4 mr-2" /> Catering / Events
                </TabsTrigger>
              </TabsList>
              <TabsContent value="contact">
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  <ContactForm />
                </div>
              </TabsContent>
              <TabsContent value="catering">
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  <CateringForm />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
