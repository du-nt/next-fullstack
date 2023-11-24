import { PropsWithChildren } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function RedirectHomeRoute({
  children,
}: PropsWithChildren) {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/api/auth/signin");
  }

  return <div>{children}</div>;
}
