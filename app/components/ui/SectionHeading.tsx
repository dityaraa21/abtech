import React from 'react';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  light?: boolean;
}
export function SectionHeading({
  title,
  subtitle,
  alignment = 'center',
  className = '',
  light = false
}: SectionHeadingProps) {
  return <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-200' : 'text-slate-600'}`}>
          {subtitle}
        </p>}
      <div className={`mt-4 h-1 w-20 bg-[#DC2626] ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>;
}