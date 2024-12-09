'use client'
import Link from "next/link"
import Image from "next/image"
import { Check } from 'lucide-react'
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { code: "en", label: "English" },
  { code: "ge", label: "German" },
  { code: "fr", label: "French" },
]

export default function AnnouncementBar() {
  const [currentLang, setCurrentLang] = useState("en")

  return (
    <div className="w-full mx-auto px-4 bg-[#1A1B3A] text-white text-sm">
      <div className="container mx-auto px-4 h-9 flex items-center justify-between max-w-[1536px]">
        <div className="flex items-center space-x-2">
          <Check className="w-4 h-4" />
          <span className="text-xs font-normal">Free Shipping On All Orders Over $50</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Select
              defaultValue={currentLang}
              onValueChange={(value) => setCurrentLang(value)}
            >
              <SelectTrigger
                className="w-[100px] h-7 bg-transparent border-0 text-xs sm:text-sm focus:ring-0 focus:ring-offset-0"
                aria-label="Select language"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem
                    key={lang.code}
                    value={lang.code}
                    className="text-xs sm:text-sm"
                  >
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Link 
            href="/faq-section" 
            className="hidden sm:inline hover:text-gray-300 transition-colors"
          >
            FAQs
          </Link>
          <div className="flex gap-[6px]">

          <Image className="hidden sm:inline opacity-[70%]"
          width={16}
          height={16}
          alt="alert"
          src="/alert-icon.svg"
          
          />
          <Link 
            href="#" 
            className="hidden sm:inline hover:text-gray-300 transition-colors"
          >

        
            Need Help?
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}