import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"; // For placeholder loading state
import Link from 'next/link'; // Import Link
import { Badge } from "@/components/ui/badge"; // For score display
import { Clock, TrendingUp } from 'lucide-react'; // Icons

export default function DashboardPage() {
  // Placeholder for user data - in a real app, this would come from auth/state
  const userName = "Alex";

  // Placeholder for past sessions - replace with actual data later
  const pastSessions = [
    { id: 1, date: "2024-07-15", scenario: "Objection Handling: Price", score: 85, duration: "12 min" },
    { id: 2, date: "2024-07-10", scenario: "Closing Technique: Assumptive Close", score: 78, duration: "8 min" },
    { id: 3, date: "2024-07-05", scenario: "Discovery Call: SaaS Product", score: 92, duration: "15 min" },
  ];

  const isLoading = false; // Set to true to see skeleton loaders

  return (
    <main className="flex min-h-screen flex-col p-8 md:p-12 lg:p-16 bg-background text-foreground">
      <div className="w-full max-w-3xl mx-auto">
        {/* Past Sessions Section - Single Column List */}
        <section>
          <h1 className="text-3xl font-bold mb-8">Session History</h1>
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-1/4 mb-2" />
                    <Skeleton className="h-4 w-1/3" />
                  </CardContent>
                   <CardFooter>
                     <Skeleton className="h-8 w-24" />
                   </CardFooter>
                </Card>
              ))
            ) : pastSessions.length > 0 ? (
              pastSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-xl">{session.scenario}</CardTitle>
                    <CardDescription className="flex items-center text-xs pt-1">
                        <Clock className="h-3 w-3 mr-1.5" /> {session.date} - {session.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className="flex items-center gap-2">
                       <TrendingUp className="h-4 w-4 text-primary" />
                       <span className="text-sm font-medium">Score:</span>
                       <Badge variant={session.score >= 80 ? "default" : "secondary"}>{session.score}%</Badge>
                     </div>
                  </CardContent>
                  <CardFooter>
                     <Button variant="outline" size="sm" asChild>
                       <Link href={`/summary?session=${session.id}`}>View Summary</Link>
                     </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card className="text-center p-8">
                 <CardContent>
                   <p className="text-muted-foreground">No past sessions found.</p>
                   <Button variant="link" asChild className="mt-2">
                     <Link href="/scenario">Start your first training session!</Link>
                   </Button>
                 </CardContent>
               </Card>
            )}
          </div>
        </section>
      </div>
    </main>
  );
} 