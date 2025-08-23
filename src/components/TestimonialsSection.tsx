"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  quote: string
  name: string
  position: string
  company: string
  avatar: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with this team transformed our business processes completely. The results exceeded our expectations and the ROI has been phenomenal.",
    name: "Sarah Chen",
    position: "CEO",
    company: "TechFlow Solutions",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  },
  {
    id: 2,
    quote: "The level of expertise and attention to detail is unmatched. They delivered a solution that perfectly aligned with our vision and goals.",
    name: "Marcus Rodriguez",
    position: "CTO",
    company: "Innovation Labs",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  },
  {
    id: 3,
    quote: "Outstanding service and remarkable results. Our team productivity increased by 300% after implementing their recommendations.",
    name: "Emma Thompson",
    position: "VP of Operations",
    company: "Global Dynamics",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  },
  {
    id: 4,
    quote: "Professional, reliable, and innovative. They turned our complex challenges into streamlined solutions that drive real business value.",
    name: "David Kumar",
    position: "Founder",
    company: "NextGen Ventures",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  },
  {
    id: 5,
    quote: "The strategic insights and implementation were flawless. We've seen tremendous growth since partnering with them.",
    name: "Lisa Park",
    position: "Director of Strategy",
    company: "Forward Thinking Co",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  },
  {
    id: 6,
    quote: "Exceptional quality and service. They consistently deliver beyond expectations and have become an integral part of our success.",
    name: "James Wilson",
    position: "Managing Partner",
    company: "Visionary Group",
    avatar: "/api/placeholder/64/64",
    logo: "/api/placeholder/120/40"
  }
]

interface TestimonialsSectionProps {
  className?: string
}

export default function TestimonialsSection({ className = "" }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve exceptional results.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}-${index}`} 
                className="bg-card border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-accent fill-accent/20" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="flex items-center justify-start">
                    <div className="h-8 flex items-center opacity-60">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-6 object-contain filter grayscale"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full p-0 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent w-8' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full p-0 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            {testimonials.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="h-6">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}