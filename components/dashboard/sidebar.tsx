import Link from "next/link";
import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { RentalSidebarContent } from "./sidebar/sidebar-content";
import { Home, Heart } from "lucide-react";
import { RentalSidebarFooter } from "./sidebar/sidebar-footer";

export function RentalsSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="px-2.5 py-3">logo here</SidebarHeader>

      <RentalSidebarContent />

      <RentalSidebarFooter />
    </Sidebar>
  );
}
