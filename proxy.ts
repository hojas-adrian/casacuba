import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// CRITICO: Next.js requiere que la función exportada se llame 'middleware'
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  runtime: "edge", // 1. Forzamos el entorno Edge para Cloudflare Workers
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
