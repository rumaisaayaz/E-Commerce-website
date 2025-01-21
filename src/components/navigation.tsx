import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "#", label: "Shop" },
  { href: "/productPage", label: "Product" },
  { href: "#", label: "Pages" },
  { href: "/aboutPage", label: "About" },
];

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden flex items-center">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
                <SheetDescription className="p-4">
                {navigationLinks.map((link) => (
                  <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col m-2 p-2 bg-gray-100 rounded-md shadow-md justify-center items-center text-lg text-gray-700 hover:bg-gray-200 transition-all"
                  >
                  {link.label}
                  </Link>
                ))}
                </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden sm:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div className="hidden sm:flex items-center text-sm text-gray-600">
            <a
              href="/contactPage"
              className="ml-1 hover:text-gray-900 transition-colors"
            >
          <span className="flex items-center">
            Contact:
              (808) 555-0111
          </span>
            </a>
        </div>
      </div>
    </nav>
  );
}
