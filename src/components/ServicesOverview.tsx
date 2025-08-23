"use client"

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Users, 
  Clock, 
  Target, 
  Briefcase, 
  TrendingUp, 
  Award,
  Building2,
  UserCheck
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface ServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  index: number
}

interface MetricProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full bg-card border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-accent-foreground group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
          </div>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const AnimatedMetric: React.FC<MetricProps> = ({ value, label, suffix = "", prefix = "", index }) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const end = value
        const duration = 2000
        const increment = end / (duration / 16)
        
        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, index * 200)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  )
}

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "Permanent Placement",
      description: "Long-term staffing solutions with carefully vetted professionals who align with your company culture and growth objectives."
    },
    {
      icon: Clock,
      title: "Temporary Staffing",
      description: "Flexible workforce solutions for project-based needs, seasonal demands, or covering short-term absences with qualified talent."
    },
    {
      icon: Target,
      title: "Executive Search",
      description: "C-suite and senior leadership recruitment using targeted headhunting strategies and extensive industry networks."
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Specialized contractors for specific projects with defined timelines, bringing expertise without long-term commitment."
    },
    {
      icon: Building2,
      title: "RPO Services",
      description: "Recruitment Process Outsourcing to streamline your hiring operations with dedicated talent acquisition teams."
    },
    {
      icon: UserCheck,
      title: "Talent Consulting",
      description: "Strategic workforce planning and talent management advisory services to optimize your human capital strategy."
    }
  ]

  const metrics = [
    { value: 500, label: "Companies Served", suffix: "+" },
    { value: 15000, label: "Placements Made", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 25, label: "Years Experience", suffix: "+" }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive staffing solutions tailored to meet your unique business needs, 
            from temporary assignments to executive placements.
          </p>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <AnimatedMetric
                    key={metric.label}
                    value={metric.value}
                    label={metric.label}
                    suffix={metric.suffix}
                    index={index}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Trusted by Industry Leaders
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            Ready to find your perfect match?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert recruiters connect you with top talent or your dream opportunity. 
            Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-foreground font-medium rounded-lg border border-border hover:bg-secondary transition-colors duration-200"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview