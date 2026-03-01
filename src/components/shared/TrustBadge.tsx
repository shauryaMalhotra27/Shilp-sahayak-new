'use client';

import { memo } from 'react';
import { ShieldCheck, WifiOff, MapPin } from 'lucide-react';
import { useAdminData } from '../../hooks/useAdminData';
type BadgeType = 'made-in-india' | 'privacy-first' | 'offline-only';
interface TrustBadgeProps {
  type: BadgeType;
  className?: string;
}
const badges = {
  'made-in-india': {
    icon: <MapPin className="w-4 h-4" />,
    text: 'Made in India',
    colors: 'bg-warning/10 text-warning border-warning/20'
  },
  'privacy-first': {
    icon: <ShieldCheck className="w-4 h-4" />,
    text: 'Privacy First',
    colors: 'bg-info/10 text-info border-info/20'
  },
  'offline-only': {
    icon: <WifiOff className="w-4 h-4" />,
    text: '100% Offline',
    colors: 'bg-primary/10 text-primary border-primary/20'
  }
};

function TrustBadgeComponent({ type, className = '' }: TrustBadgeProps) {
  const adminData = useAdminData();
  const badge = badges[type];
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.colors} ${className}`}>

      {badge.icon}
      <span>{adminData.global.trustBadges[type]?.text ?? badge.text}</span>
    </div>);

}

export const TrustBadge = memo(TrustBadgeComponent);
