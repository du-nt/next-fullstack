import { Session } from "next-auth";
import { PropsWithChildren } from "react";

export type RootProviderProps = PropsWithChildren & {
  session: Session | null;
};

export type Locale = "ja" | "en";
