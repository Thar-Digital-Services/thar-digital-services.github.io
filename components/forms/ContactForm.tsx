'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint or form service
      // For now, just log and show success
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-muted">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
          placeholder="your.email@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-muted">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company *
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
          placeholder="Your company"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-muted">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-muted">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
          Thank you! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-muted/20 border border-red-muted/50 rounded-lg text-red-muted">
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-glow hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
