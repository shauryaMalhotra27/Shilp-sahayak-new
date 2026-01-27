import React from 'react';
import { ShieldCheck, WifiOff, MapPin } from 'lucide-react';
type BadgeType = 'made-in-india' | 'privacy-first' | 'offline-only';
interface TrustBadgeProps {
  type: BadgeType;
  className?: string;
}
export function TrustBadge({ type, className = '' }: TrustBadgeProps) {
  const badges = {
    'made-in-india': {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Made in India',
      colors: 'bg-orange-50 text-orange-700 border-orange-100'
    },
    'privacy-first': {
      icon: <ShieldCheck className="w-4 h-4" />,
      text: 'Privacy First',
      colors: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    'offline-only': {
      icon: <WifiOff className="w-4 h-4" />,
      text: '100% Offline',
      colors: 'bg-teal-50 text-teal-700 border-teal-100'
    }
  };
  const badge = badges[type];
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.colors} ${className}`}>

      {badge.icon}
      <span>{badge.text}</span>
    </div>);

}