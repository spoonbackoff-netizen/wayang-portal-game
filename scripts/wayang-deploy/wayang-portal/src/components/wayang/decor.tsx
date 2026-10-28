import * as React from "react";

/**
 * Decorative SVG assets inspired by Malaysian Wayang Kulit (shadow puppetry).
 * All silhouettes are stylized — designed to read as backlit perforated
 * leather (kulit) when placed against a warm background.
 */

type SvgProps = React.ComponentProps<"svg">;

/* ===== Puppet Silhouettes ===== */

/**
 * Warrior-noble puppet (reminiscent of Sri Rama).
 * Stylised profile with elaborate crown, single articulated arm.
 */
export function PuppetWarrior({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Crown / headpiece */}
      <path
        d="M60 8 L52 22 L40 18 L48 32 L36 36 L48 44 L42 58 L58 52 L60 70 L62 52 L78 58 L72 44 L84 36 L72 32 L80 18 L68 22 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Head (profile facing right) */}
      <path
        d="M60 60
           C70 58 78 64 80 74
           C82 82 78 90 72 94
           L74 100
           C76 104 74 108 70 108
           L66 110
           L62 100
           L58 100
           C54 100 50 96 50 88
           C50 78 52 68 60 60 Z"
        fill="currentColor"
      />
      {/* Long neck */}
      <path d="M58 96 L60 110 L62 110 L64 96 Z" fill="currentColor" />
      {/* Torso with sash */}
      <path
        d="M48 112
           C52 108 60 108 64 112
           L72 118
           C78 124 80 134 78 146
           L74 180
           L62 184
           L50 180
           L46 146
           C44 134 42 124 48 112 Z"
        fill="currentColor"
      />
      {/* Sash diagonal */}
      <path
        d="M50 116 L74 178 L70 180 L48 122 Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Lower robe (kain) */}
      <path
        d="M48 182
           L62 186
           L76 182
           L82 230
           L78 268
           L72 282
           L66 290
           L60 290
           L58 282
           L54 268
           L52 250
           L48 230 Z"
        fill="currentColor"
      />
      {/* Front leg */}
      <path
        d="M58 290
           L60 305
           L58 318
           L62 318
           L64 305
           L62 290 Z"
        fill="currentColor"
      />
      {/* Articulated upper arm (raised) */}
      <g stroke="currentColor" strokeWidth="3" fill="currentColor">
        <circle cx="48" cy="118" r="6" />
        <path d="M48 124 L34 156 L30 168 L36 170 L40 158 Z" />
        <circle cx="32" cy="170" r="5" />
        <path d="M32 174 L28 204 L34 206 L36 178 Z" />
        <circle cx="31" cy="206" r="4" />
        {/* Pointer finger */}
        <path d="M30 210 L26 224 L30 226 L33 212 Z" />
      </g>
      {/* Lower arm (hanging) */}
      <g stroke="currentColor" strokeWidth="3" fill="currentColor">
        <circle cx="74" cy="118" r="5" />
        <path d="M74 122 L84 152 L80 154 L72 124 Z" />
        <circle cx="82" cy="154" r="4" />
        <path d="M82 158 L88 188 L84 190 L78 160 Z" />
      </g>
      {/* Ornate perforations (karawang) — tiny circles that let the light through */}
      <g fill="oklch(0.13 0.018 35)" opacity="0.7">
        <circle cx="62" cy="135" r="1.5" />
        <circle cx="58" cy="145" r="1.5" />
        <circle cx="66" cy="148" r="1.5" />
        <circle cx="60" cy="158" r="1.5" />
        <circle cx="64" cy="170" r="1.5" />
        <circle cx="56" cy="200" r="1.5" />
        <circle cx="62" cy="210" r="1.5" />
        <circle cx="68" cy="220" r="1.5" />
        <circle cx="58" cy="240" r="1.5" />
        <circle cx="66" cy="250" r="1.5" />
        <circle cx="60" cy="265" r="1.5" />
      </g>
    </svg>
  );
}

/**
 * Dancing puppet with both arms raised — evokes a refined character
 * (Sita / Srikandi) mid-performance.
 */
