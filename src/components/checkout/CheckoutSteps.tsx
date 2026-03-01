import { Check } from 'lucide-react';
interface CheckoutStepsProps {
  currentStep: number;
}
const steps = [
{
  id: 1,
  name: 'Cart'
},
{
  id: 2,
  name: 'Shipping'
},
{
  id: 3,
  name: 'Payment'
},
{
  id: 4,
  name: 'Confirm'
}];

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-muted -z-10" />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2 bg-card px-2">

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${isCompleted ? 'bg-primary text-white' : isCurrent ? 'bg-foreground text-background ring-4 ring-muted' : 'bg-muted text-muted-foreground'}`}>

                {isCompleted ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span
                className={`text-xs font-medium ${isCurrent ? 'text-foreground' : 'text-muted-foreground'}`}>

                {step.name}
              </span>
            </div>);

        })}
      </div>
    </div>);

}
