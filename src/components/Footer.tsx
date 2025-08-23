import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Consulting", href: "/services/consulting" },
      { name: "Implementation", href: "/services/implementation" },
      { name: "Support", href: "/services/support" },
      { name: "Training", href: "/services/training" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Webinars", href: "/webinars" },
    ]
  }
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

const contactInfo = [
  { icon: Mail, text: "hello@company.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "123 Business St, City, State 12345" },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="text-2xl font-heading font-bold text-primary">
                  Company
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                We help businesses transform and grow through innovative solutions 
                and strategic consulting. Building the future, one project at a time.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link 
                href="/privacy" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="hover:text-foreground transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}