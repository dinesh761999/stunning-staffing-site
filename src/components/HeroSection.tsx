"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-bg-gradient-start to-bg-gradient-end overflow-hidden">
      {/* Subtle geometric background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-lg rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-primary/10 rotate-45" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-primary/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/80 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4" />
              Trusted by 500+ Companies
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Connecting{" "}
                <span className="text-primary relative">
                  Talent
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-accent/40 -z-10 origin-left"
                  />
                </span>
                <br />
                with{" "}
                <span className="text-primary">Opportunity</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                We specialize in matching exceptional professionals with forward-thinking companies. 
                Our expert team understands the nuances of modern recruitment, ensuring perfect 
                alignment between talent and culture.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">5,000+ Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">98% Success Rate</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group transition-all duration-300"
              >
                Find Your Next Hire
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                Explore Opportunities
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border/50 backdrop-blur-sm">
              {/* Professional illustration placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract professional icons */}
                <div className="grid grid-cols-3 gap-6 opacity-40">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-12 h-12 bg-accent/60 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Animated connecting lines */}
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <motion.path
                      d="M50 50 Q100 100 150 50 Q100 100 50 150"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary/30"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                Live Matching
              </motion.div>
              
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                AI Powered
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}