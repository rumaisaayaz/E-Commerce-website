import { type LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-[#F8F9FA] rounded-lg">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#006D77] bg-opacity-10 mb-4">
        <Icon className="w-6 h-6 text-[#006D77]" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