export function PuppetDancer({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 140 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Headdress — flame-like */}
      <path
        d="M70 4
           L60 24 L48 20 L56 36 L42 40 L58 52 L52 64 L70 60 L88 64 L82 52 L98 40 L84 36 L92 20 L80 24 Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* Head facing forward */}
      <ellipse cx="70" cy="80" rx="14" ry="18" fill="currentColor" />
      {/* Long neck */}
      <path d="M66 96 L74 96 L74 110 L66 110 Z" fill="currentColor" />
      {/* Torso (narrow waist, broad chest) */}
      <path
        d="M58 112
           L82 112
           L88 124
           L84 156
           L78 168
           L62 168
           L56 156
           L52 124
           Z"
        fill="currentColor"
      />
      {/* Decorative chest plate */}
      <path
        d="M62 118 L78 118 L74 140 L66 140 Z"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Lower robe */}
      <path
        d="M56 170
           L84 170
           L92 224
           L88 270
           L82 290
           L72 300
           L68 300
           L58 290
           L52 270
           L48 224 Z"
        fill="currentColor"
      />
      {/* Left raised arm (viewer's left) */}
      <g fill="currentColor">
        <circle cx="56" cy="118" r="6" />
        <path d="M50 122 L24 96 L18 100 L44 130 Z" />
        <circle cx="22" cy="98" r="5" />
        <path d="M18 100 L4 80 L0 84 L14 104 Z" />
        <circle cx="6" cy="82" r="4" />
        {/* Hand fingers spread */}
        <path d="M2 80 L-4 70 L0 66 L4 78 Z" opacity="0.8" />
      </g>
      {/* Right raised arm */}
      <g fill="currentColor">
        <circle cx="84" cy="118" r="6" />
        <path d="M90 122 L116 96 L122 100 L96 130 Z" />
        <circle cx="118" cy="98" r="5" />
        <path d="M122 100 L136 80 L140 84 L126 104 Z" />
        <circle cx="134" cy="82" r="4" />
        <path d="M138 80 L144 70 L140 66 L136 78 Z" opacity="0.8" />
      </g>
      {/* Karawang perforations */}
      <g fill="oklch(0.13 0.018 35)" opacity="0.7">
        <circle cx="70" cy="130" r="1.6" />
        <circle cx="64" cy="146" r="1.6" />
        <circle cx="76" cy="146" r="1.6" />
        <circle cx="70" cy="160" r="1.6" />
        <circle cx="58" cy="200" r="1.6" />
        <circle cx="66" cy="210" r="1.6" />
        <circle cx="74" cy="210" r="1.6" />
        <circle cx="82" cy="200" r="1.6" />
        <circle cx="62" cy="240" r="1.6" />
        <circle cx="78" cy="240" r="1.6" />
        <circle cx="70" cy="260" r="1.6" />
      </g>
    </svg>
  );
}

/**
 * Clown-servant puppet (Pak Dogol / Wak Long style) — short, rounded,
 * playful. Provides visual contrast to the noble puppets.
 */
export function PuppetClown({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 110 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Simple round head */}
      <circle cx="55" cy="48" r="26" fill="currentColor" />
      {/* Topknot */}
      <circle cx="55" cy="18" r="6" fill="currentColor" />
      {/* Body — stout, round */}
      <path
        d="M32 76
           L78 76
           L84 100
           L86 160
           L80 210
           L74 240
           L66 258
           L58 270
           L52 270
           L44 258
           L38 240
           L32 210
           L26 160
           L28 100
           Z"
        fill="currentColor"
      />
      {/* Belly button perforation */}
      <circle cx="55" cy="140" r="3" fill="oklch(0.13 0.018 35)" opacity="0.6" />
      {/* Short arms */}
      <g fill="currentColor">
        <circle cx="30" cy="86" r="5" />
        <path d="M28 92 L18 120 L24 122 L32 96 Z" />
        <circle cx="22" cy="122" r="4" />
      </g>
      <g fill="currentColor">
        <circle cx="80" cy="86" r="5" />
        <path d="M82 92 L92 120 L86 122 L78 96 Z" />
        <circle cx="88" cy="122" r="4" />
      </g>
      {/* Stubby legs */}
      <path d="M44 270 L40 280 L46 282 L50 272 Z" fill="currentColor" />
      <path d="M60 272 L64 282 L70 280 L66 270 Z" fill="currentColor" />
      {/* Belly perforations */}
      <g fill="oklch(0.13 0.018 35)" opacity="0.7">
        <circle cx="48" cy="180" r="1.5" />
        <circle cx="62" cy="180" r="1.5" />
        <circle cx="55" cy="200" r="1.5" />
        <circle cx="50" cy="220" r="1.5" />
        <circle cx="60" cy="220" r="1.5" />
      </g>
    </svg>
  );
}

/* ===== Decorative Ornaments ===== */

