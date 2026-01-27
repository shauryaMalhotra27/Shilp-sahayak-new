import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  status: 'Available' | 'Pre-Order' | 'Coming Soon';
  imageColor: string;
  accentColor: string;
  link: string;
}
export function ProductCard({
  name,
  description,
  price,
  status,
  imageColor,
  accentColor,
  link
}: ProductCardProps) {
  const statusColors = {
    Available: 'bg-green-50 text-green-700 border-green-200',
    'Pre-Order': 'bg-blue-50 text-blue-700 border-blue-200',
    'Coming Soon': 'bg-slate-100 text-slate-600 border-slate-200'
  };
  return (
    <Card
      noPadding
      className="flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1 duration-300">

      <div
        className={`aspect-video ${imageColor} relative flex items-center justify-center p-8 group overflow-hidden`}>

        {/* Abstract Product Representation */}
        <div
          className={`w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center shadow-xl transition-transform group-hover:scale-105 duration-500`}>

          <div
            className={`w-20 h-8 ${accentColor} rounded-full blur-md opacity-60`} />

        </div>

        <div
          className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded border ${statusColors[status]}`}>

          {status}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <span className="text-lg font-bold text-slate-900">{price}</span>
          <Link to={link}>
            <Button
              size="sm"
              variant={status === 'Coming Soon' ? 'outline' : 'primary'}
              className="group">

              {status === 'Coming Soon' ? 'Waitlist' : 'View Details'}
              {status !== 'Coming Soon' &&
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              }
            </Button>
          </Link>
        </div>
      </div>
    </Card>);

}