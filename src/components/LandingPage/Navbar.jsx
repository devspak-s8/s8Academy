"use client"

import React from "react"
import { Link } from "react-router-dom"

import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "Preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Shows task completion progress, typically as a bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually separates scrollable content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Tabbed interface for layered content.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Popup info on hover or focus.",
  },
]

export default function NavigationMenuDemo() {
  return (
    <div className="w-full flex justify-center bg-transparent py-0">
         <NavigationMenu className="p-4">
      <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-none hover:bg-gray-50"
                      href="/"
                    >
                      <div className="mb-2 text-lg font-medium text-black">shadcn/ui</div>
                      <p className="text-sm text-gray-500">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists, etc.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100">
              Components
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px] gap-2 md:grid-cols-2 lg:w-[600px] p-4">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="text-black px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              <Link href="/docs">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100">
              List
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4 p-4">
                <li>
                  <NavLinkBlock href="#" title="Components" description="Browse all components." />
                  <NavLinkBlock href="#" title="Documentation" description="Learn the library." />
                  <NavLinkBlock href="#" title="Blog" description="Read latest posts." />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black bg-transparent hover:bg-gray-100">
              With Icon
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[250px] gap-4 p-4">
                <li className="space-y-2">
                  <NavIconLink icon={<CircleHelpIcon size={16} />} text="Backlog" />
                  <NavIconLink icon={<CircleIcon size={16} />} text="To Do" />
                  <NavIconLink icon={<CircleCheckIcon size={16} />} text="Done" />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function ListItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block space-y-1 hover:bg-gray-50 p-3 rounded-md">
          <div className="text-sm font-medium leading-none text-black">{title}</div>
          <p className="text-sm text-gray-500 leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

function NavLinkBlock({ href, title, description }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="block hover:bg-gray-50 p-2 rounded-md">
        <div className="font-medium text-black">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </Link>
    </NavigationMenuLink>
  )
}

function NavIconLink({ icon, text }) {
  return (
    <NavigationMenuLink asChild>
      <Link href="#" className="flex items-center gap-2 text-black hover:bg-gray-50 p-2 rounded-md">
        {icon}
        {text}
      </Link>
    </NavigationMenuLink>
  )
}
