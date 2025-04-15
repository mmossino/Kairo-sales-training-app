'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Placeholder for Orb
const OrbPlaceholder = () => (
 <div className="relative h-20 w-20 mb-6"> { /* Slightly smaller Orb */ }
    <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse blur-lg opacity-70"></div>
    <div className="relative h-full w-full rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-md"></div>
  </div>
);

// Re-add Journey Steps definition
const journeySteps = [
  "Analyzing Role & Experience...",
  "Calibrating Challenge Responses...",
  "Identifying Key Skills...",
  "Optimizing Goal Trajectory...",
  "Finalizing Personalization..."
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // <-- Set back to 5

  // Add state for answers (optional for prototype, but good structure)
  const [answers, setAnswers] = useState({
    role: '',
    industry: '',
    experience: '',
    challenge: '',
    confidence: '',
    improveArea: '',
    goal: '',
    practiceFrequency: '',
    scenarioType: '',
  });

  // Re-add state for loader journey
  const [completedJourneyStepIndex, setCompletedJourneyStepIndex] = useState(-1);

  // Basic handler to update answers state
  const handleInputChange = (field: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  // Re-add correct nextStep logic
  const nextStep = () => {
      if (currentStep === 3) {
          setCompletedJourneyStepIndex(-1); // Reset journey on entering step 4
      }
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Re-add useEffect for loader animation
  useEffect(() => {
    if (currentStep === 4) {
      const timeouts: NodeJS.Timeout[] = [];
      journeySteps.forEach((_, index) => {
        timeouts.push(setTimeout(() => {
           setCompletedJourneyStepIndex(index);
        }, (index + 1) * 1200));
      });

      timeouts.push(setTimeout(() => {
        setCurrentStep(5);
      }, (journeySteps.length + 1) * 1200));

      return () => timeouts.forEach(clearTimeout);
    }
  }, [currentStep]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-background text-foreground">
      <div className="w-full max-w-xl space-y-6">

         {/* Orb at the top - Add conditional pulsing */}
         <div className={`flex justify-center ${currentStep === 4 ? 'animate-pulse-slow' : ''}`}>
            <OrbPlaceholder />
         </div>

        {/* Introduction Text (Only before step 1) */}
        {currentStep === 1 && (
             <div className="text-center mb-4 animate-in fade-in duration-500">
                <h1 className="text-2xl font-bold mb-2">Let&apos;s Personalize Kairo For You ✨</h1>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Answering these quick questions helps Kairo understand your needs and tailor the AI coaching experience.
                </p>
              </div>
        )}

         {/* Hide Progress Indicator during Loader Step */}
        {currentStep !== 4 && (
            <Progress value={(currentStep / totalSteps) * 100} className="w-full h-2 mb-4" />
        )}

        <form className="text-left px-4 py-6 flex flex-col justify-center">
          {/* Step 1: Your Role */}
          {currentStep === 1 && (
            <div className="animate-in fade-in duration-500 space-y-6">
              <h2 className="text-lg font-semibold text-center mb-6">Tell us about your role 🧑‍💼</h2>
              {/* Q1: Role */}
              <div className="space-y-2">
                  <Label>What is your current sales role? 🤔</Label>
                  <Select onValueChange={(value) => handleInputChange('role', value)} value={answers.role}>
                    <SelectTrigger><SelectValue placeholder="Select your role..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sdr">Sales Development Rep (SDR)</SelectItem>
                      <SelectItem value="ae">Account Executive (AE)</SelectItem>
                      <SelectItem value="manager">Sales Manager</SelectItem>
                      <SelectItem value="founder">Founder/Owner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
              {/* Q2: Industry */}
              <div className="space-y-2">
                 <Label>What industry are you in? 🏢</Label>
                 <Select onValueChange={(value) => handleInputChange('industry', value)} value={answers.industry}>
                    <SelectTrigger><SelectValue placeholder="Select industry..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">Software/SaaS</SelectItem>
                      <SelectItem value="agency">Agency/Services</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
              </div>
              {/* Q3: Experience */}
              <div className="space-y-2">
                 <Label>Years of sales experience? ⏳</Label>
                 <RadioGroup defaultValue={answers.experience} onValueChange={(value) => handleInputChange('experience', value)} className="flex flex-wrap gap-4 pt-1">
                    <div className="flex items-center space-x-2"><RadioGroupItem value="0-1" id="exp1" /><Label htmlFor="exp1">0-1</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="2-5" id="exp2" /><Label htmlFor="exp2">2-5</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="6-10" id="exp3" /><Label htmlFor="exp3">6-10</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="10+" id="exp4" /><Label htmlFor="exp4">10+</Label></div>
                 </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Your Challenges */}
          {currentStep === 2 && (
             <div className="animate-in fade-in duration-500 space-y-6">
                <h2 className="text-lg font-semibold text-center mb-6">What are your biggest challenges? 🤔</h2>
                 {/* Q4: Biggest Challenge */}
                 <div className="space-y-2">
                   <Label>What&apos;s your toughest sales hurdle right now? 🎯</Label>
                   <RadioGroup defaultValue={answers.challenge} onValueChange={(value) => handleInputChange('challenge', value)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                     <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="objections" id="ch1" /> Handling Objections</Label>
                     <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="closing" id="ch2" /> Closing Deals</Label>
                     <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="prospecting" id="ch3" /> Prospecting / Pipeline</Label>
                     <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="confidence" id="ch4" /> Confidence / Mindset</Label>
                   </RadioGroup>
                 </div>
                  {/* Q5: Confidence Level */}
                 <div className="space-y-2">
                    <Label>Current confidence level in sales calls? 💪</Label>
                    <RadioGroup defaultValue={answers.confidence} onValueChange={(value) => handleInputChange('confidence', value)} className="flex flex-wrap gap-4 pt-1">
                       <div className="flex items-center space-x-2"><RadioGroupItem value="low" id="conf1" /><Label htmlFor="conf1">Low</Label></div>
                       <div className="flex items-center space-x-2"><RadioGroupItem value="medium" id="conf2" /><Label htmlFor="conf2">Medium</Label></div>
                       <div className="flex items-center space-x-2"><RadioGroupItem value="high" id="conf3" /><Label htmlFor="conf3">High</Label></div>
                    </RadioGroup>
                 </div>
                 {/* Q6: Specific Area (Optional) */}
                 <div className="space-y-2">
                    <Label htmlFor="improveArea">Any specific skill you want Kairo to focus on? (Optional)✍️</Label>
                    <Input id="improveArea" placeholder="e.g., Handling price objections, asking for the close..." value={answers.improveArea} onChange={(e) => handleInputChange('improveArea', e.target.value)} />
                 </div>
             </div>
          )}

          {/* Step 3: Your Goals */}
          {currentStep === 3 && (
             <div className="animate-in fade-in duration-500 space-y-6">
               <h2 className="text-lg font-semibold text-center mb-6">What are your goals with Kairo? 🏆</h2>
                 {/* Q7: Primary Goal */}
                 <div className="space-y-2">
                    <Label>What&apos;s your main goal using Kairo? 🏁</Label>
                     <RadioGroup defaultValue={answers.goal} onValueChange={(value) => handleInputChange('goal', value)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                       <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="close_more" id="g1" /> Close More Deals</Label>
                       <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="handle_objections" id="g2" /> Handle Objections Better</Label>
                       <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="improve_confidence" id="g3" /> Improve Confidence</Label>
                       <Label className="border rounded-md p-3 flex items-center gap-2 [&:has([data-state=checked])]:border-primary"><RadioGroupItem value="prepare_meetings" id="g4" /> Prepare for Specific Meetings</Label>
                     </RadioGroup>
                 </div>
                 {/* Q8: Practice Frequency */}
                 <div className="space-y-2">
                    <Label>How often do you plan to practice? 🗓️</Label>
                    <RadioGroup defaultValue={answers.practiceFrequency} onValueChange={(value) => handleInputChange('practiceFrequency', value)} className="flex flex-wrap gap-4 pt-1">
                       <div className="flex items-center space-x-2"><RadioGroupItem value="daily" id="freq1" /><Label htmlFor="freq1">Daily</Label></div>
                       <div className="flex items-center space-x-2"><RadioGroupItem value="weekly" id="freq2" /><Label htmlFor="freq2">Few times a week</Label></div>
                       <div className="flex items-center space-x-2"><RadioGroupItem value="monthly" id="freq3" /><Label htmlFor="freq3">Occasionally</Label></div>
                    </RadioGroup>
                 </div>
                {/* Q9: Ideal Scenario */}
                 <div className="space-y-2">
                   <Label>Ideal type of scenario to practice first? 🗣️</Label>
                   <Select onValueChange={(value) => handleInputChange('scenarioType', value)} value={answers.scenarioType}>
                     <SelectTrigger><SelectValue placeholder="Select scenario type..." /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="cold_call">Cold Call</SelectItem>
                       <SelectItem value="discovery">Discovery Call</SelectItem>
                       <SelectItem value="demo">Demo/Presentation</SelectItem>
                       <SelectItem value="objection">Objection Handling</SelectItem>
                       <SelectItem value="closing">Closing</SelectItem>
                     </SelectContent>
                   </Select>
                </div>
             </div>
          )}

           {/* Step 4: Loader Journey */}
           {currentStep === 4 && (
             <div className="animate-in fade-in duration-500 space-y-4 w-full flex flex-col items-center text-center"> { /* Reduced vertical spacing slightly */ }
                {/* Orb is now handled outside this block */}
               <h2 className="text-lg font-semibold">Personalizing Kairo...</h2>
               {/* Add descriptive subtext */}
               <p className="text-sm text-muted-foreground px-4">Tailoring AI models based on your unique profile & goals.</p>

               <div className="space-y-3 pt-2 w-full max-w-sm mx-auto relative"> { /* Adjusted padding */ }
                 {journeySteps.map((step, index) => (
                   <div key={index} className="flex items-start gap-3 text-sm transition-opacity duration-500 ease-in-out relative pl-[1px]">
                     <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 flex-shrink-0 bg-background ${index <= completedJourneyStepIndex ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground text-muted-foreground'}`}>
                       {index <= completedJourneyStepIndex ? (
                         <Check className="h-3 w-3 animate-in fade-in zoom-in-50 duration-300" />
                       ) : (
                         <span className="text-xs font-mono">{index + 1}</span>
                       )}
                     </div>
                     <span className={`pt-0.5 ${index <= completedJourneyStepIndex ? 'text-foreground font-medium' : 'text-muted-foreground opacity-70'}`}>
                       {step}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           )}

           {/* Step 5: Offer */}
           {currentStep === 5 && (
             <div className="animate-in fade-in duration-500 space-y-4 w-full flex flex-col items-center text-center">
               <h1 className="text-2xl font-bold mb-2">Kairo is Ready For You!</h1>
               <p className="text-muted-foreground text-sm mb-4">Based on your answers, Kairo is configured for your personalized training.</p>
               <Card className="w-full bg-gradient-to-r from-primary/10 to-transparent border-primary/20 shadow-lg ring-1 ring-primary/30">
                  <CardContent className="p-6 space-y-5"> { /* Increased spacing slightly */ }
                     <h3 className="font-semibold text-center text-lg">Unlock Your Sales Potential: Activate Pro Trial</h3>
                     {/* Updated Feature List */}
                     <ul className="space-y-3 text-sm text-left pl-2"> 
                       <li className="flex items-start gap-3">
                         <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>
                         <span><strong className="font-medium text-foreground">AI Objection Handling:</strong> Get real-time, adaptive counter-arguments during simulations.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>
                         <span><strong className="font-medium text-foreground">Personalized Scenarios:</strong> Kairo generates unique role-plays based on *your* role, industry & goals.</span>
                       </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>
                          <span><strong className="font-medium text-foreground">Voice Tone & Confidence Analysis:</strong> Receive objective feedback on your vocal delivery and confidence cues.</span>
                       </li>
                       <li className="flex items-start gap-3">
                         <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"/>
                         <span><strong className="font-medium text-foreground">Predictive Performance Insights:</strong> AI identifies patterns and suggests focus areas *before* you hit roadblocks.</span>
                       </li>
                     </ul>
                     <p className="text-center text-xs text-muted-foreground pt-4 border-t border-border/20">$0 for 7 days, then $99/month. Cancel Anytime.</p>
                      <Button asChild size="lg" className="w-full mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold shadow-lg hover:shadow-pink-500/40 transition-all duration-300 ease-in-out hover:scale-105">
                         <Link href="/scenario">Activate Pro Trial & Start Training</Link>
                      </Button>
                  </CardContent>
                </Card>
                 <Button variant="link" size="sm" asChild className="mt-4 text-muted-foreground">
                   <Link href="/scenario">Maybe later (Continue with limited access)</Link>
                 </Button>
             </div>
           )}
        </form>

        {/* Re-add Correct Navigation Buttons Logic */}
        {currentStep !== 4 && (
            <div className={`flex ${currentStep === 5 ? 'justify-end' : 'justify-between'} items-center pt-4 border-t border-border/20`}>
              {/* Hide Back button on Step 5 */}
              {currentStep !== 5 && (
                  <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
              )}
              {/* Show Next only up to Step 3 */}
              {currentStep < totalSteps -1 && (
                <Button onClick={nextStep}>
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
        )}
      </div>
    </main>
  );
}