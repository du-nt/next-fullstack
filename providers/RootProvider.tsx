"use client";

import { RootProviderProps } from "@/types";
import { SessionProvider } from "next-auth/react";

export default function AppRootProvider({
  children,
  session,
}: RootProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
