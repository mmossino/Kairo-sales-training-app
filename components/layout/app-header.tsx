'use client';

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, Settings } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const isLoggedIn = true;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo Placeholder */}
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
            <span className="font-bold">Kairo</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 justify-end md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[340px]">
              <SheetHeader className="mb-6">
                 <SheetTitle>
                   <Link href="/" className="font-bold" onClick={() => setIsSheetOpen(false)}>
                     Kairo
                   </Link>
                 </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Home
                </Link>
                {isLoggedIn && <Link
                  href="/dashboard"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsSheetOpen(false)}
                >
                  History
                </Link>}
                {isLoggedIn && <Link
                  href="/profile"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Profile
                </Link>}
                {!isLoggedIn && <Link
                  href="/pricing"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Pricing
                </Link>}
                <div className="pt-4 border-t border-border/40">
                  {isLoggedIn ? (
                    <Button variant="ghost" className="w-full justify-start text-lg font-medium text-muted-foreground" onClick={() => { setIsSheetOpen(false); }}>
                      <LogOut className="mr-2 h-5 w-5" /> Logout
                    </Button>
                  ) : (
                    <Link href="/auth"
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground pt-4 border-t border-border/40"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Login / Sign Up
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {isLoggedIn && (
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      History
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
              {!isLoggedIn && (
                 <NavigationMenuItem>
                   <Link href="/pricing" legacyBehavior passHref>
                     <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                       Pricing
                     </NavigationMenuLink>
                   </Link>
                 </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Auth Area */}
        <div className="hidden flex-initial items-center justify-end space-x-2 md:flex">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.png" alt="@username" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Alex Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      alex.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                   <Link href="/profile"><Settings className="mr-2 h-4 w-4" /> Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { }}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="secondary" size="sm" asChild>
              <Link href="/auth">Login</Link>
            </Button>
          )}
        </div>

      </div>
    </header>
  );
} 