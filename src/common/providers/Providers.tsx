"use client"

import { PropsWithChildren } from "react";
import ThemeProvider from "./ThemeProvider";
import ActiveSectionProvider from "./ActiveSection";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </ThemeProvider>
  );
}
