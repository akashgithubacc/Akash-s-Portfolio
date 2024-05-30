import React from "react";

export default function Footer() {
  return (
    <footer className="mt-[7rem] px-4 text-center text-gray-500 dark:text-white/75">
      <small className="mb-2 block text-xs">&copy; Akash Singh</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
