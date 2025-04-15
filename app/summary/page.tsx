import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Rocket } from 'lucide-react'; // Icons for feedback and upgrade prompt
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs
import { Progress } from "@/components/ui/progress"; // Import Progress
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Placeholder transcript data (reuse structure from simulation if needed)
const transcript = [
  { sender: "AI", text: "Hi Alex, [...] What prompted your interest?", timestamp: "10:00 AM" },
  { sender: "User", text: "Yeah, we're exploring options [...].", timestamp: "10:01 AM" },
  { sender: "AI", text: "Okay, [...] tell me a bit more [...]?", timestamp: "10:01 AM" },
  { sender: "User", text: "Mainly worried about ransomware [...].", timestamp: "10:02 AM" },
  { sender: "AI", text: "Those are valid concerns. [...] open to a brief demo [...]?", timestamp: "10:03 AM" },
  { sender: "User", text: "Maybe. Let me check my calendar.", timestamp: "10:04 AM" },
  // ... add more messages if desired for summary
];

// Placeholder feedback data
const feedback = {
  score: 82,
  whatWentWell: [
    "Good rapport building at the start.",
    "Clearly identified customer pain points.",
    "Asked relevant clarifying questions.",
  ],
  whatToImprove: [
    "Could have presented the value proposition more strongly before asking for the demo.",
    "Missed an opportunity to handle the 'maybe' objection directly.",
  ],
};

export default function SummaryPage() {
  const scoreLabel = feedback.score >= 80 ? "Great job!" : feedback.score >= 60 ? "Good effort!" : "Keep practicing!";

  return (
    <main className="flex min-h-screen flex-col p-8 md:p-12 lg:p-24 bg-background text-foreground">
      <div className="w-full max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Session Summary</h1>

        {/* --- New Score & Progress Section --- */}
        <section className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-semibold text-center mb-4">Overall Performance</h2>
          <div className="flex flex-col items-center gap-3">
            <p className="text-6xl font-bold text-primary">{feedback.score}%</p>
            <Progress value={feedback.score} className="w-full max-w-xs h-3" />
            <p className="text-sm text-muted-foreground mt-1">{scoreLabel}</p>
          </div>
        </section>

        {/* --- New Feedback Tabs Section --- */}
        <section>
          <Tabs defaultValue="well" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="well">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" /> What Went Well
              </TabsTrigger>
              <TabsTrigger value="improve">
                 <XCircle className="h-4 w-4 mr-2 text-destructive" /> Areas for Improvement
              </TabsTrigger>
            </TabsList>
            <TabsContent value="well">
              <Card className="border-green-500/30 border">
                <CardContent className="p-4 md:p-6">
                  <ul className="list-none space-y-3 text-sm">
                    {feedback.whatWentWell.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="improve">
               <Card className="border-destructive/30 border">
                 <CardContent className="p-4 md:p-6">
                  <ul className="list-none space-y-3 text-sm">
                    {feedback.whatToImprove.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                         <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* --- Upgrade Prompt Section (Mockup) --- */}
        <section>
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/30 shadow-sm">
            <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Unlock Your Full Potential!</h3>
                  <p className="text-sm text-muted-foreground">Get unlimited practice sessions and advanced feedback with Pro.</p>
                </div>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto flex-shrink-0">
                <Link href="/pricing">Upgrade to Pro</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* --- Transcript Section (Remains mostly the same) --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Transcript</h2>
          <Card>
            <CardContent className="p-4 md:p-6 space-y-4 max-h-96 overflow-y-auto">
              {transcript.map((message, index) => (
                <div key={index} className={`text-sm ${message.sender === 'User' ? 'text-right' : 'text-left'}`}>
                  <span className={`font-semibold ${message.sender === 'User' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {message.sender}:
                  </span>
                  <span className="ml-2">{message.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
} 