import React from "react";
import { RouterProvider, useRouter } from "./router";
import { ThemeProvider } from "./theme";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { LandingView } from "./views/LandingView";
import { SelectedWorkView } from "./views/SelectedWorkView";
import { ListeningExperienceView } from "./views/ListeningExperienceView";
import { EssayView } from "./views/EssayView";
import { LlonaStudyView } from "./views/LlonaStudyView";
import { ArchitectingCultureView } from "./views/ArchitectingCultureView";
import { NotFoundView } from "./views/NotFoundView";
import {
  ESSAY_PRESENCE_BEYOND_THE_ROOM,
  ESSAY_THE_SYSTEMS_BEHIND_THE_MUSIC
} from "./data/masterContent";

function AppRoutes() {
  const { path } = useRouter();

  // Normalize path by stripping trailing slash (except root)
  const normalizedPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  let pageContent: React.ReactNode;

  switch (normalizedPath) {
    case "":
    case "/":
      pageContent = <LandingView />;
      break;

    case "/work":
      pageContent = <SelectedWorkView />;
      break;

    case "/work/listening-and-fan-experience":
      pageContent = <ListeningExperienceView />;
      break;

    case "/work/presence-beyond-the-room":
      pageContent = <EssayView essay={ESSAY_PRESENCE_BEYOND_THE_ROOM} />;
      break;

    case "/work/the-systems-behind-the-music":
      pageContent = <EssayView essay={ESSAY_THE_SYSTEMS_BEHIND_THE_MUSIC} />;
      break;

    case "/work/llona-artist-enterprise":
    case "/work/llona-strategy":
      pageContent = <LlonaStudyView />;
      break;

    case "/work/architecting-culture":
      pageContent = <ArchitectingCultureView />;
      break;

    default:
      pageContent = <NotFoundView />;
      break;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-page)] text-[var(--color-text-primary)] relative selection:bg-[var(--color-accent)] selection:text-[var(--color-btn-primary-text)]">
      {/* Subtle Site-Wide Architectural Grid Lines */}
      <div className="grid-overlay" aria-hidden="true">
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
        <div className="grid-line" />
      </div>

      <Navigation />
      <div className="flex-1 relative z-10">
        {pageContent}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </ThemeProvider>
  );
}
