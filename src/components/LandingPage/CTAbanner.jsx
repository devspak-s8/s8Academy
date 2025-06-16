import React, { useState } from "react"
import Modal from "react-modal"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

Modal.setAppElement("#root")

const RegistrationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    setIsModalOpen(false)
  }

  const handleOpenModal = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="bg-indigo-600 py-16 px-6 mb-14 text-center text-white relative">
      <h2 className="text-5xl font-bold mb-6">
        Join <span className="text-purple-400">10,000+</span> Students Learning Today
      </h2>
      <p className="mb-10 text-lg max-w-xl mx-auto">
        Level up your skills with expert-led courses designed for the future.
      </p>
      <a
        href="#enroll"
        onClick={handleOpenModal}
        className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 animate-pulse"
      >
        Enroll Now
      </a>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        className="modal-content animate-scale-fade z-50"
        overlayClassName="modal-overlay"
      >
        <div className="relative pointer-events-auto">
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold z-50"
          >
            &times;
          </button>

          <Card className="w-full max-w-6xl mx-auto shadow-xl overflow-hidden rounded-2xl">
            <div className="flex flex-col-reverse lg:flex-row min-h-[600px]">

              {/* Form Side */}
              <div className="w-full lg:w-full bg-white p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full max-w-md mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                    Create Your Account
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="fullName" className="block mb-1 text-sm font-medium">
                        Full Name
                      </Label>
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
                      <Label htmlFor="email" className="block mb-1 text-sm font-medium">
                        Email Address
                      </Label>
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
                      <Label htmlFor="mobile" className="block mb-1 text-sm font-medium">
                        Mobile Number
                      </Label>
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
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:underline">Terms</a> and{" "}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg">
                      Sign Up
                    </Button>

                    <p className="text-center text-sm text-gray-600">
                      Already have an account?{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">Log in</a>
                    </p>
                  </form>
                </div>
              </div>

              {/* Visual Side */}
           
            </div>
          </Card>
        </div>
      </Modal>
    </section>
  )
}

export default RegistrationSection
