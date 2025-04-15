'use client'; // Can be client or server, client if state needed later

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingPageHeader() {
  // Simple scroll handler (can be improved)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Kairo</span>
          </Link>
        </div>

        {/* Desktop Scroll Links */}
        <div className="hidden flex-1 justify-center space-x-6 md:flex">
           <Button variant="link" className="text-foreground" onClick={() => scrollToSection('how-it-works')}>How it Works</Button>
           <Button variant="link" className="text-foreground" onClick={() => scrollToSection('benefits')}>Benefits</Button>
           <Button variant="link" className="text-foreground" onClick={() => scrollToSection('pricing')}>Pricing</Button>
        </div>

        {/* Login Button */}
        <div className="hidden flex-initial items-center justify-end space-x-2 md:flex">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>

         {/* Basic Mobile Handling (Could use Sheet later if complex) */}
         <div className="flex flex-1 justify-end md:hidden">
            <Button variant="secondary" size="sm" asChild>
               <Link href="/auth">Login</Link>
            </Button>
         </div>

      </div>
    </header>
  );
} 