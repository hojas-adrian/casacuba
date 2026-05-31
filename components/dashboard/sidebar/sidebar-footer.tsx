import Link from "next/link";
import { SidebarFooter } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { User } from "./name-later";

export function RentalSidebarFooter() {
  return (
    <SidebarFooter className="px-2.5 pb-3">
      <div className="group-data-[collapsible=icon]:hidden space-y-3">
        <p className="text-center text-[11px] text-muted-foreground">
          Map powered by{" "}
          <Link
            href="https://mapcn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            mapcn
          </Link>{" "}
          by{" "}
          <Link
            href="https://x.com/sainianmol16"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            @sainianmol16
          </Link>
        </p>
        <div className="group/sidebar relative flex flex-col gap-2 rounded-lg border p-4 text-sm w-full bg-background">
          <div className="text-balance text-lg font-semibold leading-tight group-hover/sidebar:underline">
            Open-source layouts by lndev-ui
          </div>
          <div className="text-muted-foreground text-xs">
            Collection of beautifully crafted open-source layouts UI built with
            shadcn/ui.
          </div>
          <Link
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0"
            href="https://square.lndevui.com"
          >
            <span className="sr-only">Square by lndev-ui</span>
          </Link>
          <Button size="sm" className="w-full" asChild>
            <Link
              href="https://square.lndevui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              square.lndevui.com
            </Link>
          </Button>
        </div>
      </div>

      <User />
    </SidebarFooter>
  );
}
