# Project Plan: Kyra Sales Training Web App Frontend Prototype

## 1. Overview

Build a complete frontend prototype of **Kyra**, a sales training web app. The focus is on creating a responsive, interactive UI/UX flow simulating the core user journey, with no backend logic implemented at this stage.

## 2. Core Technologies & Stack

*   **Framework:** Next.js (App Router, latest stable version)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (v4.0 targetted, using standard conventions)
*   **UI Components:** ShadCN/UI (Default theme, dark mode only)
*   **State Management:** React Hooks (`useState`, `useEffect` primarily)
*   **Linting/Formatting:** (Assumed defaults via Next.js/Create Next App - e.g., ESLint, Prettier)

## 3. Design System & UX Goals

*   **Component Library:** Exclusively use ShadCN/UI components.
*   **Theme:** Dark mode only.
*   **Aesthetic:** Clean, modern, focused SaaS design principles.
*   **Responsiveness:** Ensure usability across common screen sizes (desktop, tablet, mobile).
*   **Interactivity:** All primary CTAs and navigation elements should be functional, routing between pages to simulate the user experience.

## 4. Key Features & Pages (Prototype Scope)

*(This section outlines the features built in the initial prototype phase)*

*   [x] **Landing Page (`/`)**
    *   Hero section (Headline, Subheading, CTA: "Start Training")
    *   Feature highlights (3 `Card` components)
    *   Placeholder visual element.
*   [x] **Authentication Page (`/auth`)**
    *   Toggleable Login/Signup form within a `Card`.
    *   Email/Password fields (`Input`, `Label`).
    *   Visual-only Google Auth button.
    *   Redirects to `/onboarding` upon successful mock auth.
*   [x] **Onboarding Flow (`/onboarding`)**
    *   Multi-step questionnaire (5 steps: 3 Qs, 1 Loader, 1 Offer).
    *   Uses `Select`, `RadioGroup`, `Input` for questions.
    *   Custom "journey" loader simulates AI personalization.
    *   Focused UI (hides main app header).
    *   Ends with a compelling Pro Trial offer card.
*   [x] **Pricing Page (`/pricing`)**
    *   Simple layout displaying a single tier ($99/month).
    *   Feature list.
    *   Non-functional "Subscribe" CTA.
*   [x] **Scenario Input Page (`/scenario`)**
    *   Entry point for core training simulation.
    *   `Textarea` for user input.
    *   Visual microphone icon.
    *   "Start Simulation" button (routes to `/simulation`).
*   [x] **Sales Simulation Page (`/simulation`)**
    *   Static placeholder for a two-column AI chat.
    *   Basic message bubble styling.
    *   "End Session" button (routes to `/summary`).
*   [x] **Summary Page (`/summary`)**
    *   Placeholder for transcript.
    *   Placeholder feedback sections (e.g., using `Tabs` or `Card`).
*   [x] **Navigation Structure**
    *   Landing Page Header (`LandingPageHeader`).
    *   Main App Header (`AppHeader`) with core links (hidden during onboarding).
    *   Layout managed by `MainLayout` determining header based on route.

## 5. Current User Flow

1.  **New User / Signed Out:**
    *   `Landing Page (`/`)` -> Clicks "Start Training" -> `Auth Page (`/auth`)`
    *   `Auth Page` -> Signs up or logs in -> Redirects to `Onboarding Page (`/onboarding`)`
    *   `Onboarding Page` -> Completes Steps 1-3 (Questions) -> Views Step 4 (Loader Journey) -> Views Step 5 (Offer) -> Clicks "Activate Pro Trial" or "Maybe later" -> `Scenario Input Page (`/scenario`)`
    *   `Landing Page (`/`)` -> Clicks "Pricing" in header -> `Pricing Page (`/pricing`)`
2.  **Returning User / Signed In (Post-Onboarding):**
    *   Primary destination currently `Scenario Input Page (`/scenario`)`.
    *   Can access other pages like `/pricing` via the app header.

## 6. Backend Integration Points (Future Work)

*(Areas where backend logic will eventually connect)*

*   **Authentication:** Replace mock auth with real Supabase Auth (Email/Pass, Google OAuth).
*   **User Profiles:** Store user details (potentially link to Supabase Auth user).
*   **Onboarding Data:** Persist user answers from the onboarding questionnaire.
*   **Scenario Data:** Save scenario inputs, AI responses, and simulation transcripts.
*   **Summary/Feedback Data:** Store analysis results and user feedback.
*   **Subscription Status:** Manage user subscription levels (e.g., via Supabase/Stripe integration).

## 7. Deployment

*   **Target Platform:** Vercel.
*   **Process:** Standard Vercel deployment linked to the GitHub repository.
*   **CI/CD:** (Assumed) Pushes/merges to the `main` branch trigger automatic deployments.

## 8. Notes & Key Decisions (Memory Bank)

*   **Onboarding Rationale:** A dedicated, multi-step onboarding flow was implemented after auth to personalize the user experience from the start. The focus is on gathering key user context (role, goals, challenges) to theoretically tailor the AI later.
*   **Loader Journey:** Step 4 of onboarding uses a custom "journey" animation (sequential checkmarks) instead of a simple spinner to make the "personalization" feel more tangible and process-oriented.
*   **UI Focus during Onboarding:** The main app header is hidden to minimize distractions and guide the user through the essential setup steps.
*   **Compelling Offer:** The Pro Trial offer (Step 5) explicitly lists advanced AI-driven features (Objection Handling, Personalized Scenarios, Voice Analysis, Predictive Insights) to create a strong value proposition.
*   **Navigation Post-Auth:** Currently directs straight to `/scenario` after onboarding. A future iteration might involve a more feature-rich `/dashboard` as the primary authenticated landing spot.
*   **Styling Consistency:** Strict adherence to ShadCN/UI components and Tailwind ensures visual consistency and leverages the chosen design system effectively.

## 9. Potential Future Enhancements

*   **Functional Dashboard:** Implement dynamic content, display past session history, user stats.
*   **User Profile Page:** Allow users to view/edit their information.
*   **Advanced AI Simulation:** Integrate a real language model for dynamic conversations.
*   **Analytics:** Track user progress and performance over time.
*   **Team Features:** Collaboration, manager dashboards.
*   **Scenario Library:** Offer pre-built scenarios.