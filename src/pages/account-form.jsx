"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";

const steps = [
  { number: 1, title: "Basic Info" },
  { number: 2, title: "Education & Background" },
  { number: 3, title: "Learning Goals" },
  { number: 4, title: "Course Selection" },
  { number: 6, title: "Confirmation & Redirect" },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            formData={formData}
            onChange={onChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            onChange={onChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            onChange={onChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <StepFour
            formData={formData}
            onChange={onChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );

      case 6:
        return <StepSix formData={formData} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fef9f5] to-[#e7f3ff] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gre p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex space-x-8">
          <div className="w-72 bg-gray-50 p-8 rounded-l-xl shadow-md">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-purple-500 tracking-tight">
                S8Academy
              </h1>
              <h2 className="text-lg font-semibold text-gray-800 mt-3">
                Create account
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((s, index) => (
                <div
                  key={s.number}
                  className="flex items-center gap-4 relative"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step > s.number
                        ? "bg-purple-500 text-white"
                        : step === s.number
                        ? "bg-purple-200 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                  </div>
                  <span
                    className={`text-sm ${
                      step === s.number
                        ? "text-gray-900 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {s.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="absolute left-4 top-full h-6 w-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-8">
            <div className="max-w-2xl">{renderStep()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function StepOne({ formData, onChange, onNext }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        YOUR PERSONAL DETAILS
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            National Identity Number
          </label>
          <input
            type="text"
            name="nationalId"
            value={formData.nationalId || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Middle Name
          </label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        YOUR RESIDENTIAL ADDRESS
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Street Address (Optional)
          </label>
          <input
            type="text"
            name="streetAddressOptional"
            value={formData.streetAddressOptional || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Post Code</label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            State/Province
          </label>
          <input
            type="text"
            name="state"
            value={formData.state || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Country</label>
          <select
            name="country"
            value={formData.country || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Norway">Norway</option>
            <option value="Sweden">Sweden</option>
            <option value="Denmark">Denmark</option>
          </select>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        CONTACT DETAILS
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      <div className="text-right">
        <button onClick={onNext} className={btnPrimary}>
          Next
        </button>
      </div>
    </div>
  );
}

function StepTwo({ formData, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        What’s your learning background?
      </h3>
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Current Level of Education
        </label>
        <select
          name="educationLevel"
          value={formData.educationLevel || ""}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select</option>
          <option>Secondary</option>
          <option>Diploma</option>
          <option>Undergraduate</option>
          <option>Graduate</option>
          <option>Postgraduate</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Field of Study / Interest
        </label>
        <input
          name="fieldOfStudy"
          value={formData.fieldOfStudy || ""}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Have you coded before?
        </label>
        <select
          name="hasCoded"
          value={formData.hasCoded || ""}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {formData.hasCoded === "yes" && (
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Tools/Languages Known
          </label>
          <input
            name="tools"
            value={formData.tools || ""}
            onChange={onChange}
            placeholder="e.g. HTML, CSS, Python"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
      )}
      <div className="flex justify-between">
        <button onClick={onBack} className={btnSecondary}>
          Back
        </button>
        <button onClick={onNext} className={btnPrimary}>
          Next
        </button>
      </div>
    </div>
  );
}

function StepThree({ formData, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        Why are you joining S8Academy?
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Primary Goal
          </label>
          <select
            name="goal"
            value={formData.goal || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select</option>
            <option>Get a job in tech</option>
            <option>Build my own product</option>
            <option>Freelance</option>
            <option>Just explore and learn</option>
            <option>Other</option>
          </select>
          {formData.goal === "Other" && (
            <input
              name="otherGoal"
              value={formData.otherGoal || ""}
              onChange={onChange}
              placeholder="Your goal"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Preferred Learning Style
          </label>
          <select
            name="learningStyle"
            value={formData.learningStyle || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option>Videos</option>
            <option>Written notes</option>
            <option>Projects</option>
            <option>Peer learning</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Hours Per Week
          </label>
          <select
            name="weeklyHours"
            value={formData.weeklyHours || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option>1–3 hrs</option>
            <option>4–6 hrs</option>
            <option>7–10 hrs</option>
            <option>10+ hrs</option>
          </select>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        Choose your track
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Course Selection
          </label>
          <select
            name="course"
            value={formData.course || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select</option>
            <option>HTML/CSS for Beginners</option>
            <option>Frontend Dev Track</option>
            <option>Fullstack Cohort</option>
            <option>UI/UX</option>
            <option>Data Analytics</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className={btnSecondary}>
          Back
        </button>
        <button onClick={onNext} className={btnPrimary}>
          Next
        </button>
      </div>
    </div>
  );
}

function StepFour({ formData, onChange, onNext, onBack }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">
        Choose your track
      </h3>
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Course Selection
        </label>
        <select
          name="course"
          value={formData.course || ""}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select</option>
          <option>HTML/CSS for Beginners</option>
          <option>Frontend Dev Track</option>
          <option>Fullstack Cohort</option>
          <option>UI/UX</option>
          <option>Data Analytics</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate || ""}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className={btnSecondary}>
          Back
        </button>
        <button onClick={onNext} className={btnPrimary}>
          Next
        </button>
      </div>
    </div>
  );
}

function StepSix({ formData, onBack }) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-4">Confirmation</h3>
      <p className="text-gray-700">
        Thank you for completing your registration, {formData.firstName}! You’ll
        be redirected to the dashboard shortly.
      </p>
      <div className="text-right">
        <button onClick={onBack} className={btnSecondary}>
          Back
        </button>
      </div>
    </div>
  );
}
// styles.js (or top of your component file)
export const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent";
export const btnPrimary =
  "px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-teal-500";
export const btnSecondary =
  "px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300";

// Utility styles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .form-input { ${inputClass} }
  .btn-primary { $className={btnPrimary} }
  .btn-secondary { ${btnSecondary} }
`;
document.head.appendChild(styleSheet);
