import React from "react";
import { RouterProvider, useRouter } from "./router";
import { Navigation } from "./components/Navigation";
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
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F1E8]">
      <div className="portfolio-grid-overlay" aria-hidden="true">{Array.from({length: 12}, (_, i) => <span key={i} />)}</div>
      <Navigation />
      <div className="flex-1">
        {pageContent}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
