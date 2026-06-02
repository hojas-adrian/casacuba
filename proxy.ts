import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// 1. Aplicamos la recomendación: Forzamos el compilador a usar el entorno Edge
export const runtime = "edge";

// 2. Mantenemos tu función con la nueva convención 'proxy' que exige Next.js 16
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // 3. Tu matcher actual para interceptar las rutas de la app
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
