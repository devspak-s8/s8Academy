"use client";

import React from "react";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
const UserDashboard = () => {
  return (
    <div className="[--header-height:calc(theme(spacing.14))] ">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
              <main className="flex flex-1 flex-col gap-4 p-4 mt-10 overflow-auto">
              {/* Outlet renders the selected page component */}
              <Outlet />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};
export default UserDashboard;
