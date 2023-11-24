"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => signOut()}>Signout</button>
      <Link href="/profile">Profile page</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/forgot-password">Forgot-password</Link>
      <Link href="/about">{t("common.timePickerPlaceholder")}</Link>
    </main>
  );
}
