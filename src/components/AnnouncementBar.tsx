'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const KICKSTARTER_URL = "https://www.kickstarter.com/projects/planetpetly/planetpetly-wall-mounted-multi-roll-poop-bag-dispenser?ref=profile_created&category_id=28";

export default function AnnouncementBar({ onDismiss }: { onDismiss?: () => void }) {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-[#2a7dc9] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-center gap-2 py-2 sm:py-2.5 text-center">
        <span className="font-semibold leading-tight text-center">
          <span className="text-[10px] sm:hidden">
            🚀 Live on Kickstarter —{' '}
            <a href={KICKSTARTER_URL} target="_blank" rel="noopener noreferrer" className="font-black underline underline-offset-2 hover:text-yellow-300 transition-colors">
              Back Us Now
            </a>
          </span>
          <span className="hidden sm:inline text-sm">
            🚀 Now Live on Kickstarter — Early Bird Offer Ends Soon →{' '}
            <a href={KICKSTARTER_URL} target="_blank" rel="noopener noreferrer" className="font-black underline underline-offset-2 hover:text-yellow-300 transition-colors">
              Back Us Now
            </a>
          </span>
        </span>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={13} />
      </button>
    </div>
  );
}
