'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { LandingPageHeader } from './landing-header';
import { AppHeader } from './app-header';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const isOnboardingPage = pathname === '/onboarding';

  const HeaderComponent = () => {
    if (isLandingPage) return <LandingPageHeader />;
    if (isOnboardingPage) return null;
    return <AppHeader />;
  };

  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
} 