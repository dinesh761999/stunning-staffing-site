"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Github } from "lucide-react"
import { toast } from "sonner"

interface ContactFormData {
  name: string
  email: string
  company: string
  position: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    position: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Thank you! Your message has been sent successfully.")
    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      message: ""
    })
    setIsSubmitting(false)
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-background border-input focus:ring-accent focus:border-accent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-background border-input focus:ring-accent focus:border-accent"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background border-input focus:ring-accent focus:border-accent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-sm font-medium">
                      Position Type
                    </Label>
                    <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                      <SelectTrigger className="bg-background border-input focus:ring-accent focus:border-accent">
                        <SelectValue placeholder="Select position type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-background border-input focus:ring-accent focus:border-accent min-h-[120px] resize-none"
                    placeholder="Tell us about your project or opportunity..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium py-6 text-base transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">hello@company.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Clock className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Weekend: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Office Locations
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">San Francisco</p>
                    <p className="text-muted-foreground">123 Market Street</p>
                    <p className="text-muted-foreground">San Francisco, CA 94102</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">New York</p>
                    <p className="text-muted-foreground">456 Broadway</p>
                    <p className="text-muted-foreground">New York, NY 10013</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-accent-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-accent-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-accent-foreground group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}