"use client";

import { signOut } from "next-auth/react";

export default function ProfilePage() {
  return (
    <div>
      <div>Profile</div>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}
