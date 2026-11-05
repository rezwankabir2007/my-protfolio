'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { contactSchema, type ContactFormValues } from '@/lib/validations';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit the form right now.');
      }

      setSubmitState('success');
      setMessage(result.message || 'Your message has been received.');
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setSubmitState('error');
      setMessage(errorMessage);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/[0.09] dark:bg-[#321a3b]/75 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-[#24102c] dark:text-slate-100 dark:placeholder:text-white/30 dark:focus:border-violet-200/40"
            placeholder="Your name"
          />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-500">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-[#24102c] dark:text-slate-100 dark:placeholder:text-white/30 dark:focus:border-violet-200/40"
            placeholder="you@example.com"
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-500">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          {...register('subject')}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-[#24102c] dark:text-slate-100 dark:placeholder:text-white/30 dark:focus:border-violet-200/40"
          placeholder="Project inquiry"
        />
        {errors.subject ? <p id="subject-error" className="mt-2 text-sm text-red-500">{errors.subject.message}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 dark:border-white/10 dark:bg-[#24102c] dark:text-slate-100 dark:placeholder:text-white/30 dark:focus:border-violet-200/40"
          placeholder="Tell me about your project, idea, or opportunity."
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-500">{errors.message.message}</p> : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-100 px-5 py-3 text-sm font-semibold text-[#32163b] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Messages are delivered by email when the contact service is configured.
        </p>
      </div>

      {message ? (
        <p
          role={submitState === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          className={`rounded-2xl border px-4 py-3 text-sm ${
            submitState === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300'
              : 'border-red-200 bg-red-50 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300'
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
