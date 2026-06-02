import Link from "next/link";
import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { RentalSidebarContent } from "./sidebar/sidebar-content";
import { Home, Heart, GalleryVerticalEnd } from "lucide-react";
import { RentalSidebarFooter } from "./sidebar/sidebar-footer";

export function RentalsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-2.5 py-3">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
      </SidebarHeader>

      <RentalSidebarContent />

      <RentalSidebarFooter />
    </Sidebar>
  );
}
