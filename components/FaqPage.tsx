"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 text-center ">
      <button
        className="text-center w-full font-semibold py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && <p className="text-gray-700 mt-2">{answer}</p>}
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the settings page and follow the instructions for password reset.",
    },
    {
      question: "Where can I find the user manual?",
      answer:
        "The user manual is available in the Help section of our website.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Customer support can be reached through the Contact Us page on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and various other payment methods.",
    },
    {
      question: "How secure is my personal information?",
      answer:
        "Your personal information is protected with industry-standard encryption and security measures.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data at any time from the account settings page.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqPage;
