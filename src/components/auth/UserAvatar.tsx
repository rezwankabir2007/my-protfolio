'use client';

import Image from 'next/image';
import { useState } from 'react';

type UserAvatarProps = {
  name: string;
  image?: string | null;
  size?: 'sm' | 'lg';
};

export function UserAvatar({ name, image, size = 'sm' }: UserAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('') || '?';
  const dimensions = size === 'lg' ? 96 : 40;
  const textSize = size === 'lg' ? 'text-2xl' : 'text-sm';

  return image && !imageFailed ? (
    <Image
      src={image}
      alt={`${name}'s profile picture`}
      width={dimensions}
      height={dimensions}
      unoptimized
      onError={() => setImageFailed(true)}
      className={`${size === 'lg' ? 'h-24 w-24' : 'h-10 w-10'} rounded-full border border-slate-200 object-cover dark:border-slate-700`}
    />
  ) : (
    <span
      aria-label={`${name}'s initials`}
      className={`${size === 'lg' ? 'h-24 w-24' : 'h-10 w-10'} ${textSize} inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white`}
    >
      {initials}
    </span>
  );
}
