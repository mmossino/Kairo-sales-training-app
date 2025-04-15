# Project Plan: Sales Training Web App Frontend Prototype

## Assistant Capabilities

*   Can access GitHub repositories (read/write).
*   Can perform web searches for up-to-date information.
*   Can execute terminal commands (with approval).
*   Will update this plan with progress checks (✅).

## Prompt

Build a complete frontend prototype of a sales training web app using the following stack and design system:

- Framework: Next.js (latest version)
- Styling: Tailwind CSS 4.0
- UI Components: ShadCN/UI (standard theme, dark mode only)
- Backend (for future use): Supabase
- Hosting target: Vercel

Focus on building a **responsive, interactive UI/UX flow** with no backend logic. All pages should use ShadCN components only and follow modern, clean SaaS design principles in **dark mode**.

### ✨ Pages & Features

1.  **Landing Page**
    *   Hero section: headline, subheading, CTA button ("Start Training")
    *   3 cards or feature highlights using `Card` from ShadCN
    *   Mock hero image or animation
    *   Dark layout, consistent spacing

2.  **Signup / Login Page**
    *   `Card` with form for email + password
    *   Google auth button (visual only)
    *   Toggle between login / signup inside card
    *   Use `Input`, `Label`, `Button` from ShadCN

3.  **Pricing Page**
    *   Single pricing tier: $99/month
    *   Feature list using `List` or `Card`
    *   CTA button: "Subscribe & Start Training" (no Stripe logic yet)

4.  **Dashboard Page**
    *   Welcome message ("Welcome, [User]")
    *   CTA: "Start New Training"
    *   Section showing past sessions (use `Skeleton` or static placeholders)
    *   Consistent layout using `Grid` or `Flex` from ShadCN

5.  **Scenario Input Page**
    *   Chat-style UI using `Textarea` or `Input` + mic icon (UI only)
    *   Prompt user to type or speak a scenario
    *   Button: "Start Simulation"

6.  **Sales Simulation Page**
    *   Simulated AI conversation
    *   Two-column chat layout (AI left, User right)
    *   Use `Message`, `Card`, or `ChatBubble` style UI with static content
    *   "End Session" button at bottom

7.  **Summary Page**
    *   Static transcript
    *   Feedback section:
        *   "What went well"
        *   "What to improve"
        *   Confidence score bar or badge
    *   Use `Tabs`, `Accordion`, or `Card` components to structure

8.  **Navigation**
    *   Header bar with logo + links (Home, Dashboard, Pricing, Logout)
    *   Mobile-responsive menu
    *   Use `NavigationMenu` or `Sheet` components

### 🛠 Design & Output Expectations

*   Use **ShadCN/UI components only**
*   Apply built-in **dark mode theme** consistently
*   Follow Tailwind 4.0 conventions for spacing, layout, responsiveness
*   Use `/app` or `/pages` routing (latest Next.js standard)
*   Fully clickable: all buttons and links should route between pages
*   No Supabase, Stripe, or backend logic — just a full visual walkthrough

**Goal:** I want to be able to click through the entire experience and simulate the feel of the product before adding backend features.

## Progress Tracker

- [x] **Landing Page** ✅
- [x] **Signup / Login Page** ✅
- [x] **Pricing Page** ✅
- [x] **Dashboard Page** ✅
- [x] **Scenario Input Page** ✅
- [x] **Sales Simulation Page** ✅
- [x] **Summary Page** ✅
- [x] **Navigation** ✅
- [x] **Onboarding Flow** ✅

## Current User Flow

1.  **New User / Signed Out:**
    *   `Landing Page (`/`)` -> Clicks "Start Training" -> `Auth Page (`/auth`)`
    *   `Auth Page` -> Signs up or logs in -> Redirects to `Onboarding Page (`/onboarding`)`
    *   `Onboarding Page` -> Completes Steps 1-3 (Questions) -> Views Step 4 (Loader Journey) -> Views Step 5 (Offer) -> Clicks "Activate Pro Trial" or "Maybe later" -> `Scenario Input Page (`/scenario`)`
    *   `Landing Page (`/`)` -> Clicks "Pricing" in header -> `Pricing Page (`/pricing`)`
2.  **Returning User / Signed In (Post-Onboarding):**
    *   Navigates directly to `/scenario` (or potentially `/dashboard` in future iterations).
    *   Can access other pages like `/pricing` via the header.

## Notes & Key Decisions (Memory Bank)

*   **Onboarding Structure:** Implemented a focused, 5-step onboarding process after initial authentication (`/onboarding`):
    *   Step 1: Role/Industry/Experience Questions
    *   Step 2: Challenges/Confidence Questions
    *   Step 3: Goals/Frequency Questions
    *   Step 4: Fake Loader displaying a sequential "Personalizing Kairo..." journey with checkmarks.
    *   Step 5: Pro Trial Offer card with compelling AI features.
*   **Onboarding UI:**
    *   Main application header (`AppHeader`) is hidden on the `/onboarding` route to maximize focus.
    *   A smaller decorative Orb is present at the top.
    *   Progress bar tracks steps 1-5 (hidden during step 4).
    *   Loader step (4) uses `useEffect` and `setTimeout` for timed reveal of journey steps.
    *   Navigation: Back button is hidden on the final Offer step (5).
*   **Offer Details (Step 5):** Features highlighted include:
    *   AI Objection Handling
    *   Personalized Scenarios
    *   Voice Tone & Confidence Analysis
    *   Predictive Performance Insights
*   **Styling:** Consistent dark mode using ShadCN/UI components and Tailwind CSS.
*   **Future Considerations:** Dashboard page (`/dashboard`) currently has placeholders; could be the primary destination post-login/onboarding in the future.