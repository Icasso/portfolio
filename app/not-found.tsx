"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg border border-foreground p-8 sm:p-10 space-y-8">
        <div className="space-y-3">
          <p className="eyebrow text-accent">Error 404</p>
          <h1 className="display text-4xl sm:text-5xl">Page not found</h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Redirecting home in 5 seconds.
          </p>
        </div>
        <Button onClick={() => router.push("/")} className="w-full sm:w-auto">
          <HomeIcon className="h-4 w-4" />
          Go Home Now
        </Button>
      </div>
    </div>
  );
}
