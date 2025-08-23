"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "motion/react"
import { useRef } from "react"
import { TrendingUp, Users, Star, Building2 } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  label: string
  description: string
  delay?: number
}

function StatCard({ icon, value, suffix = "", label, description, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0
        
        const counter = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, delay, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-accent/10 rounded-lg">
          {icon}
        </div>
        <div className="text-right">
          <div className="flex items-baseline">
            <motion.span 
              className="text-3xl font-bold font-heading text-foreground"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.4, delay: delay * 0.1 + 0.3 }}
            >
              {count.toLocaleString()}
            </motion.span>
            {suffix && (
              <span className="text-xl font-semibold text-accent ml-1">
                {suffix}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-foreground mt-1">{label}</p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      value: 850,
      suffix: "+",
      label: "Successful Placements",
      description: "Connecting top talent with leading companies across various industries"
    },
    {
      icon: <Building2 className="w-6 h-6 text-accent" />,
      value: 12,
      suffix: "+",
      label: "Years of Experience",
      description: "Over a decade of expertise in executive recruitment and talent acquisition"
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently delivering exceptional results that exceed client expectations"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      value: 25,
      suffix: "+",
      label: "Industry Sectors",
      description: "Comprehensive coverage across technology, finance, healthcare, and more"
    }
  ]

  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the numbers. See how we've been making a difference in the recruitment industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-2">
              Ready to join our success stories?
            </p>
            <p className="text-lg font-medium text-foreground">
              Let us help you find your next great opportunity or the perfect candidate for your team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}