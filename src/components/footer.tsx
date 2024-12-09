import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, PinIcon as Pinterest, Youtube } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <Image
                  src="/logo-icon.png"
                  alt="Comforty Logo"
                  width={24}
                  height={24}
                  className="text-primary-foreground"
                />
              </div>
              <span className="text-xl font-semibold">Comforty</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Vivamus fringilla odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary hover:border-[#007580] rounded-full hover:border-2 hover:text-[#007580]">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary hover:border-[#007580] rounded-full hover:border-2 hover:text-[#007580]">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary hover:border-[#007580] rounded-full hover:border-2 hover:text-[#007580]">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary hover:border-[#007580] rounded-full hover:border-2 hover:text-[#007580]">
                <Pinterest className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary hover:border-[#007580] rounded-full hover:border-2 hover:text-[#007580]">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Category Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">CATEGORY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Armchair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Tearms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#007580] hover:border-b-[#007580] hover:border-b-2">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">NEWSLETTER</h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
              />
              <Button className="bg-[#007580] w-full text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2023 - Blog - Designed & Develop by Zeksoft
            </p>
            <div className="">
              <Image
                src="/footer-pic.png"
                alt="Visa"
                width={227}
                height={27}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

