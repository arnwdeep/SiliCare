'use client';

import React from 'react';

interface SiliCareLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export default function SiliCareLogo({ className = '', size = 'md', showTagline = true }: SiliCareLogoProps) {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Emblem matching official SiliCare Logo */}
      <svg
        viewBox="0 0 500 500"
        className={`${sizeMap[size]} w-auto shrink-0`}
        aria-label="SiliCare Emblem"
      >
        <circle cx="250" cy="250" r="235" fill="#ffffff" stroke="#002d72" strokeWidth="12" />
        <path d="M 50 230 A 205 205 0 0 1 450 230" fill="none" stroke="#0d9488" strokeWidth="7" strokeLinecap="round" />
        <path d="M 450 270 A 205 205 0 0 1 50 270" fill="none" stroke="#002d72" strokeWidth="9" strokeLinecap="round" />

        {/* Center S-Swoosh with Medical Cross */}
        <g transform="translate(250, 150)">
          <path d="M 0 -70 C -45 -70 -70 -35 -60 0 C -55 20 -35 40 0 40 C -35 25 -45 -10 -25 -45 C -10 -60 0 -70 0 -70 Z" fill="#002d72" />
          <path d="M 0 40 C 45 40 70 5 60 -30 C 55 -50 35 -70 0 -70 C 35 -55 45 -20 25 15 C 10 30 0 40 0 40 Z" fill="#0d9488" />
          <path d="M -13 -28 H 13 V -47 H -13 Z M -28 -13 H 28 V 13 H -28 Z M -13 13 H 13 V 32 H -13 Z" fill="#009688" />
        </g>

        {/* Brand Typography */}
        <text x="250" y="325" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontWeight="900" fontSize="64" letterSpacing="4" fill="#002d72">
          SILICARE
        </text>

        {/* Subtitle */}
        <g transform="translate(250, 365)">
          <line x1="-190" y1="-6" x2="-145" y2="-6" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
          <text x="0" y="0" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontWeight="800" fontSize="20" letterSpacing="3" fill="#0d9488">
            CARE YOU CAN TRUST
          </text>
          <line x1="145" y1="-6" x2="190" y2="-6" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>

      {/* Brand Text Block */}
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-black text-[#002d72] tracking-wider leading-none">
          SILICARE
        </span>
        {showTagline && (
          <span className="text-[9px] font-extrabold text-[#0d9488] tracking-widest uppercase mt-0.5">
            CARE YOU CAN TRUST
          </span>
        )}
      </div>
    </div>
  );
}
