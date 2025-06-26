import * as React from "react";
// import {
//   BookOpen,
//   Bot,
//   Frame,
//   LifeBuoy,
//   Map,
//   PieChart,
//   Send,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  Syringe,
  Command,
  FileText,
  Settings2,
  LifeBuoy,
  Send,
  Frame,
  LayoutDashboard,
  FolderKanban,
  PenTool,
  BookOpen,
  ShoppingBag,
  ClipboardList,
  Users,
  PlusCircle,
  BarChart2,
  Bookmark,
} from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import { NavSecondary } from "@/components/ui/nav-secondary";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/student-dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        { title: "Overview", url: "/dashboard/overview" },
        { title: "Stats", url: "/dashboard/stats" },
      ],
    },
    {
      title: "Courses",
      url: "/dashboard/courses",
      icon: BookOpen,
      items: [
        { title: "All Courses", url: "/dashboard/courses" },
        { title: "Add New", url: "/dashboard/courses/create" },
        { title: "Categories", url: "/dashboard/courses/categories" },
      ],
    },
    {
      title: "Lessons",
      url: "/dashboard/lessons",
      icon: FileText,
      items: [
        { title: "All Lessons", url: "/lessons/all" },
        { title: "Upload Lesson", url: "/lessons/upload" },
      ],
    },
    {
      title: "Students",
      url: "/students",
      icon: Users,
      items: [
        { title: "All Students", url: "/students" },
        { title: "Enrollments", url: "/students/enrollments" },
      ],
    },
    {
      title: "Assessments",
      url: "/assessments",
      icon: ClipboardList,
      items: [
        { title: "Quizzes", url: "/assessments/quizzes" },
        { title: "Assignments", url: "/assessments/assignments" },
        { title: "Grades", url: "/assessments/grades" },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      icon: Bookmark,
      items: [
        { title: "All Resources", url: "/resources" },
        { title: "Add Resource", url: "/resources/add" },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart2,
      items: [
        { title: "Student Progress", url: "/analytics/progress" },
        { title: "Course Stats", url: "/analytics/courses" },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        { title: "General", url: "/settings/general" },
        { title: "Instructor Profile", url: "/settings/profile" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavLink to="/dashboard" className="flex items-center gap-3">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
