'use client';

import Link from 'next/link';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

import { authClient } from '@/lib/auth-client';
import { loginSchema, signupSchema } from '@/lib/auth-validation';

type AuthFormProps = {
  mode: 'login' | 'signup';
};

type FieldErrors = Partial<Record<'name' | 'email' | 'password' | 'confirmPassword', string>>;

function getFieldErrors(issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>): FieldErrors {
  const fieldErrors: FieldErrors = {};
  for (const issue of issues) {
    const field = issue.path[0];
    if (typeof field === 'string' && !fieldErrors[field as keyof FieldErrors]) {
      fieldErrors[field as keyof FieldErrors] = issue.message;
    }
  }
  return fieldErrors;
}

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === 'signup';
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | ''>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setFeedback('');
    setFeedbackType('');

    const signupValues = isSignup ? signupSchema.safeParse({ name, email, password, confirmPassword }) : null;
    const loginValues = isSignup ? null : loginSchema.safeParse({ email, password });

    if (signupValues && !signupValues.success) {
      setErrors(getFieldErrors(signupValues.error.issues));
      return;
    }
    if (loginValues && !loginValues.success) {
      setErrors(getFieldErrors(loginValues.error.issues));
      return;
    }

    setIsSubmitting(true);

    try {
      const errorMessage = signupValues?.success
        ? (
            await authClient.signUp.email({
              name: signupValues.data.name,
              email: signupValues.data.email,
              password: signupValues.data.password,
              callbackURL: '/',
            })
          ).error?.message
        : loginValues?.success
          ? (
              await authClient.signIn.email({
                email: loginValues.data.email,
                password: loginValues.data.password,
                callbackURL: '/',
              })
            ).error?.message
          : 'Authentication request could not be prepared.';

      if (errorMessage) {
        setFeedback(errorMessage || 'Authentication failed. Please try again.');
        setFeedbackType('error');
        return;
      }

      setFeedback(isSignup ? 'Account created. You are now signed in.' : 'You are signed in.');
      setFeedbackType('success');
      router.replace('/');
      router.refresh();
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Authentication failed. Please try again.');
      setFeedbackType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {isSignup ? (
        <div>
          <label htmlFor="auth-name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Full name
          </label>
          <input
            id="auth-name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'auth-name-error' : undefined}
            className={inputClassName}
            placeholder="Your name"
          />
          {errors.name ? <p id="auth-name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p> : null}
        </div>
      ) : null}

      <div>
        <label htmlFor="auth-email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email address
        </label>
        <input
          id="auth-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'auth-email-error' : undefined}
          className={inputClassName}
          placeholder="you@example.com"
        />
        {errors.email ? <p id="auth-email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="auth-password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
          Password
        </label>
        <div className="relative">
          <input
            id="auth-password"
            type={isPasswordVisible ? 'text' : 'password'}
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'auth-password-error' : undefined}
            className={`${inputClassName} pr-12`}
            placeholder={isSignup ? 'At least 8 characters' : 'Your password'}
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
          >
            {isPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password ? <p id="auth-password-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p> : null}
      </div>

      {isSignup ? (
        <div>
          <label htmlFor="auth-confirm-password" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Confirm password
          </label>
          <div className="relative">
            <input
              id="auth-confirm-password"
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              aria-invalid={Boolean(errors.confirmPassword)}
              aria-describedby={errors.confirmPassword ? 'auth-confirm-password-error' : undefined}
              className={`${inputClassName} pr-12`}
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setIsConfirmPasswordVisible((visible) => !visible)}
              aria-label={isConfirmPasswordVisible ? 'Hide confirm password' : 'Show confirm password'}
              className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {isConfirmPasswordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword ? <p id="auth-confirm-password-error" className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p> : null}
        </div>
      ) : null}

      {feedback ? (
        <p
          role={feedbackType === 'error' ? 'alert' : 'status'}
          className={`rounded-2xl border px-4 py-3 text-sm ${
            feedbackType === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200'
              : 'border-red-200 bg-red-50 text-red-800 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-200'
          }`}
        >
          {feedback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        {isSubmitting ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in'}
      </button>

      <p className="text-center text-sm text-slate-600 dark:text-slate-300">
        {isSignup ? 'Already have an account?' : 'New here?'}{' '}
        <Link href={isSignup ? '/login' : '/signup'} className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
          {isSignup ? 'Log in' : 'Create an account'}
        </Link>
      </p>
    </form>
  );
}
