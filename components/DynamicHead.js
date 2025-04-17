"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import React from "react";

const headMap = [
  {
    match: (pathname) => pathname === "/",
    load: () => import("../app/CustomHead"),
  },/*
  {
    match: (pathname) => pathname === "/page-a",
    load: () => import("../app/page-a/CustomHead"),
  },
  {
    match: (pathname) => pathname.startsWith("/blog/"),
    load: () => import("../app/blog/[slug]/CustomHead"),
  },*/
];

export function DynamicHead() {
  const pathname = usePathname();

  for (const entry of headMap) {
    if (entry.match(pathname)) {
      const HeadComponent = React.lazy(entry.load);
      return (
        <Suspense fallback={null}>
          <HeadComponent />
        </Suspense>
      );
    }
  }

  return null;
}
