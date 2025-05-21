export default function IncludedItem({ icon, title }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="text-amber-500 mb-3">{icon}</div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}
