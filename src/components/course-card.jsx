export default function CourseCard({ image, institution, title, duration, format, schedule }) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col flex-grow p-5 space-y-4">
        <div>
          <p className="text-xs font-medium text-gray-500 mb-2">{institution}</p>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>

        <div className="text-sm text-gray-600 mt-auto">
          {duration} · {format} · {schedule}
        </div>

        <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">View Program</button>
      </div>
    </div>
  )
}
