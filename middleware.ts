import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Volvemos al estándar nativo que Next.js y OpenNext esperan encontrar
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  runtime: "edge", // Crucial para que corra sobre los Workers de Cloudflare
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
