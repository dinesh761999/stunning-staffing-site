"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className={`bg-card border-b border-border shadow-sm ${className || ""}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-heading font-bold text-xl text-foreground">
              Agency
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              href="/get-started"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 hover:shadow-md"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}