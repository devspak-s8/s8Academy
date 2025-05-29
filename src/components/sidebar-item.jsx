import { ChevronRight } from "lucide-react"

export default function SidebarItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex items-center justify-between w-full px-4 py-3 rounded-md transition-colors ${
        active ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5" />
    </button>
  )
}
