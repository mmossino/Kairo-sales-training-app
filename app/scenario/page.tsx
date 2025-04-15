'use client'; // Needed for state if we add interaction later

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mic } from 'lucide-react'; // Mic icon
import Link from 'next/link'; // Import Link

export default function ScenarioInputPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-12 bg-background text-foreground">
      <div className="w-full max-w-3xl flex flex-col items-center gap-8">

        {/* AI Orb Placeholder */}
        <div className="relative h-32 w-32 md:h-40 md:w-40 mb-4">
          {/* Outer pulsing glow */}
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse blur-lg opacity-70"></div>
          {/* Inner gradient orb */}
          <div className="relative h-full w-full rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-[0_0_20px_3px_rgba(236,72,153,0.3)] flex items-center justify-center">
             {/* <Mic className="h-12 w-12 text-white/60" /> */}
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center">Describe Your Sales Scenario</h1>
        <p className="text-muted-foreground text-center max-w-xl">
          Tell the AI coach about the situation you want to practice. Be specific about the product, the customer, and your goals to get the best simulation.
        </p>

        <div className="w-full grid gap-4">
          <Label htmlFor="scenario-input" className="sr-only">Scenario Description</Label>
          <div className="relative">
            <Textarea
              id="scenario-input"
              placeholder="e.g., I need to call a prospect who downloaded our e-book about cloud security..."
              rows={6} // Slightly smaller row count
              className="pr-12"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Use microphone (feature not implemented)"
            >
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Button size="lg" asChild>
          <Link href="/simulation">Start Simulation</Link>
        </Button>
      </div>
    </main>
  );
} 