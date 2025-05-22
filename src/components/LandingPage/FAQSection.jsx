import { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply browse our courses, select one, and click enroll. Follow the checkout process to get started instantly.',
  },
  {
    question: 'Are courses self-paced?',
    answer: 'Yes, all our courses are self-paced to fit your schedule and learning style.',
  },
  {
    question: 'Can I get a certificate?',
    answer: 'Absolutely, you’ll receive a verified certificate upon course completion.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Just to fix any refs initialization issues
    if (contentRefs.current.length !== faqs.length) {
      contentRefs.current = Array(faqs.length)
        .fill()
        .map((_, i) => contentRefs.current[i] || null);
    }
  }, []);

  return (
    <section className="max-w-4xl mx-auto p-6 my-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Frequently Asked <span className="text-purple-600">Questions</span>
      </h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, idx) => {
          const isOpen = idx === openIndex;
          const contentHeight = contentRefs.current[idx]?.scrollHeight || 0;

          return (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-purple-100 flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-lg">{question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                ref={(el) => (contentRefs.current[idx] = el)}
                style={{
                  maxHeight: isOpen ? contentHeight + 'px' : '0px',
                  transition: 'max-height 0.4s ease',
                  overflow: 'hidden',
                }}
                className="px-6 text-gray-700"
              >
                <div className="py-4">{answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
