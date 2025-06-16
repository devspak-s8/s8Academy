"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl shadow-xl overflow-hidden rounded-2xl">
        <div className="flex flex-col-reverse lg:flex-row min-h-[600px]">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">Create Your Account</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fullName" className="block mb-1 text-sm font-medium">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="block mb-1 text-sm font-medium">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <p className="text-xs text-gray-600">
                  By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
                >
                  Sign Up
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account? <a href="#" className="text-blue-600 hover:underline font-medium">Log in</a>
                </p>
              </form>
            </div>
          </div>

      {/* Visual Section */}
<div className="w-full lg:w-1/2 bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-10 flex flex-col justify-center items-center relative">
  <h1 className="text-4xl font-bold text-center leading-tight mb-4">
    Embrace the Digital Future
  </h1>
  <p className="text-lg text-center max-w-sm mb-6">
    Fast-track your online access with a seamless signup experience.
  </p>

  {/* SVG Illustration */}
  <div className="w-full max-w-xs">
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="60" y="50" width="280" height="200" rx="20" fill="#fff" opacity="0.1" />
      <rect x="80" y="80" width="240" height="30" rx="5" fill="#fff" opacity="0.2" />
      <rect x="80" y="120" width="200" height="30" rx="5" fill="#fff" opacity="0.2" />
      <rect x="80" y="160" width="160" height="30" rx="5" fill="#4f46e5" />
      <circle cx="200" cy="250" r="30" fill="#fff" />
      <circle cx="200" cy="240" r="20" fill="#4f46e5" />
      <rect x="190" y="230" width="20" height="10" rx="2" fill="#fff" />
    </svg>
  </div>

  {/* Background decorative elements */}
  <div className="absolute top-6 left-6 w-10 h-10 bg-white bg-opacity-10 rounded-full"></div>
  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
</div>

        </div>
      </Card>
    </div>
  )
}
