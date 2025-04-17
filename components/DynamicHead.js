"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function DynamicHead() {
  const pathname = usePathname();
  const [HeadComponent, setHeadComponent] = useState(null);

  useEffect(() => {
    async function loadHead() {
      if (pathname === "/") {
        const mod = await import("../app/CustomHead");
        setHeadComponent(() => mod.default);
      } else if (pathname === "/terms") {
        const mod = await import("../app/terms/CustomHead");
        setHeadComponent(() => mod.default);
      } else if (pathname === "/privacy") {
        const mod = await import("../app/privacy/CustomHead");
        setHeadComponent(() => mod.default);
      }/* else if (pathname.startsWith("/blog/")) {
        const mod = await import("./blog/[slug]/CustomHead");
        setHeadComponent(() => mod.default);
      }*/ else {
        setHeadComponent(null);
      }
    }

    loadHead();
  }, [pathname]);

  if (!HeadComponent) return null;

  return <HeadComponent />;
}
