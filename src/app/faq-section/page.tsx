'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

export default function FAQSection() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What types of chairs do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    },
    {
      question: "Do your chairs come with a warranty?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      isOpen: false
    }
  ])

  const toggleFAQ = (index: number) => {
    setFaqItems(faqItems.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    })))
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-[32px] font-semibold text-[#333333] mb-4">Questions Looks Here</h2>
        <p className="text-[#666666] max-w-2xl mx-auto text-base">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#F9F9F9] rounded-none overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left hover:bg-[#f5f5f5] transition-colors"
            >
              <span className="font-medium text-[#333333]">{item.question}</span>
              <Plus 
                className={`w-5 h-5 transition-transform ${
                  item.isOpen ? 'rotate-45' : ''
                }`}
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                item.isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-5 pt-0 text-[#666666] text-base">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

