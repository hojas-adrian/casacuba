import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export function LoginButton() {
  return (
    <>
      <Link href="/auth/login">
        <Button className="flex items-center gap-2 w-full" size="lg">
          <LogIn className="size-4" />
          <span>Sign in</span>
        </Button>
      </Link>
    </>
  );
}
