interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false
}: CardProps) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden ${className}`}>

      <div className={noPadding ? '' : 'p-6'}>{children}</div>
    </div>);

}
