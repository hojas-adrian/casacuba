import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export const runtime = "edge"; // ← Agrega esta línea

// 2. Mantenemos tu función con la nueva convención 'proxy' que exige Next.js 16
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // 3. Tu matcher actual para interceptar las rutas de la app
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
