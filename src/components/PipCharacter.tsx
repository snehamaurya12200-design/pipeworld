import React, { useState } from 'react';
import { sound } from '../utils/audio';

interface PipCharacterProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  showTagline?: boolean;
  interactiveSpeech?: boolean;
  onOpenAssetInspector?: () => void;
  customAssetUrl?: string | null;
}

export const PipCharacter: React.FC<PipCharacterProps> = ({
  size = 'md',
  showBadge = true,
  onOpenAssetInspector,
  customAssetUrl
}) => {
  const [isLanternGlow, setIsLanternGlow] = useState(false);

  const handleInteract = () => {
    sound.playClick();
    setIsLanternGlow(true);
    setTimeout(() => setIsLanternGlow(false), 800);
  };

  const dim = {
    sm: 'w-28 h-28',
    md: 'w-44 h-44',
    lg: 'w-56 h-56'
  }[size];

  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center select-none text-center">
      <div 
        onClick={handleInteract}
        className={`relative ${dim} flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105`}
        title="Pip - Junior Dream Engineer (Click to illuminate lantern!)"
      >
        {/* Soft magical star sparkles around Pip */}
        <div className="absolute top-2 right-4 text-[#fde047] text-xs animate-pulse">✦</div>
        <div className="absolute top-10 left-3 text-[#f4a6b8] text-xs animate-bounce">✦</div>
        <div className="absolute bottom-10 right-2 text-[#c9bcf6] text-xs animate-ping">✦</div>

        {/* 1. Official Supplied Character PNG with high-res clarity */}
        {!imgError ? (
          <img
            src={customAssetUrl || "/assets/pip-waving-cloud.png"}
            alt="Pip - Junior Dream Engineer (Official Character)"
            className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-fidelity Vector Fallback matching the official character specifications exactly */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
          >
            <defs>
              <linearGradient id="ivorySkullFB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#fffdfa" />
                <stop offset="90%" stopColor="#fbf6ee" />
                <stop offset="100%" stopColor="#f3e8dc" />
              </linearGradient>
              <linearGradient id="cloudFillFB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#fff5f5" />
                <stop offset="90%" stopColor="#fce7f3" />
                <stop offset="100%" stopColor="#ede9fe" />
              </linearGradient>
              <linearGradient id="onesieFillFB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#fef2f8" />
                <stop offset="85%" stopColor="#fce7f3" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>
              <linearGradient id="capFillFB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef2f2" />
                <stop offset="40%" stopColor="#fce7f3" />
                <stop offset="85%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f4a6b8" />
              </linearGradient>
              <linearGradient id="brassFillFB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
              <linearGradient id="musicBoxFillFB" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0e7ff" />
                <stop offset="60%" stopColor="#c7d2fe" />
                <stop offset="100%" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>

            <g transform="translate(0, 80)">
              {/* Cloud Base */}
              <ellipse cx="250" cy="275" rx="160" ry="38" fill="#f3e0e2" />
              <circle cx="140" cy="255" r="45" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="180" cy="265" r="48" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="115" cy="250" r="32" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="95" cy="245" r="22" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="360" cy="255" r="45" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="320" cy="265" r="48" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="385" cy="250" r="32" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="405" cy="245" r="22" fill="url(#cloudFillFB)" stroke="#fce7f3" strokeWidth="1.5" />
              <circle cx="215" cy="260" r="50" fill="url(#cloudFillFB)" />
              <circle cx="285" cy="260" r="50" fill="url(#cloudFillFB)" />
              <circle cx="250" cy="265" r="52" fill="url(#cloudFillFB)" />
              <ellipse cx="250" cy="255" rx="150" ry="36" fill="url(#cloudFillFB)" />
              <path d="M 125 235 Q 185 220 250 222 Q 315 220 375 235" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.8" />
              <g transform="translate(250, 268)">
                <path d="M -48 -2 C -51 -7 -57 -7 -60 -2 C -63 4 -48 11 -48 11 C -48 11 -33 4 -36 -2 C -39 -7 -45 -7 -48 -2 Z" fill="#f472b6" />
                <text x="0" y="7" textAnchor="middle" fontFamily="'Brush Script MT', 'Snell Roundhand', cursive, sans-serif" fontSize="28" fontWeight="bold" fill="#f472b6" letterSpacing="1.5">
                  Pip
                </text>
                <path d="M 48 -2 C 45 -7 39 -7 36 -2 C 33 4 48 11 48 11 C 48 11 63 4 60 -2 C 57 -7 51 -7 48 -2 Z" fill="#f472b6" />
              </g>

              {/* Lower Body */}
              <ellipse cx="250" cy="180" rx="65" ry="48" fill="url(#onesieFillFB)" stroke="#fbcfe8" strokeWidth="1.8" />
              <ellipse cx="195" cy="205" rx="36" ry="24" fill="url(#onesieFillFB)" transform="rotate(-15 195 205)" stroke="#fbcfe8" strokeWidth="1.8" />
              <ellipse cx="170" cy="216" rx="20" ry="16" fill="#c084fc" stroke="#a855f7" strokeWidth="1.5" transform="rotate(-10 170 216)" />
              <ellipse cx="170" cy="216" rx="14" ry="10" fill="#e9d5ff" transform="rotate(-10 170 216)" />
              <ellipse cx="305" cy="205" rx="36" ry="24" fill="url(#onesieFillFB)" transform="rotate(15 305 205)" stroke="#fbcfe8" strokeWidth="1.8" />
              <ellipse cx="330" cy="216" rx="20" ry="16" fill="#c084fc" stroke="#a855f7" strokeWidth="1.5" transform="rotate(10 330 216)" />
              <ellipse cx="330" cy="216" rx="14" ry="10" fill="#e9d5ff" transform="rotate(10 330 216)" />
              <path d="M 250 148 L 250 205" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="250" cy="160" r="2.5" fill="#f472b6" />
              <circle cx="250" cy="175" r="2.5" fill="#f472b6" />
              <circle cx="250" cy="190" r="2.5" fill="#f472b6" />

              {/* Arms & Hands */}
              <g id="hand-lantern-fb" className={isLanternGlow ? 'scale-105' : ''}>
                <ellipse cx="190" cy="155" rx="18" ry="26" fill="url(#onesieFillFB)" transform="rotate(25 190 155)" stroke="#fbcfe8" strokeWidth="1.8" />
                <ellipse cx="178" cy="180" rx="14" ry="20" fill="url(#onesieFillFB)" transform="rotate(-15 178 180)" stroke="#fbcfe8" strokeWidth="1.8" />
                <circle cx="178" cy="195" r="9" fill="#fffdfa" stroke="#d5c7b8" strokeWidth="1.2" />
                {/* Lantern */}
                <g transform="translate(145, 175)">
                  <circle cx="32" cy="48" r="38" fill="#fef08a" opacity="0.35" />
                  <g stroke="#fde047" strokeWidth="2" strokeLinecap="round" opacity="0.8">
                    <line x1="32" y1="8" x2="32" y2="2" />
                    <line x1="32" y1="88" x2="32" y2="94" />
                    <line x1="-6" y1="48" x2="-12" y2="48" />
                    <line x1="70" y1="48" x2="76" y2="48" />
                  </g>
                  <circle cx="32" cy="18" r="10" stroke="url(#brassFillFB)" strokeWidth="3.5" fill="none" />
                  <path d="M 12 34 Q 32 24 52 34 L 54 38 L 10 38 Z" fill="url(#brassFillFB)" stroke="#854d0e" strokeWidth="1.2" />
                  <rect x="14" y="38" width="36" height="30" rx="3" fill="#fffbeb" stroke="url(#brassFillFB)" strokeWidth="3" />
                  <circle cx="32" cy="52" r="12" fill="#fde047" />
                  <circle cx="32" cy="52" r="7" fill="#ffffff" />
                  <line x1="26" y1="38" x2="26" y2="68" stroke="#ca8a04" strokeWidth="1.5" />
                  <line x1="38" y1="38" x2="38" y2="68" stroke="#ca8a04" strokeWidth="1.5" />
                  <rect x="11" y="68" width="42" height="6" rx="2" fill="url(#brassFillFB)" stroke="#854d0e" strokeWidth="1" />
                </g>
              </g>

              {/* Music Box Arm */}
              <g id="hand-music-box-fb">
                <ellipse cx="310" cy="155" rx="18" ry="26" fill="url(#onesieFillFB)" transform="rotate(-25 310 155)" stroke="#fbcfe8" strokeWidth="1.8" />
                <ellipse cx="318" cy="178" rx="14" ry="20" fill="url(#onesieFillFB)" transform="rotate(20 318 178)" stroke="#fbcfe8" strokeWidth="1.8" />
                <circle cx="328" cy="195" r="9" fill="#fffdfa" stroke="#d5c7b8" strokeWidth="1.2" />
                {/* Music Box */}
                <g transform="translate(305, 170)">
                  <ellipse cx="32" cy="28" rx="26" ry="7" fill="#fbcfe8" stroke="#f472b6" strokeWidth="1.5" />
                  <path d="M 6 28 L 6 52 C 6 58 58 58 58 52 L 58 28 Z" fill="url(#musicBoxFillFB)" stroke="#818cf8" strokeWidth="1.8" />
                  <ellipse cx="32" cy="28" rx="24" ry="6" fill="#fef08a" />
                  <polygon points="32,38 33,41 36,42 33,43 32,46 31,43 28,42 31,41" fill="#fde047" stroke="#ca8a04" strokeWidth="0.8" />
                  <path d="M 58 42 L 68 42" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="68" cy="42" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
                  {/* Miniature Unicorn */}
                  <g transform="translate(18, 2)">
                    <ellipse cx="14" cy="18" rx="10" ry="7" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.2" />
                    <rect x="7" y="22" width="2.5" height="7" rx="1" fill="#ffffff" />
                    <rect x="11" y="22" width="2.5" height="7" rx="1" fill="#ffffff" />
                    <rect x="16" y="22" width="2.5" height="7" rx="1" fill="#ffffff" />
                    <rect x="20" y="22" width="2.5" height="7" rx="1" fill="#ffffff" />
                    <rect x="7" y="27" width="2.5" height="2" fill="#fde047" />
                    <rect x="11" y="27" width="2.5" height="2" fill="#fde047" />
                    <rect x="16" y="27" width="2.5" height="2" fill="#fde047" />
                    <rect x="20" y="27" width="2.5" height="2" fill="#fde047" />
                    <ellipse cx="26" cy="11" rx="5" ry="4" fill="#ffffff" />
                    <circle cx="26" cy="10" r="1.2" fill="#4338ca" />
                    <polygon points="26,7 28,1 29,7" fill="#fde047" stroke="#ca8a04" strokeWidth="0.6" />
                    <path d="M 22 8 Q 20 13 22 18" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </g>
                </g>
              </g>

              {/* Pip Skull Head */}
              <ellipse cx="250" cy="105" rx="64" ry="60" fill="url(#ivorySkullFB)" stroke="#e8ded2" strokeWidth="2" />
              <path d="M 195 110 C 190 138 215 152 250 152 C 285 152 310 138 305 110 Z" fill="url(#ivorySkullFB)" stroke="#e8ded2" strokeWidth="2" />
              <path d="M 250 48 Q 248 55 251 62 Q 249 68 250 74" stroke="#d5c7b8" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
              {/* Eye sockets */}
              <ellipse cx="222" cy="112" rx="19" ry="22" fill="#181124" />
              <ellipse cx="278" cy="112" rx="19" ry="22" fill="#181124" />
              {/* Eye lights */}
              <circle cx="226" cy="114" r="6" fill="#fde047" opacity="0.4" />
              <circle cx="226" cy="114" r="3.2" fill="#fef08a" />
              <circle cx="226" cy="114" r="1.5" fill="#ffffff" />
              <circle cx="274" cy="114" r="6" fill="#fde047" opacity="0.4" />
              <circle cx="274" cy="114" r="3.2" fill="#fef08a" />
              <circle cx="274" cy="114" r="1.5" fill="#ffffff" />
              {/* Nose */}
              <path d="M 248 128 L 252 128 L 250 132 Z" fill="#2d2235" />
              {/* Smile */}
              <path d="M 241 138 Q 250 144 259 138" stroke="#3b2b45" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Cheeks */}
              <ellipse cx="204" cy="132" rx="16" ry="10" fill="#fca5a5" opacity="0.65" />
              <ellipse cx="296" cy="132" rx="16" ry="10" fill="#fca5a5" opacity="0.65" />

              {/* Nightcap with Bow */}
              <path d="M 194 85 C 180 50 200 15 250 15 C 295 15 315 45 308 85 C 290 80 270 78 250 78 C 225 78 208 81 194 85 Z" fill="url(#capFillFB)" stroke="#f4a6b8" strokeWidth="1.8" />
              <path d="M 215 30 C 170 30 145 65 140 100 C 135 125 150 135 155 120 C 160 100 180 60 215 30 Z" fill="url(#capFillFB)" stroke="#f4a6b8" strokeWidth="1.8" />
              <circle cx="140" cy="115" r="16" fill="#ffffff" stroke="#fbcfe8" strokeWidth="1.5" />
              <path d="M 192 84 C 220 74 280 74 308 84 C 304 94 280 90 250 90 C 220 90 196 94 192 84 Z" fill="#fdf2f8" stroke="#fbcfe8" strokeWidth="1.8" />
              {/* Stars on cap */}
              <polygon points="245,35 246,38 249,39 246,40 245,43 244,40 241,39 244,38" fill="#fde047" />
              <polygon points="275,45 276,48 279,49 276,50 275,53 274,50 271,49 274,48" fill="#fde047" />
              {/* Big Pink Bow */}
              <g transform="translate(205, 80)">
                <path d="M 0 0 C -18 -15 -25 5 -4 5 Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <path d="M 0 0 C 18 -15 25 5 4 5 Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.5" />
                <ellipse cx="0" cy="0" rx="5.5" ry="4.5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
                <path d="M -2 2 Q -8 14 -12 18 L -6 18 Q -2 12 0 4 Z" fill="#f472b6" />
                <path d="M 2 2 Q 8 14 12 18 L 6 18 Q 2 12 0 4 Z" fill="#f472b6" />
              </g>
            </g>
          </svg>
        )}
      </div>

      {/* Official Asset Path pill */}
      {showBadge && (
        <div 
          onClick={onOpenAssetInspector}
          className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20193e] border border-[#a28cd4]/50 text-[10px] text-[#d6c9f2] font-mono shadow-sm cursor-pointer hover:border-[#f4a6b8] transition-colors"
          title="Official Supplied Asset Path"
        >
          <span className="text-xs">📁</span>
          <span>assets/pip-waving-cloud.png</span>
        </div>
      )}
    </div>
  );
};
