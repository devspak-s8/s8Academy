import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import { SidebarInput } from "@/components/ui/sidebar";

export function SearchForm({ ...props }) {
  return (
   <form {...props}>
  <div className="relative">
    <Label htmlFor="search" className="sr-only">
      Search
    </Label>
    <SidebarInput
      id="search"
      placeholder="Search by name, specility..."
      className="pl-10 pr-4 py-2 w-[300px] bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none select-none" />
  </div>
</form>

  );
}
