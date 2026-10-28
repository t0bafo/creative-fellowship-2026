import React, { createContext, useContext, useEffect, useState } from "react";

interface RouterContextType {
  path: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  path: "/",
  hash: "",
  navigate: () => {}
});

export function useRouter() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentUrl, setCurrentUrl] = useState(() => ({
    path: window.location.pathname,
    hash: window.location.hash
  }));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentUrl({
        path: window.location.pathname,
        hash: window.location.hash
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle legacy hash navigation (e.g., #sec-001 ... #sec-007 from fellowship site)
  useEffect(() => {
    const { pathname, hash } = window.location;
    if (pathname === "/" && hash && hash.startsWith("#sec-")) {
      // Legacy link to fellowship section - redirect smoothly to architecting culture
      window.history.replaceState(null, "", `/work/architecting-culture${hash}`);
      setCurrentUrl({
        path: "/work/architecting-culture",
        hash: hash
      });
    }
  }, []);

  // Scroll to anchor or top on path change
  useEffect(() => {
    if (currentUrl.hash) {
      const el = document.getElementById(currentUrl.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [currentUrl.path]);

  const navigate = (to: string) => {
    const url = new URL(to, window.location.origin);
    const newPath = url.pathname;
    const newHash = url.hash;

    if (newPath !== window.location.pathname || newHash !== window.location.hash) {
      window.history.pushState(null, "", to);
      setCurrentUrl({ path: newPath, hash: newHash });

      if (newHash) {
        const el = document.getElementById(newHash.replace("#", ""));
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 80);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      }
    }
  };

  return (
    <RouterContext.Provider value={{ path: currentUrl.path, hash: currentUrl.hash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigate } = useRouter();

  const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!isExternal && !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && target !== "_blank") {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noopener noreferrer" : rel}
      {...props}
    >
      {children}
    </a>
  );
}
