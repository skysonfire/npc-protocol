"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Input, Textarea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { clientConfig } from '@/content/client-config';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: ContactFormData = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-2xl flex-col items-center gap-sm rounded-lg border border-brand/20 bg-surface-alt p-xl text-center"
      >
        <CheckCircle2 aria-hidden="true" className="h-10 w-10 text-brand" strokeWidth={1.5} />
        <h3 className="font-heading text-xl font-semibold text-text-primary">
          {clientConfig.contact.formSuccessTitle}
        </h3>
        <p className="text-text-secondary">{clientConfig.contact.formSuccessBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-lg" noValidate>
      <Input
        label="Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete="name"
        placeholder="Your name"
      />

      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="email"
        placeholder="your.email@example.com"
      />

      <Textarea
        label="Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="Your message here..."
      />

      <Button type="submit" disabled={isSubmitting} fullWidth size="lg">
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
