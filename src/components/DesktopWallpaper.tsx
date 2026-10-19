import React from 'react';

export const DesktopWallpaper: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      {/* Handcrafted 2D Pixel-Art Midnight Dreamscape SVG */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
        shapeRendering="crispEdges"
      >
        <defs>
          {/* Deep Midnight Celestial Sky Gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#050814" />
            <stop offset="30%" stopColor="#0b112c" />
            <stop offset="60%" stopColor="#131b3e" />
            <stop offset="85%" stopColor="#1e264d" />
            <stop offset="100%" stopColor="#2c2850" />
          </linearGradient>

          {/* Celestial Moon Halo */}
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#fde047" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#c9bcf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0" />
          </radialGradient>

          {/* Window & Lantern Light Glow */}
          <radialGradient id="amberLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="1" />
            <stop offset="35%" stopColor="#fde047" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
          </radialGradient>

          {/* Starlight Beacon Glow */}
          <radialGradient id="cyanLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#7dd3fc" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. SKY BASE */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#skyGrad)" />

        {/* Sky Pixel Dithering Rows (Subtle retro CRT / dithering horizon) */}
        <g fill="#070a1a" opacity="0.4">
          {Array.from({ length: 15 }).map((_, i) => (
            <rect key={i} x="0" y={i * 6} width="1440" height="2" />
          ))}
        </g>

        {/* 2. THE CELESTIAL CONSTELLATIONS & STARS */}
        {/* Constellation A: Cassiopeia (Upper Center) */}
        <g opacity="0.65">
          <polyline
            points="580,70 615,85 640,65 675,95 710,80"
            fill="none"
            stroke="#9d8ec7"
            strokeWidth="1"
            strokeDasharray="2,3"
          />
          {[[580,70],[615,85],[640,65],[675,95],[710,80]].map(([sx, sy], idx) => (
            <g key={`cass-${idx}`} transform={`translate(${sx},${sy})`}>
              <rect x="-1" y="-3" width="2" height="6" fill="#fef08a" />
              <rect x="-3" y="-1" width="6" height="2" fill="#fef08a" />
              <rect x="-1" y="-1" width="2" height="2" fill="#ffffff" />
            </g>
          ))}
        </g>

        {/* Constellation B: Ursa Minor / Little Dipper (Upper Left-Center) */}
        <g opacity="0.55">
          <polyline
            points="310,90 350,110 390,120 430,125 435,155 475,160 470,130 430,125"
            fill="none"
            stroke="#736b9c"
            strokeWidth="1"
            strokeDasharray="2,3"
          />
          {[[310,90],[350,110],[390,120],[430,125],[435,155],[475,160],[470,130]].map(([sx, sy], idx) => (
            <g key={`ursa-${idx}`} transform={`translate(${sx},${sy})`}>
              <rect x="-1" y="-2" width="2" height="4" fill="#fde047" />
              <rect x="-2" y="-1" width="4" height="2" fill="#fde047" />
              <rect x="-1" y="-1" width="2" height="2" fill="#ffffff" />
            </g>
          ))}
        </g>

        {/* Constellation C: The Dream Harp / Lyra (Near Moon) */}
        <g opacity="0.6">
          <polygon
            points="990,100 1025,120 1020,160 985,155"
            fill="none"
            stroke="#c9bcf6"
            strokeWidth="1"
            strokeDasharray="2,3"
          />
          <line x1="990" y1="100" x2="1040" y2="90" stroke="#c9bcf6" strokeWidth="1" strokeDasharray="2,3" />
          {[[990,100],[1025,120],[1020,160],[985,155],[1040,90]].map(([sx, sy], idx) => (
            <g key={`lyra-${idx}`} transform={`translate(${sx},${sy})`}>
              <rect x="-1" y="-3" width="2" height="6" fill="#fef08a" />
              <rect x="-3" y="-1" width="6" height="2" fill="#fef08a" />
            </g>
          ))}
        </g>

        {/* Scattered 2D Pixel Stars (Crosses, Diamonds, and Dots) */}
        {/* Diamond Star Class 1 - Twinkling Slow */}
        {[
          [180, 75], [260, 140], [420, 60], [510, 180], [780, 110],
          [860, 60], [1280, 95], [1360, 170], [920, 210], [1180, 240]
        ].map(([sx, sy], idx) => (
          <g
            key={`pstar1-${idx}`}
            transform={`translate(${sx},${sy})`}
            style={{
              animation: `dreamTwinkle ${3 + (idx % 4)}s ease-in-out infinite`,
              animationDelay: `${(idx * 0.7) % 3}s`
            }}
          >
            <rect x="-1" y="-4" width="2" height="8" fill="#fef08a" />
            <rect x="-4" y="-1" width="8" height="2" fill="#fef08a" />
            <rect x="-1" y="-1" width="2" height="2" fill="#ffffff" />
          </g>
        ))}

        {/* Diamond Star Class 2 - Twinkling Alternate Lavender/Pink */}
        {[
          [130, 190], [210, 260], [670, 140], [740, 70], [890, 130],
          [1060, 60], [1230, 130], [1310, 50], [1390, 220], [830, 180]
        ].map(([sx, sy], idx) => (
          <g
            key={`pstar2-${idx}`}
            transform={`translate(${sx},${sy})`}
            style={{
              animation: `dreamTwinkleAlt ${2.5 + (idx % 3)}s ease-in-out infinite`,
              animationDelay: `${(idx * 0.5) % 2.5}s`
            }}
          >
            <rect x="-1" y="-3" width="2" height="6" fill="#f4a6b8" />
            <rect x="-3" y="-1" width="6" height="2" fill="#f4a6b8" />
            <rect x="-1" y="-1" width="2" height="2" fill="#ffffff" />
          </g>
        ))}

        {/* Fine Single-Pixel Stardust Field */}
        {[
          [110, 120], [160, 40], [220, 90], [290, 60], [370, 170], [450, 110],
          [530, 45], [620, 125], [700, 180], [760, 90], [810, 140], [870, 90],
          [940, 40], [1010, 170], [1080, 115], [1150, 60], [1200, 180], [1260, 70],
          [1340, 120], [1400, 80], [1420, 160], [90, 240], [340, 210], [580, 200]
        ].map(([sx, sy], idx) => (
          <rect
            key={`dot-${idx}`}
            x={sx}
            y={sy}
            width={idx % 3 === 0 ? 2 : 1}
            height={idx % 3 === 0 ? 2 : 1}
            fill={idx % 2 === 0 ? "#fde047" : "#ffffff"}
            opacity={0.4 + ((idx % 5) * 0.12)}
          />
        ))}

        {/* 3. THE HANDCRAFTED 2D PIXEL-ART CRESCENT MOON */}
        <g transform="translate(1080, 60)">
          {/* Moon Soft Ambient Outer Glow */}
          <circle cx="90" cy="80" r="110" fill="url(#moonGlow)" />

          {/* Stepped Pixel Moon Silhouette */}
          {/* Row by row pixel clusters for genuine 16-bit crescent anatomy */}
          <g fill="#fef08a">
            {/* Upper horn */}
            <rect x="110" y="20" width="8" height="4" />
            <rect x="106" y="24" width="14" height="4" />
            <rect x="100" y="28" width="22" height="4" />
            <rect x="94" y="32" width="28" height="4" />
            <rect x="88" y="36" width="34" height="4" />
            {/* Mid crescent body */}
            <rect x="82" y="40" width="38" height="4" />
            <rect x="76" y="44" width="40" height="4" />
            <rect x="70" y="48" width="42" height="4" />
            <rect x="66" y="52" width="42" height="4" />
            <rect x="62" y="56" width="42" height="4" />
            <rect x="58" y="60" width="42" height="4" />
            <rect x="56" y="64" width="40" height="4" />
            <rect x="54" y="68" width="38" height="4" />
            <rect x="52" y="72" width="36" height="4" />
            <rect x="52" y="76" width="34" height="4" />
            <rect x="52" y="80" width="32" height="4" />
            <rect x="52" y="84" width="32" height="4" />
            <rect x="54" y="88" width="30" height="4" />
            <rect x="56" y="92" width="30" height="4" />
            <rect x="58" y="96" width="30" height="4" />
            <rect x="62" y="100" width="28" height="4" />
            <rect x="66" y="104" width="28" height="4" />
            <rect x="70" y="108" width="28" height="4" />
            <rect x="76" y="112" width="26" height="4" />
            <rect x="82" y="116" width="24" height="4" />
            <rect x="88" y="120" width="22" height="4" />
            <rect x="96" y="124" width="18" height="4" />
            <rect x="104" y="128" width="12" height="4" />
            <rect x="110" y="132" width="8" height="4" />
          </g>

          {/* Moon Inner Warm Cream Highlight Layer */}
          <g fill="#fffdfa">
            <rect x="102" y="28" width="14" height="4" />
            <rect x="96" y="32" width="18" height="4" />
            <rect x="90" y="36" width="22" height="4" />
            <rect x="84" y="40" width="24" height="4" />
            <rect x="78" y="44" width="26" height="4" />
            <rect x="72" y="48" width="26" height="4" />
            <rect x="68" y="52" width="26" height="4" />
            <rect x="64" y="56" width="26" height="4" />
            <rect x="60" y="60" width="24" height="4" />
            <rect x="58" y="64" width="24" height="4" />
            <rect x="56" y="68" width="22" height="4" />
            <rect x="54" y="72" width="20" height="4" />
            <rect x="54" y="76" width="18" height="4" />
            <rect x="54" y="80" width="16" height="4" />
            <rect x="54" y="84" width="16" height="4" />
            <rect x="56" y="88" width="16" height="4" />
            <rect x="58" y="92" width="16" height="4" />
            <rect x="62" y="96" width="16" height="4" />
            <rect x="66" y="100" width="16" height="4" />
            <rect x="72" y="104" width="16" height="4" />
            <rect x="80" y="108" width="14" height="4" />
            <rect x="88" y="112" width="12" height="4" />
            <rect x="96" y="116" width="10" height="4" />
            <rect x="104" y="120" width="6" height="4" />
          </g>

          {/* Moon Craters (Pixelated gentle indentations) */}
          <g fill="#f59e0b" opacity="0.45">
            {/* Crater 1 */}
            <rect x="76" y="58" width="8" height="4" />
            <rect x="74" y="62" width="12" height="4" />
            <rect x="76" y="66" width="8" height="4" />
            {/* Crater 2 */}
            <rect x="68" y="82" width="6" height="4" />
            <rect x="66" y="86" width="10" height="4" />
            <rect x="68" y="90" width="6" height="4" />
            {/* Crater 3 */}
            <rect x="86" y="100" width="6" height="3" />
            <rect x="84" y="103" width="8" height="3" />
            <rect x="86" y="106" width="6" height="3" />
          </g>

          {/* Golden Sparkles radiating near Moon horn */}
          <g transform="translate(126, 16)">
            <rect x="-1" y="-3" width="2" height="6" fill="#fde047" />
            <rect x="-3" y="-1" width="6" height="2" fill="#fde047" />
          </g>
          <g transform="translate(124, 142)">
            <rect x="-1" y="-3" width="2" height="6" fill="#fde047" />
            <rect x="-3" y="-1" width="6" height="2" fill="#fde047" />
          </g>
        </g>

        {/* 4. DISTANT MOUNTAIN & CLOUD SILHOUETTES (Background Depth) */}
        <g opacity="0.65" style={{ animation: 'cloudDriftSlow 120s ease-in-out infinite' }}>
          {/* Deep distant jagged mountain peaks / cloud ridges */}
          <path
            d="M 0 540 
               L 80 510 L 160 525 L 240 480 L 320 505 L 420 460 L 520 495 L 640 450 
               L 740 480 L 860 430 L 980 470 L 1100 420 L 1220 460 L 1340 440 L 1440 470
               L 1440 900 L 0 900 Z"
            fill="#121835"
          />
          {/* Subtle peak highlights */}
          <path
            d="M 238 480 L 242 480 L 255 510 L 245 510 Z
               M 418 460 L 422 460 L 435 490 L 425 490 Z
               M 638 450 L 642 450 L 655 480 L 645 480 Z
               M 858 430 L 862 430 L 875 460 L 865 460 Z
               M 1098 420 L 1102 420 L 1115 450 L 1105 450 Z"
            fill="#232d56"
          />
        </g>

        {/* 5. FLOATING ISLAND D: THE ANCIENT STARLIGHT ARCH (Upper Left-Center, x=310, y=260) */}
        <g transform="translate(310, 260)" opacity="0.85">
          {/* Island Rock Base with Pixel Stepping */}
          <polygon points="10,40 110,40 100,52 85,64 60,72 35,62 18,50" fill="#181f3d" />
          <polygon points="12,40 108,40 104,44 16,44" fill="#3b335a" />
          {/* Overgrown grass top */}
          <rect x="10" y="38" width="100" height="3" fill="#2d4a52" />
          <rect x="25" y="36" width="8" height="3" fill="#427878" />
          <rect x="65" y="36" width="12" height="3" fill="#427878" />
          {/* Hanging stardust roots */}
          <rect x="34" y="60" width="2" height="12" fill="#232b4f" />
          <rect x="34" y="72" width="2" height="4" fill="#7dd3fc" opacity="0.8" />
          <rect x="70" y="62" width="2" height="16" fill="#232b4f" />
          <rect x="70" y="78" width="2" height="4" fill="#fde047" opacity="0.8" />

          {/* Ancient Stone Archway */}
          <rect x="36" y="10" width="8" height="28" fill="#4a4268" />
          <rect x="76" y="10" width="8" height="28" fill="#4a4268" />
          <rect x="32" y="6" width="56" height="6" fill="#675d8a" />
          <rect x="40" y="12" width="40" height="4" fill="#352e4d" />
          {/* Suspended Brass Lantern hanging in arch */}
          <line x1="60" y1="12" x2="60" y2="20" stroke="#ca8a04" strokeWidth="1" />
          <rect x="57" y="20" width="6" height="7" fill="#ca8a04" />
          <circle cx="60" cy="23" r="8" fill="url(#amberLight)" />
          <rect x="58" y="21" width="4" height="4" fill="#ffffff" />
        </g>

        {/* 6. FLOATING D-BOOK: THE GRIMOIRE OF DREAMS (x=730, y=210) */}
        <g
          transform="translate(730, 210)"
          style={{ animation: 'dreamFloatSlow 6s ease-in-out infinite' }}
        >
          {/* Cloudlet pedestal */}
          <ellipse cx="26" cy="24" rx="28" ry="8" fill="#262547" />
          <ellipse cx="26" cy="22" rx="22" ry="6" fill="#584c7a" opacity="0.7" />
          {/* Open Book Wings */}
          <polygon points="26,14 6,10 8,18 26,20" fill="#f4a6b8" />
          <polygon points="26,14 46,10 44,18 26,20" fill="#f4a6b8" />
          {/* Glowing Pages */}
          <polygon points="25,13 8,11 10,17 25,18" fill="#fffdfa" />
          <polygon points="27,13 44,11 42,17 27,18" fill="#fffdfa" />
          {/* Stardust Motes Rising from Book */}
          <circle cx="26" cy="8" r="2" fill="#fde047" opacity="0.9" />
          <rect x="18" y="2" width="2" height="2" fill="#c9bcf6" />
          <rect x="34" y="4" width="2" height="2" fill="#fde047" />
        </g>

        {/* 7. FLOATING ISLAND A: THE CELESTIAL OBSERVATORY TOWER (x=940, y=270) */}
        <g
          transform="translate(940, 270)"
          style={{ animation: 'dreamFloatGentle 14s ease-in-out infinite' }}
        >
          {/* Island Crags & Roots */}
          <polygon points="20,90 190,90 175,115 145,140 100,165 55,135 30,110" fill="#141a38" />
          <polygon points="25,90 185,90 178,98 30,98" fill="#28325e" />
          {/* Grassy Overcoat */}
          <rect x="20" y="87" width="170" height="5" fill="#1b4353" />
          <rect x="40" y="85" width="24" height="4" fill="#2e6f7e" />
          <rect x="120" y="85" width="30" height="4" fill="#2e6f7e" />
          {/* Dangling roots with luminescent droplets */}
          <rect x="65" y="130" width="2" height="20" fill="#1e2448" />
          <rect x="65" y="150" width="2" height="4" fill="#90e0ef" />
          <rect x="135" y="120" width="2" height="26" fill="#1e2448" />
          <rect x="135" y="146" width="2" height="4" fill="#fde047" />

          {/* MAIN OBSERVATORY TOWER */}
          {/* Stone Base & Tower Body */}
          <rect x="75" y="15" width="46" height="72" fill="#252445" />
          <rect x="73" y="15" width="50" height="4" fill="#3e3966" />
          <rect x="71" y="83" width="54" height="5" fill="#3e3966" />
          {/* Stone Brick Pattern Accents */}
          <g fill="#191830">
            <rect x="80" y="25" width="10" height="4" />
            <rect x="102" y="25" width="12" height="4" />
            <rect x="88" y="35" width="14" height="4" />
            <rect x="78" y="45" width="10" height="4" />
            <rect x="100" y="45" width="14" height="4" />
            <rect x="86" y="55" width="12" height="4" />
            <rect x="82" y="68" width="14" height="4" />
            <rect x="104" y="68" width="10" height="4" />
          </g>

          {/* Glowing Observation Window */}
          <g transform="translate(88, 48)">
            <rect x="-1" y="-1" width="18" height="22" fill="#18152b" />
            <rect x="0" y="0" width="16" height="20" fill="#fde047" />
            <rect x="2" y="2" width="12" height="16" fill="#ffffff" />
            {/* Window mullion cross */}
            <line x1="8" y1="0" x2="8" y2="20" stroke="#92400e" strokeWidth="1.5" />
            <line x1="0" y1="10" x2="16" y2="10" stroke="#92400e" strokeWidth="1.5" />
            {/* Soft Ambient Window Light Halo */}
            <circle cx="8" cy="10" r="22" fill="url(#amberLight)" />
          </g>

          {/* Brass Observatory Dome */}
          <ellipse cx="98" cy="15" rx="25" ry="16" fill="#c99738" />
          <ellipse cx="98" cy="12" rx="22" ry="12" fill="#e5b85c" />
          <rect x="73" y="12" width="50" height="4" fill="#854d0e" />
          {/* Telescope Slit */}
          <rect x="94" y="2" width="8" height="14" fill="#1c1917" />
          {/* Brass Telescope extending through slit pointed upward */}
          <g transform="translate(98, 8) rotate(-35)">
            <rect x="-3" y="-22" width="6" height="22" fill="#fde047" />
            <rect x="-4" y="-25" width="8" height="3" fill="#ca8a04" />
            <rect x="-2" y="-12" width="4" height="12" fill="#ca8a04" />
            {/* Telescope Lens Flare */}
            <circle cx="0" cy="-26" r="3" fill="#ffffff" />
          </g>

          {/* Little Satellite Spire & Walkway Bridge */}
          <rect x="140" y="50" width="18" height="38" fill="#1f1e38" />
          <polygon points="149,32 138,50 160,50" fill="#b45309" />
          <line x1="149" y1="26" x2="149" y2="32" stroke="#fde047" strokeWidth="1.5" />
          <circle cx="149" cy="25" r="2" fill="#fde047" />
          {/* Suspension Bridge */}
          <path d="M 121 72 Q 131 77 140 72" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
          <path d="M 121 68 Q 131 73 140 68" stroke="#ca8a04" strokeWidth="1" fill="none" />

          {/* Miniature Lantern on Observation Deck */}
          <rect x="48" y="74" width="3" height="14" fill="#ca8a04" />
          <rect x="46" y="70" width="7" height="6" fill="#fde047" />
          <circle cx="49" cy="73" r="12" fill="url(#amberLight)" />
        </g>

        {/* 8. FLOATING ISLAND B: PIP'S SLUMBER MEADOW & DREAM COTTAGE (Mid-Right, x=1060, y=470) */}
        <g
          transform="translate(1060, 470)"
          style={{ animation: 'dreamFloatSlow 9s ease-in-out infinite' }}
        >
          {/* Island Landmass Base (Large detailed earthen island) */}
          <polygon
            points="10,80 320,80 300,120 260,170 190,210 120,180 50,130 15,100"
            fill="#0f1530"
          />
          <polygon
            points="15,80 315,80 305,94 25,94"
            fill="#1e254e"
          />
          {/* Lush Midnight Meadow Top Layer */}
          <rect x="10" y="76" width="310" height="7" fill="#1b414f" />
          <rect x="30" y="72" width="60" height="6" fill="#2d6878" />
          <rect x="130" y="72" width="90" height="6" fill="#2d6878" />
          <rect x="250" y="72" width="55" height="6" fill="#2d6878" />

          {/* Dangling bioluminescent roots */}
          <rect x="75" y="125" width="2" height="34" fill="#1a2044" />
          <rect x="75" y="159" width="2" height="5" fill="#7dd3fc" />
          <rect x="150" y="170" width="2" height="28" fill="#1a2044" />
          <rect x="150" y="198" width="2" height="5" fill="#fde047" />
          <rect x="230" y="140" width="2" height="42" fill="#1a2044" />
          <rect x="230" y="182" width="2" height="5" fill="#a78bfa" />

          {/* THE DREAM COTTAGE */}
          {/* Main Stone & Timber House Body */}
          <rect x="80" y="24" width="76" height="54" fill="#fdfaf3" />
          <rect x="76" y="74" width="84" height="4" fill="#352e4d" />
          {/* Timber Framing Beams */}
          <rect x="80" y="24" width="5" height="52" fill="#452a38" />
          <rect x="151" y="24" width="5" height="52" fill="#452a38" />
          <rect x="80" y="48" width="76" height="4" fill="#452a38" />

          {/* Steep Pixel Roof with Indigo Shingles */}
          <polygon points="118,-10 60,26 176,26" fill="#2d2850" />
          <polygon points="118,-6 68,24 168,24" fill="#40386e" />
          {/* Roof Shingle Ridge Rows */}
          <line x1="78" y1="18" x2="158" y2="18" stroke="#5d5292" strokeWidth="2" />
          <line x1="90" y1="10" x2="146" y2="10" stroke="#5d5292" strokeWidth="2" />
          <line x1="104" y1="2" x2="132" y2="2" stroke="#5d5292" strokeWidth="2" />

          {/* Stone Chimney on Right of Roof */}
          <rect x="142" y="-14" width="14" height="30" fill="#38304f" />
          <rect x="140" y="-16" width="18" height="4" fill="#594d7a" />
          {/* Rising Pixel Smoke Puffs (animated) */}
          <g transform="translate(148, -24)">
            <circle
              cx="0"
              cy="0"
              r="3.5"
              fill="#c9bcf6"
              style={{ animation: 'chimneySmoke 4s ease-out infinite' }}
            />
            <circle
              cx="3"
              cy="-8"
              r="4.5"
              fill="#c9bcf6"
              style={{ animation: 'chimneySmoke 4s ease-out infinite', animationDelay: '1.3s' }}
            />
            <circle
              cx="7"
              cy="-16"
              r="6"
              fill="#c9bcf6"
              style={{ animation: 'chimneySmoke 4s ease-out infinite', animationDelay: '2.6s' }}
            />
          </g>

          {/* Front Door */}
          <rect x="92" y="52" width="18" height="24" fill="#6d3a4b" />
          <rect x="94" y="54" width="14" height="20" fill="#4a2533" />
          <circle cx="103" cy="64" r="1.5" fill="#fde047" />

          {/* Ground Floor Glowing Window (Left) */}
          <g transform="translate(122, 54)">
            <rect x="0" y="0" width="18" height="16" fill="#fde047" />
            <rect x="2" y="2" width="14" height="12" fill="#ffffff" />
            <line x1="9" y1="0" x2="9" y2="16" stroke="#78350f" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="18" y2="8" stroke="#78350f" strokeWidth="1.5" />
            <circle cx="9" cy="8" r="16" fill="url(#amberLight)" />
          </g>

          {/* Attic Round Window */}
          <circle cx="118" cy="14" r="6" fill="#fde047" />
          <circle cx="118" cy="14" r="4" fill="#ffffff" />
          <circle cx="118" cy="14" r="10" fill="url(#amberLight)" />

          {/* Porch Lantern */}
          <line x1="86" y1="46" x2="86" y2="52" stroke="#ca8a04" strokeWidth="1" />
          <rect x="84" y="52" width="5" height="6" fill="#fde047" />
          <circle cx="86" cy="55" r="10" fill="url(#amberLight)" />

          {/* WEEPING SILVER WILLOW TREE (Beside the Cottage) */}
          <g transform="translate(200, 10)">
            {/* Twisted Trunk */}
            <path
              d="M 28 68 Q 24 45 32 30 Q 38 18 42 12 Q 35 25 32 45 Q 36 58 38 68 Z"
              fill="#261c33"
            />
            {/* Drooping Willow Canopy & Lavender Foliage Clusters */}
            {/* Layer 1: Dark Indigo under-canopy */}
            <ellipse cx="44" cy="16" rx="26" ry="14" fill="#32284c" />
            <ellipse cx="28" cy="24" rx="18" ry="12" fill="#32284c" />
            <ellipse cx="60" cy="24" rx="18" ry="12" fill="#32284c" />
            {/* Layer 2: Mid Lavender leaf puffs */}
            <ellipse cx="44" cy="12" rx="22" ry="10" fill="#67568c" />
            <ellipse cx="26" cy="18" rx="15" ry="9" fill="#67568c" />
            <ellipse cx="62" cy="18" rx="15" ry="9" fill="#67568c" />
            {/* Layer 3: Soft Pale Lilac highlight tips */}
            <ellipse cx="44" cy="8" rx="16" ry="6" fill="#9d88c4" />
            {/* Drooping Vine Tendrils */}
            {[
              [20, 26, 28], [28, 30, 36], [38, 28, 42],
              [48, 28, 40], [58, 28, 35], [68, 24, 26]
            ].map(([vx, vy, len], vidx) => (
              <g key={`tendril-${vidx}`}>
                <line x1={vx} y1={vy} x2={vx} y2={vy + len} stroke="#735f99" strokeWidth="1.5" strokeDasharray="3,2" />
                <rect x={vx - 1} y={vy + len} width="2" height="3" fill="#c9bcf6" />
              </g>
            ))}
            {/* Tiny Firefly dancing in the Willow */}
            <circle cx="36" cy="38" r="2.5" fill="#fde047" opacity="0.9" />
          </g>

          {/* Garden Fence & Glowing Mushrooms */}
          <g transform="translate(35, 62)">
            {/* Picket Fence */}
            <rect x="0" y="4" width="35" height="2" fill="#4d3a46" />
            <rect x="0" y="9" width="35" height="2" fill="#4d3a46" />
            {[2, 10, 18, 26, 34].map((px) => (
              <polygon key={`picket-${px}`} points={`${px},0 ${px + 2},-3 ${px + 4},0 ${px + 4},14 ${px},14`} fill="#6b5362" />
            ))}
            {/* Night-Blooming Bioluminescent Mushrooms */}
            <g transform="translate(42, 6)">
              <rect x="2" y="5" width="2" height="5" fill="#fffdfa" />
              <ellipse cx="3" cy="4" rx="4" ry="2.5" fill="#4ade80" />
              <circle cx="3" cy="4" r="6" fill="#4ade80" opacity="0.3" />
            </g>
            <g transform="translate(52, 8)">
              <rect x="2" y="4" width="2" height="4" fill="#fffdfa" />
              <ellipse cx="3" cy="3" rx="3.5" ry="2" fill="#90e0ef" />
              <circle cx="3" cy="3" r="5" fill="#90e0ef" opacity="0.3" />
            </g>
          </g>
        </g>

        {/* 9. FLOATING ISLAND C: THE CLOUD WIND-VANE ISLET (Center-Left, x=530, y=560) */}
        <g
          transform="translate(530, 560)"
          style={{ animation: 'dreamFloatSlow 11s ease-in-out infinite', animationDelay: '1.5s' }}
        >
          {/* Islet Base */}
          <polygon points="10,40 130,40 115,62 80,78 45,66 18,50" fill="#141a38" />
          <polygon points="12,40 128,40 120,45 16,45" fill="#29335e" />
          <rect x="10" y="38" width="120" height="4" fill="#1c4554" />
          {/* Whimsical Dream Wind-Vane Post */}
          <rect x="68" y="8" width="4" height="30" fill="#ca8a04" />
          <polygon points="70,-4 58,8 82,8" fill="#b45309" />
          {/* Windmill Sails */}
          <g transform="translate(70, 8)">
            <line x1="-16" y1="-16" x2="16" y2="16" stroke="#fde047" strokeWidth="2" />
            <line x1="-16" y1="16" x2="16" y2="-16" stroke="#fde047" strokeWidth="2" />
            <rect x="-18" y="-18" width="8" height="6" fill="#fef08a" />
            <rect x="10" y="12" width="8" height="6" fill="#fef08a" />
            <rect x="-18" y="12" width="8" height="6" fill="#fef08a" />
            <rect x="10" y="-18" width="8" height="6" fill="#fef08a" />
            <circle cx="0" cy="0" r="3" fill="#ffffff" />
          </g>
          {/* Miniature Bench */}
          <rect x="30" y="32" width="16" height="2" fill="#584860" />
          <rect x="32" y="34" width="2" height="5" fill="#352e42" />
          <rect x="42" y="34" width="2" height="5" fill="#352e42" />
          {/* Cozy Lamp */}
          <line x1="95" y1="26" x2="95" y2="38" stroke="#ca8a04" strokeWidth="1.5" />
          <rect x="93" y="24" width="5" height="5" fill="#fde047" />
          <circle cx="95.5" cy="26.5" r="8" fill="url(#amberLight)" />
        </g>

        {/* 10. DRIFTING DREAM FIREFLIES (Ambient Light Motes) */}
        {[
          { cx: 880, cy: 380, dur: '6s', del: '0s', col: '#fde047' },
          { cx: 920, cy: 340, dur: '8s', del: '1.2s', col: '#90e0ef' },
          { cx: 1040, cy: 430, dur: '7s', del: '2.5s', col: '#fde047' },
          { cx: 1180, cy: 460, dur: '9s', del: '0.8s', col: '#f4a6b8' },
          { cx: 1250, cy: 520, dur: '7.5s', del: '3.1s', col: '#fde047' },
          { cx: 780, cy: 260, dur: '8.5s', del: '1.9s', col: '#90e0ef' },
          { cx: 620, cy: 530, dur: '7s', del: '0.4s', col: '#fde047' },
          { cx: 480, cy: 570, dur: '9.5s', del: '2.1s', col: '#fde047' },
          { cx: 360, cy: 240, dur: '8s', del: '3.6s', col: '#7dd3fc' },
          { cx: 220, cy: 380, dur: '10s', del: '1.5s', col: '#fde047' },
          { cx: 1010, cy: 240, dur: '6.5s', del: '2.8s', col: '#fde047' },
          { cx: 1330, cy: 430, dur: '8s', del: '0.5s', col: '#c9bcf6' }
        ].map((fly, idx) => (
          <g
            key={`firefly-${idx}`}
            transform={`translate(${fly.cx}, ${fly.cy})`}
            style={{
              animation: `fireflyDrift ${fly.dur} ease-in-out infinite`,
              animationDelay: fly.del
            }}
          >
            {/* Soft Ambient Firefly Glow */}
            <circle cx="0" cy="0" r="8" fill={fly.col} opacity="0.25" />
            {/* Crisp 2x2 Pixel Core */}
            <rect x="-1" y="-1" width="2" height="2" fill="#ffffff" />
            <rect x="-0.5" y="-0.5" width="1" height="1" fill={fly.col} />
          </g>
        ))}

        {/* 11. LAYERED CLOUD BANKS (Foreground & Midground Framing) */}
        {/* Midground Soft Violet Clouds */}
        <g opacity="0.75" style={{ animation: 'cloudDriftSlow 90s ease-in-out infinite' }}>
          <path
            d="M -40 680 
               Q 120 630 260 670 
               Q 400 620 540 660 
               Q 680 610 820 650 
               Q 960 610 1100 645 
               Q 1240 600 1380 640 
               Q 1480 620 1520 670
               L 1520 900 L -40 900 Z"
            fill="#1e1c3e"
          />
          <path
            d="M 60 660 Q 180 630 280 660 M 420 640 Q 520 610 620 640 M 820 635 Q 940 610 1060 635 M 1220 625 Q 1320 600 1420 630"
            stroke="#53467d"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Foreground Fluffy Dream Clouds (Framing bottom desktop rim) */}
        <g opacity="0.88">
          {/* Main cumulus billow puffs */}
          <ellipse cx="140" cy="840" rx="190" ry="75" fill="#151736" />
          <ellipse cx="360" cy="850" rx="180" ry="70" fill="#151736" />
          <ellipse cx="600" cy="845" rx="170" ry="65" fill="#151736" />
          <ellipse cx="820" cy="855" rx="180" ry="70" fill="#151736" />
          <ellipse cx="1060" cy="840" rx="190" ry="75" fill="#151736" />
          <ellipse cx="1300" cy="845" rx="200" ry="80" fill="#151736" />

          {/* Shaded secondary cloud rims (Pastel dusty pink and lavender edges) */}
          <ellipse cx="140" cy="835" rx="175" ry="68" fill="#20224a" />
          <ellipse cx="360" cy="845" rx="165" ry="64" fill="#20224a" />
          <ellipse cx="600" cy="840" rx="155" ry="58" fill="#20224a" />
          <ellipse cx="820" cy="850" rx="165" ry="64" fill="#20224a" />
          <ellipse cx="1060" cy="835" rx="175" ry="68" fill="#20224a" />
          <ellipse cx="1300" cy="840" rx="185" ry="72" fill="#20224a" />

          {/* Delicate Highlight Crest Lines */}
          <path
            d="M 30 815 Q 140 780 250 815 
               M 260 820 Q 360 790 460 820 
               M 510 820 Q 600 795 690 820 
               M 730 825 Q 820 795 910 825
               M 970 815 Q 1060 785 1150 815
               M 1200 815 Q 1300 780 1400 815"
            stroke="#c9bcf6"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
          />
          <path
            d="M 80 805 Q 140 785 200 805
               M 310 810 Q 360 795 410 810
               M 770 815 Q 820 800 870 815
               M 1010 805 Q 1060 790 1110 805
               M 1250 805 Q 1300 785 1350 805"
            stroke="#f4a6b8"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
        </g>
      </svg>
    </div>
  );
};
