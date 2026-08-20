import { motion } from 'framer-motion'
import { ArrowDown, ShieldCheck, Globe2 } from 'lucide-react'

import AboutSection from '../components/AboutSection'
import MissionVision from '../components/MissionVision'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'
import { companyInfo } from '../data/content'

export default function About() {
  return (
    <>
      {/* =====================================================
          PREMIUM ABOUT HERO
      ====================================================== */}
      <section className="relative min-h-[520px] overflow-hidden bg-clw-navy sm:min-h-[580px]">

        {/* Background Image */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage:
              "url('/images/sections/about-clw-visa-services.webp')",
          }}
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/80 to-clw-navy/25" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-clw-navy/70 to-transparent" />

        {/* Decorative Glow */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            -right-24
            top-10
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          "
        />

        <div className="container-clw relative flex min-h-[520px] items-center sm:min-h-[580px]">

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            {/* Premium Pill */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-3.5
                py-1.5
                backdrop-blur-md
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />

              <span className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-gold
                sm:text-[10px]
              ">
                About CLW Visa Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.25,
              }}
              className="
                mt-5
                font-heading
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Your Trusted
              <span className="block text-clw-gold">
                Visa & Travel Partner
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.38,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              "
            >
              {companyInfo.tagline} since {companyInfo.established}.
              We help individuals, families, students and business travellers
              navigate visa and travel requirements with confidence.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mt-7
                flex
                flex-wrap
                gap-2.5
              "
            >

              <div className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-3
                py-2
                text-[10px]
                font-semibold
                text-white/80
                backdrop-blur-md
              ">
                <ShieldCheck
                  size={14}
                  className="text-clw-gold"
                />
                Professional Support
              </div>

              <div className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-3
                py-2
                text-[10px]
                font-semibold
                text-white/80
                backdrop-blur-md
              ">
                <Globe2
                  size={14}
                  className="text-clw-gold"
                />
                Global Travel Assistance
              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-1.5
            text-white/40
            sm:flex
          "
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
            Discover
          </span>

          <ArrowDown size={14} />
        </motion.div>

      </section>

      {/* =====================================================
          ABOUT CONTENT
      ====================================================== */}
      <AboutSection />

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <MissionVision />

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <WhyChooseUs />

      {/* =====================================================
          CTA
      ====================================================== */}
      <CTASection />
    </>
  )
}