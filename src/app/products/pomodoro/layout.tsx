import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pomodoro Device - Shilp Sahayak',
  description:
    'Dedicated offline Pomodoro timer device with physical controls and no app dependency.'
};

export default function PomodoroLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
