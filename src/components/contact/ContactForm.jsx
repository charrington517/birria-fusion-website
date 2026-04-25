import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Replace with your own API endpoint (e.g. EmailJS, Formspree, or custom backend)
    await new Promise(r => setTimeout(r, 1000));
    console.log('Contact form submitted:', form);
    toast.success('Message sent!');
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-display font-bold text-2xl uppercase tracking-wider">Message Sent</h3>
        <p className="text-muted-foreground mt-2">We'll get back to you soon.</p>
        <Button variant="outline" className="mt-6 font-display uppercase tracking-wider" onClick={() => setSubmitted(false)}>
          Send Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="font-display uppercase tracking-wider text-xs">Name *</Label>
          <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-secondary border-border focus:border-primary" />
        </div>
        <div className="space-y-2">
          <Label className="font-display uppercase tracking-wider text-xs">Email *</Label>
          <Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="bg-secondary border-border focus:border-primary" />
        </div>
      </div>
      <div className="space-y-2">
        <Label className="font-display uppercase tracking-wider text-xs">Subject</Label>
        <Input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" className="bg-secondary border-border focus:border-primary" />
      </div>
      <div className="space-y-2">
        <Label className="font-display uppercase tracking-wider text-xs">Message *</Label>
        <Textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what's on your mind..." className="bg-secondary border-border focus:border-primary min-h-[120px]" />
      </div>
      <Button type="submit" disabled={submitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider">
        {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
        Send Message
      </Button>
    </form>
  );
}
