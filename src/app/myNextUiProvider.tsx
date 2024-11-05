"use client";

import { NextUIProvider } from "@nextui-org/react";

export function MyNextUiProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
