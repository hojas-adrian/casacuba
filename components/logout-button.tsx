"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <DropdownMenuItem
      onClick={logout}
      className="text-destructive focus:text-destructive"
    >
      <LogOut className="size-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
}
