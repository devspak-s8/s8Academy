"use client"

import { useState } from "react"

const Newsletter= () =>{
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Email submitted:", email)
    // Reset form after submission
    setEmail("")
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Find Out About The Latest Courses With The
            <span className="block">
              <span className="text-purple-500">Academy</span> Newsletter
            </span>
          </h2>
        </div>

        <div className="w-full md:w-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Blue curved shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-500 rounded-l-full -mr-20 z-0"></div>
    </div>
  )
}

export default Newsletter;
