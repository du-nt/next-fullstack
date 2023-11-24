"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const t = useTranslations();

  return (
    <div>
      <button onClick={() => signIn("google", { callbackUrl })}>
        Sign in with google
      </button>

      <Link href="/register">{t("common.datePickerPlaceholder")}</Link>
    </div>
  );
}
