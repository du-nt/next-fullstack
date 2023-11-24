import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function ProtectRoute({ children }: PropsWithChildren) {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return <div>{children}</div>;
}
