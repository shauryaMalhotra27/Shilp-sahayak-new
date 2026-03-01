import { WifiOff, CloudOff, MicOff, ShieldCheck } from 'lucide-react';
export function PrivacySection() {
  return (
    <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-6 h-6 text-primary-light" />
          <span className="text-primary-light font-bold tracking-wide uppercase text-sm">
            Privacy Guarantee
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          What happens in your room,
          <br />
          stays in your room.
        </h2>

        <p className="text-background/75 text-lg mb-10 max-w-2xl">
          Most smart devices are data vacuums. Micro Bot is different. It has no
          Wi-Fi chip, no cloud connection, and no storage for recordings. It is
          physically impossible for us to spy on you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-danger">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="font-bold">No Wi-Fi</h3>
            <p className="text-sm text-background/75">
              Zero internet connectivity. Updates happen via USB cable only.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-danger">
              <CloudOff className="w-6 h-6" />
            </div>
            <h3 className="font-bold">No Cloud</h3>
            <p className="text-sm text-background/75">
              All processing happens on the device's local processor.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-danger">
              <MicOff className="w-6 h-6" />
            </div>
            <h3 className="font-bold">No Recording</h3>
            <p className="text-sm text-background/75">
              Microphone data is processed in real-time and instantly discarded.
            </p>
          </div>
        </div>
      </div>
    </div>);

}
