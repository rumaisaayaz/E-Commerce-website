'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    resetForm()
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-normal mb-4">Get In Touch With Us</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us 
          An Email. Our Staff Always Be There To Help You Out. Let&apos;s Get In Touch!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Information */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New <br />
                York NY10000, United <br />
                States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-gray-600">
                Mobile: +1841 546 6789 <br />
                Hotline: +1841 456-9789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - <br />
                22:00 <br />
                Saturday-Sunday: 9:00 - <br />
                21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="ABC"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Abc@def.com"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="This is an optional"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Hi! I'd like to ask about"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}