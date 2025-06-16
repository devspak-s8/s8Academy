import React, { useState } from "react";
import Modal from "react-modal";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

Modal.setAppElement("#root");

const RegistrationSection = () => {
  const [isOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
  });

  // Open modal & default to Sign Up
  const handleOpenModal = () => {
    setIsSignIn(false);
    setIsModalOpen(true);
  };

  // Close modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  // Handle form input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler for Sign In / Sign Up
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      console.log("Signing in with:", formData.email, formData.password);
      // Add sign-in logic here
    } else {
      console.log("Signing up with:", formData);
      // Add sign-up logic here
    }
    // Optional: close modal after submit
    // setIsModalOpen(false);
  };

  return (
    <section className="bg-indigo-600 py-16 px-6 mb-14 text-center text-white relative">
      <h2 className="text-5xl font-bold mb-6">
        Join <span className="text-purple-400">10,000+</span> Students Learning
        Today
      </h2>
      <p className="mb-10 text-lg max-w-xl mx-auto">
        Level up your skills with expert-led courses designed for the future.
      </p>
      <button
        onClick={handleOpenModal}
        className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition transform hover:scale-105 animate-pulse"
      >
        Enroll Now
      </button>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName="fixed inset-0 bg-transparent flex items-center justify-center z-50"
        className="modal-content animate-scale-fade z-50"
        closeTimeoutMS={200}
      >
        <Card className="shadow-xl overflow-hidden rounded-2xl flex flex-col-reverse lg:flex-row min-h-[600px]">
          {/* Form Section */}
          <div className="w-full lg:w-full bg-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                {isSignIn ? "Welcome Back" : "Create Your Account"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {!isSignIn && (
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="block mb-1 text-sm font-medium"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required={!isSignIn}
                    />
                  </div>
                )}

                <div>
                  <Label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium"
                  >
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

                {!isSignIn && (
                  <div>
                    <Label
                      htmlFor="mobile"
                      className="block mb-1 text-sm font-medium"
                    >
                      Mobile Number
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required={!isSignIn}
                    />
                  </div>
                )}

                <div>
                  <Label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {!isSignIn && (
                  <p className="text-xs text-gray-600">
                    By signing up, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg"
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  {isSignIn ? (
                    <>
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignIn(false)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Sign Up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setIsSignIn(true)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        </Card>
      </Modal>
    </section>
  );
};

export default RegistrationSection;
