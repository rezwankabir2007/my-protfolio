'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = ['Aspiring Full-Stack Developer', 'Frontend Developer', 'React & Next.js Developer'];

export function RoleTypewriter() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(roles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const role = roles[roleIndex];
    let delay = isDeleting ? 35 : 75;

    if (!isDeleting && visibleLength === role.length) delay = 1600;
    if (isDeleting && visibleLength === 0) delay = 250;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && visibleLength === role.length) {
        setIsDeleting(true);
      } else if (isDeleting && visibleLength === 0) {
        setRoleIndex((current) => (current + 1) % roles.length);
        setIsDeleting(false);
      } else {
        setVisibleLength((current) => current + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, shouldReduceMotion, visibleLength]);

  const role = roles[roleIndex];

  return (
    <span aria-label={role} className="inline-flex min-w-0 items-center text-violet-100">
      <span aria-hidden="true">{shouldReduceMotion ? roles[0] : role.slice(0, visibleLength)}</span>
      {!shouldReduceMotion ? <span aria-hidden="true" className="ml-0.5 h-5 w-px animate-pulse bg-violet-200" /> : null}
    </span>
  );
}
