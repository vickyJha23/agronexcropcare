import type { ReactNode } from "react";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Assistant } from "./Assistant.tsx";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Assistant />
    </>
  );
}
