type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconPlane({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10.5 20.5 12 17l1.5 3.5M12 17V9.5M12 9.5 21 4l-1 3-8 7.5M12 9.5 3 4l1 3 8 7.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconRoute({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M7.2 7.2c2.6 1.8 3 3.8 3 5.3s.8 3.7 3.4 4.7M13.6 8.6c-.6-1.4-.2-2.9 1.2-3.9" />
    </svg>
  );
}

export function IconBriefcase({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.25" y="7.5" width="17.5" height="11.5" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.25 12.5h17.5" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.75 12h16.5M12 3.75c2.5 2.3 3.75 5.1 3.75 8.25S14.5 17.95 12 20.25M12 3.75C9.5 6.05 8.25 8.85 8.25 12S9.5 17.95 12 20.25" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6v6c0 4.2-3 7-7 8.5-4-1.5-7-4.3-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 19c8 0 12.5-4.5 12.5-13.5C9.5 5.5 5 10 5 18" />
      <path d="M6.5 18.5 15 10" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.75 14.3 9.6l6.2.5-4.7 4 1.5 6-5.3-3.3-5.3 3.3 1.5-6-4.7-4 6.2-.5Z" />
    </svg>
  );
}

export function IconDoor({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="3.25" width="14" height="17.5" rx="1.5" />
      <path d="M14.5 12h.01" />
    </svg>
  );
}

export function IconWave({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9c1.5 0 1.5 1.6 3 1.6S8.5 9 10 9s1.5 1.6 3 1.6S14.5 9 16 9s1.5 1.6 3 1.6" />
      <path d="M4 14.5c1.5 0 1.5 1.6 3 1.6s1.5-1.6 3-1.6 1.5 1.6 3 1.6 1.5-1.6 3-1.6 1.5 1.6 3 1.6" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12.5 3.5 6 13h5l-1 7.5L18 11h-5l-.5-7.5Z" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={1.6}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={1.6}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={1.6}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.75-6.06-6.75-11A6.75 6.75 0 0 1 12 3.25 6.75 6.75 0 0 1 18.75 10c0 4.94-6.75 11-6.75 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

export function IconCalendar({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M19.5 12h-15M10.5 6l-6 6 6 6" />
    </svg>
  );
}

export function IconPerson({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20c1-3.6 4-5.5 6.5-5.5s5.5 1.9 6.5 5.5" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2.5" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCarBadge({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 16.5v-2.8c0-.5.2-1 .55-1.35l1.7-1.7A2 2 0 0 1 7.66 10h8.68a2 2 0 0 1 1.41.65l1.7 1.7c.35.35.55.85.55 1.35v2.8" />
      <path d="M4 16.5h16v1.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17M4 16.5v1.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V17" />
      <circle cx="8" cy="16.3" r=".9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16.3" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={2}>
      <path d="M5 12.5 9.5 17 19 6.5" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg {...base} className={className} strokeWidth={2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.28a9.9 9.9 0 0 0 4.68 1.18h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm5.83 14.1c-.25.7-1.24 1.28-2.02 1.44-.54.11-1.24.2-3.6-.77-3.02-1.25-4.97-4.32-5.12-4.52-.15-.2-1.22-1.63-1.22-3.1 0-1.48.77-2.2 1.05-2.5.27-.3.6-.37.8-.37h.58c.19 0 .44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.31-.13.61.17.3.77 1.28 1.66 2.08 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.83 2.05.98.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  );
}

export function IconHeartBadge({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 19.5C7.5 16 4.5 13.2 4.5 9.9 4.5 7.6 6.3 6 8.4 6c1.2 0 2.4.6 3.1 1.6.7-1 1.9-1.6 3.1-1.6 2.1 0 3.9 1.6 3.9 3.9 0 3.3-3 6.1-7.5 9.6Z" />
    </svg>
  );
}