/**
 * The Gunungan (mountain) — the keystone figure that opens and closes a
 * Wayang performance. Stylised leaf-and-flame silhouette.
 */
export function GununganMotif({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Outer flame outline */}
      <path
        d="M100 4
           C120 20 130 40 132 60
           L150 56
           C148 78 138 96 124 110
           L150 116
           C140 138 122 152 102 158
           L120 178
           C100 184 90 184 80 178
           L98 158
           C78 152 60 138 50 116
           L76 110
           C62 96 52 78 50 56
           L68 60
           C70 40 80 20 100 4 Z"
        fill="currentColor"
      />
      {/* Inner teardrop */}
      <path
        d="M100 36
           C112 56 116 80 112 110
           C108 130 100 150 100 168
           C100 150 92 130 88 110
           C84 80 88 56 100 36 Z"
        fill="oklch(0.13 0.018 35)"
        opacity="0.5"
      />
      {/* Twin serpents / tendrils at base */}
      <path
        d="M70 196
           C58 210 50 230 52 256
           L60 270
           L66 268
           L62 246
           C66 230 76 218 90 210 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M130 196
           C142 210 150 230 148 256
           L140 270
           L134 268
           L138 246
           C134 230 124 218 110 210 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Center jewel */}
      <circle cx="100" cy="78" r="6" fill="oklch(0.13 0.018 35)" opacity="0.65" />
    </svg>
  );
}

/**
 * Awan-awan (cloud) motif — used to fill negative space in traditional
 * woodcarving and batik. Stylised curling cloud.
 */
export function AwanMotif({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M10 50
           C10 30 30 20 50 28
           C58 12 80 8 100 22
           C112 12 134 14 142 30
           C162 26 184 36 188 54
           L188 64
           C188 70 182 72 178 70
           L160 64
           C156 66 152 66 148 64
           L130 66
           C124 70 116 70 110 66
           L88 66
           C82 70 74 70 68 66
           L48 64
           C42 68 32 68 26 64
           L18 68
           C12 70 8 66 10 60 Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M30 50 C30 42 38 38 44 44 M60 44 C60 36 70 34 74 42 M90 40 C90 32 100 30 104 38 M130 42 C130 34 140 32 144 40 M160 46 C160 40 168 38 172 44"
        stroke="oklch(0.13 0.018 35)"
        strokeWidth="1.5"
        opacity="0.5"
        fill="none"
      />
    </svg>
  );
}

/**
 * Bunga (flower) motif — six-petalled lotus-inspired rosette.
 * Used in corner ornaments and section dividers.
 */
export function BungaMotif({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="50"
            rx="8"
            ry="22"
            transform={`rotate(${angle} 50 50)`}
            opacity="0.85"
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="10" fill="oklch(0.13 0.018 35)" opacity="0.7" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

/**
 * Repeating border strip — for section dividers and frame edges.
 */
export function WayangBorder({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 480 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
      {...props}
    >
      {Array.from({ length: 16 }).map((_, i) => {
        const x = 8 + i * 30;
        return (
          <g key={i} fill="currentColor">
            <path
              d={`M${x} 12
                  C${x + 4} 4, ${x + 10} 4, ${x + 14} 12
                  C${x + 10} 20, ${x + 4} 20, ${x} 12 Z`}
              opacity="0.9"
            />
            <circle cx={x + 7} cy="12" r="2" fill="oklch(0.13 0.018 35)" opacity="0.6" />
          </g>
        );
      })}
      <line
        x1="0"
        y1="12"
        x2="480"
        y2="12"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

/**
 * Icon — a small stylised puppet figure for badges and labels.
 */
export function PuppetIcon({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16 3 L13 8 L9 7 L11 11 L7 12 L11 14 L9 18 L14 16 L16 22 L18 16 L23 18 L21 14 L25 12 L21 11 L23 7 L19 8 Z"
        fill="currentColor"
      />
      <path d="M12 18 L14 26 L16 30 L18 26 L20 18 Z" fill="currentColor" />
      <path d="M10 18 L6 22 L8 24 L11 20 Z" fill="currentColor" opacity="0.7" />
      <path d="M22 18 L26 22 L24 24 L21 20 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/**
 * Corner flourish — for card corners.
 */
export function CornerFlourish({ className, ...props }: SvgProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2 2 L2 24 C2 36 8 44 20 50 L30 56 L30 50 C20 44 14 38 14 24 L14 14 L24 14 C38 14 44 20 50 30 L56 30 L50 20 C44 8 36 2 24 2 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
