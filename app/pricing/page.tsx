import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from 'lucide-react'; // Icon for feature list
import Link from 'next/link'; // Import Link

export default function PricingPage() {
  const features = [
    "Realistic AI Role-Playing",
    "Instant Performance Feedback",
    "Unlimited Training Sessions",
    "Progress Tracking & Summaries",
    "Access to All Scenarios",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-background text-foreground">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Pro Tier</CardTitle>
          <CardDescription>Unlock your full sales potential.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="text-center">
            <span className="text-5xl font-bold">$99</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-3 w-full px-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full" asChild>
            <Link href="/auth">Subscribe & Start Training</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
} 