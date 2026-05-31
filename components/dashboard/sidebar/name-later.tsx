import { createClient } from "@/lib/supabase/server";
import { LoginButton } from "./login-button";

import { UserMenuClient } from "./user-menu";

export async function User() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  //console.log(user);

  return !user ? <LoginButton /> : <UserMenuClient user={user} />;
}
