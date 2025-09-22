"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <div className="fixed top-4 left-0 right-0 z-20 w-full">
      <div className="mx-auto px-4 text-4xl mt-8">
      <div className="relative flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2 text-2xl">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-4xl text-white shadow-sm shadow-black/10 transition hover:border-white/25 hover:bg-white/20 w-[32px]">
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
      </div>
    </div>
  );
}


