import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mic } from 'lucide-react';
import Link from 'next/link';

// Placeholder chat messages
const messages = [
  { sender: "AI", text: "Hi Alex, thanks for taking the call. I saw you downloaded our e-book on cloud security. What prompted your interest?", timestamp: "10:00 AM" },
  { sender: "User", text: "Yeah, we're exploring options to improve our current setup. It feels a bit outdated.", timestamp: "10:01 AM" },
  { sender: "AI", text: "Okay, that makes sense. Many companies find their legacy systems struggle with modern security threats. Could you tell me a bit more about your specific concerns?", timestamp: "10:01 AM" },
  { sender: "User", text: "Mainly worried about ransomware and ensuring compliance with regulations like GDPR.", timestamp: "10:02 AM" },
  { sender: "AI", text: "Those are valid concerns. Our platform offers advanced threat detection and automated compliance reporting. Would you be open to a brief demo next week to see how it works?", timestamp: "10:03 AM" },
  { sender: "User", text: "Maybe. Let me check my calendar.", timestamp: "10:04 AM" },
];

export default function SimulationPage() {
  return (
    <main className="flex min-h-screen bg-background text-foreground">
      {/* Left Column - Ensure flex-col and h-screen */}
      <div className="flex flex-col w-full md:w-[65%] border-r border-border h-screen">
        {/* Context Section - No flex-1 */}
        <div className="p-4 md:p-6 border-b border-border bg-card shadow-sm flex-shrink-0">
          <h2 className="text-lg font-semibold mb-2">Current Scenario</h2>
          <div className="text-sm space-y-1">
            <p><span className="font-medium text-muted-foreground">Goal:</span> Book a Demo</p>
            <div>
              <span className="font-medium text-muted-foreground">Key Points:</span>
              <ul className="list-disc list-inside ml-1 text-muted-foreground">
                <li>Mention cost savings</li>
                <li>Highlight integration ease</li>
                <li>Address security concerns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transcript Area - flex-1 and overflow-y-auto */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-muted/10">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-end gap-3 ${message.sender === 'User' ? 'justify-end' : 'justify-start'}`}
            >
              {/* AI Avatar */}
              {message.sender === 'AI' && (
                <Avatar className="h-8 w-8 hidden sm:flex flex-shrink-0">
                  <AvatarImage src="/placeholder-ai.png" alt="AI Avatar" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}

              {/* Message Bubble */}
              <Card
                className={`max-w-xs md:max-w-md lg:max-w-lg shadow-sm rounded-lg ${message.sender === 'User'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
                  }`}
              >
                <CardContent className="p-3">
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-right mt-1 opacity-70">{message.timestamp}</p>
                </CardContent>
              </Card>

              {/* User Avatar */}
              {message.sender === 'User' && (
                <Avatar className="h-8 w-8 hidden sm:flex flex-shrink-0">
                  <AvatarImage src="/placeholder-user.png" alt="User Avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>

        {/* Controls Footer - No flex-1, ensure mt-auto (already there but check parent) */}
        <footer className="p-4 border-t border-border mt-auto bg-card shadow-sm flex-shrink-0">
          <div className="flex items-center justify-center gap-4">
            {/* Microphone Button Placeholder */}
            <Button
              variant="outline" // Or ghost, choose appearance
              size="lg" // Large size for easy clicking
              aria-label="Start/Stop Listening (feature not implemented)"
              className="rounded-full p-3" // Circular appearance
            >
              <Mic className="h-6 w-6" />
            </Button>

            {/* End Session Button */}
            <Button variant="destructive" size="lg" asChild>
              <Link href="/summary">End Session</Link>
            </Button>
          </div>
        </footer>
      </div>

      {/* Right Column (AI Orb) */}
      <div className="hidden md:flex w-[35%] flex-col items-center justify-center p-6 bg-gradient-to-br from-muted/10 via-background to-muted/30">
        {/* Enhanced AI Orb */}
        <div className="relative h-48 w-48 lg:h-56 lg:w-56">
          {/* Outer pulsing glow */}
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-pulse [animation-duration:1.5s] blur-2xl opacity-80"></div>
          {/* Inner gradient orb with enhanced shadow & pulse */}
          <div className="relative h-full w-full rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-[0_0_50px_8px_rgba(236,72,153,0.5)] animate-pulse [animation-duration:2s] flex items-center justify-center">
          </div>
        </div>
        <p className="mt-8 text-lg font-medium text-muted-foreground">AI Coach</p>
      </div>
    </main>
  );
} 