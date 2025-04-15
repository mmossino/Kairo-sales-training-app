import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { TextSearch, Mic, Sparkles, Rocket, BrainCircuit, LineChart } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-12 pb-16 px-4 md:px-12 bg-background text-foreground">
      <section className="w-full max-w-4xl items-center justify-center text-center flex flex-col gap-8 mb-24 md:mb-32">
        <div className="relative h-56 w-56 md:h-72 md:w-72 mb-4">
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-pulse [animation-duration:1.5s] blur-2xl opacity-80"></div>
          <div className="relative h-full w-full rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-[0_0_60px_10px_rgba(236,72,153,0.6)] animate-pulse [animation-duration:2s] flex items-center justify-center">
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Train Your Sales Instincts with Sentient AI
        </h1>
        <p className="text-lg leading-8 text-muted-foreground max-w-2xl">
          Engage in hyper-realistic voice scenarios against an AI that learns, adapts, and pushes you to close like never before.
        </p>
        <div className="relative inline-block">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-lg blur-lg opacity-75 animate-pulse [animation-duration:3s] group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Button 
            size="lg" 
            asChild 
            className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500/50 focus:ring-offset-background"
          >
            <Link href="/auth">Start Your AI Training</Link>
          </Button>
        </div>
      </section>

      <section id="how-it-works" className="w-full max-w-5xl mb-24 md:mb-32 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Enter the Simulation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full mb-2"><TextSearch className="h-8 w-8 text-primary" /></div>
            <h3 className="text-xl font-semibold">1. Define Your Challenge</h3>
            <p className="text-muted-foreground text-sm">Outline any sales scenario – from cold calls to complex negotiations.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full mb-2"><Mic className="h-8 w-8 text-primary" /></div>
            <h3 className="text-xl font-semibold">2. Converse with AI</h3>
            <p className="text-muted-foreground text-sm">Engage in real-time voice dialogue. The AI listens, responds, and reacts like a true prospect.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full mb-2"><Sparkles className="h-8 w-8 text-primary" /></div>
            <h3 className="text-xl font-semibold">3. Receive Instant Analysis</h3>
            <p className="text-muted-foreground text-sm">Get objective, AI-driven feedback on your pitch, pacing, and critical decision points.</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="w-full max-w-5xl mb-24 md:mb-32 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Beyond Human Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full mb-2"><BrainCircuit className="h-8 w-8 text-primary" /></div>
            <h3 className="text-xl font-semibold">Hyper-Realistic Practice</h3>
            <p className="text-muted-foreground text-sm">Engage with AI that mirrors real customer objections, questions, and personalities. Adapt and learn on the fly.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full mb-2"><LineChart className="h-8 w-8 text-primary" /></div>
            <h3 className="text-xl font-semibold">Actionable AI Insights</h3>
            <p className="text-muted-foreground text-sm">Receive instant, granular feedback on tone, pacing, objection handling, and closing effectiveness after every session.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="w-full max-w-3xl mb-24 md:mb-32 scroll-mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Forge Your Elite Sales Skills</h2>
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 shadow-lg">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Rocket className="h-10 w-10 text-primary flex-shrink-0 hidden sm:block" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Start Your Free Trial Today!</h3>
                <p className="text-muted-foreground">
                  Step into the future of sales training. Activate your free trial – no strings attached.
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto flex-shrink-0 shadow-md">
              <Link href="/auth">Start Your AI Training</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="w-full max-w-5xl border-t border-border/40 pt-6 mt-16">
        <div className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kairo AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
