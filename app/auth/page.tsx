'use client'; // Needed for state later

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link'; // Import Link

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>{isLogin ? 'Login' : 'Sign Up'}</CardTitle>
          <CardDescription>
            {isLogin ? 'Enter your credentials to access your account' : 'Create an account to start training'}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* Email Input */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          {/* Password Input */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          {/* Placeholder for additional fields if signing up, e.g., Confirm Password */}
          {!isLogin && (
             <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          )}
           {/* Submit Button - Link to /onboarding */}
           <Button type="submit" className="w-full" asChild>
             <Link href="/onboarding">{isLogin ? 'Login' : 'Sign Up'}</Link>
          </Button>
           {/* Placeholder Google Button */}
           <Button variant="outline" className="w-full">
             {/* Add Google Icon Here */}
            {isLogin ? 'Login with Google' : 'Sign Up with Google'}
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
           <Button variant="link" onClick={toggleForm}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
} 