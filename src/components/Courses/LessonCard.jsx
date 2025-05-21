import { Eye } from "lucide-react"

export default function LessonCard({ number, title, description }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-3">
        <div className="bg-amber-100 p-1 rounded-full mr-2">
          <Eye className="h-4 w-4 text-amber-500" />
        </div>
        <span className="font-medium">Lesson {number}</span>
      </div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
