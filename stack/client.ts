"use client";
import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    afterSignIn: "/profile/edit",
    afterSignUp: "/profile/edit",
    afterSignOut: "/",
  },
});
