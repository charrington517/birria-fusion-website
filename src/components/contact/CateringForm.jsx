import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const eventTypes = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'birthday', label: 'Birthday Party' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'community', label: 'Community Event' },
  { value: 'other', label: 'Other' },
];

export default function CateringForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    event_type: '', event_date: '', guest_count: '',
    location: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Replace with your own API endpoint
    await new Promise(r => setTimeout(r, 1000));
    console.log('Catering inquiry submitted:', form);
    toast.success('Inquiry submitted!');
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-display font-bold text-2xl uppercase tracking-wider">Request Received</h3>
        <p className="text-muted-foreground mt-2">We'll review your inquiry and reach out within 24-48 hours.</p>
        <Button variant="outline" className="mt-6 font-display uppercase tracking-wider" onClick={() => { setSubmitted(false); setStep(1); setForm({ name: '', email: '', phone: '', event_type: '', event_date: '', guest_count: '', location: '', message: '' }); }}>
          Submit Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-colors ${
              s <= step ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
            }`}>{s}</div>
            {s < 3 && <div className={`w-8 h-0.5 ${s < step ? 'bg-primary' : 'bg-border'}`} />}
          </div>
        ))}
        <span className="ml-3 text-sm text-muted-foreground font-display uppercase tracking-wider">
          {step === 1 ? 'Your Info' : step === 2 ? 'Event Details' : 'Additional Info'}
        </span>
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Full Name *</Label>
            <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Email *</Label>
            <Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Phone</Label>
            <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567" className="bg-secondary border-border" />
          </div>
          <Button type="button" onClick={() => setStep(2)} disabled={!form.name || !form.email} className="w-full bg-primary hover:bg-primary/90 font-display uppercase tracking-wider">
            Next Step
          </Button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Event Type *</Label>
            <Select value={form.event_type} onValueChange={v => setForm({ ...form, event_type: v })}>
              <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder="Select event type" /></SelectTrigger>
              <SelectContent>
                {eventTypes.map(t => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Event Date</Label>
            <Input type="date" value={form.event_date} onChange={e => setForm({ ...form, event_date: e.target.value })} className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Estimated Guest Count *</Label>
            <Input required type="number" min="1" value={form.guest_count} onChange={e => setForm({ ...form, guest_count: e.target.value })} placeholder="50" className="bg-secondary border-border" />
          </div>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 font-display uppercase tracking-wider">Back</Button>
            <Button type="button" onClick={() => setStep(3)} disabled={!form.event_type || !form.guest_count} className="flex-1 bg-primary hover:bg-primary/90 font-display uppercase tracking-wider">Next</Button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Event Location</Label>
            <Input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="City, venue, or address" className="bg-secondary border-border" />
          </div>
          <div className="space-y-2">
            <Label className="font-display uppercase tracking-wider text-xs">Additional Details</Label>
            <Textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your event vision, dietary needs, special requests..." className="bg-secondary border-border min-h-[120px]" />
          </div>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1 font-display uppercase tracking-wider">Back</Button>
            <Button type="submit" disabled={submitting} className="flex-1 bg-primary hover:bg-primary/90 font-display uppercase tracking-wider">
              {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <ChefHat className="w-4 h-4 mr-2" />}
              Submit Inquiry
            </Button>
          </div>
        </motion.div>
      )}
    </form>
  );
}
