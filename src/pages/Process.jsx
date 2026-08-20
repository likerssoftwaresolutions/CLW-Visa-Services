import { motion } from 'framer-motion'
import { ClipboardCheck } from 'lucide-react'
import ProcessTimeline from '../components/ProcessTimeline'
import CTASection from '../components/CTASection'

const gridAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function Process() {
  return (
    <>
      {/* =====================================================
          PROCESS HERO
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/sections/process-background.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-clw-navy/55" />

        {/* Premium gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/75
            via-clw-navy/35
            to-transparent
          "
        />

        {/* Animated blue glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
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
            -top-24
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          "
        />

        {/* Hero content */}
        <div
          className="
            container-clw
            relative
            flex
            min-h-[390px]
            items-center
            justify-center
            py-16
            text-center
            sm:min-h-[430px]
            sm:py-20
            lg:min-h-[460px]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            {/* Premium pill */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-white/[0.08]
                px-4
                py-1.5
                backdrop-blur-md
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-clw-gold/10
                "
              >
                <ClipboardCheck
                  size={12}
                  strokeWidth={2.4}
                  className="text-clw-gold"
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                  sm:text-[10px]
                "
              >
                Our Process
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
                duration: 0.6,
                delay: 0.18,
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
              Simple. Clear.
              <br className="hidden sm:block" />

              <span className="text-clw-gold">
                {' '}Hassle-Free.
              </span>
            </motion.h1>

            {/* Gold accent */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 56,
                opacity: 1,
              }}
              transition={{
                duration: 0.55,
                delay: 0.3,
              }}
              className="
                mx-auto
                mt-5
                h-[2px]
                rounded-full
                bg-clw-gold
              "
            />

            {/* Subtitle */}
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
                duration: 0.55,
                delay: 0.28,
              }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/65
                sm:text-base
              "
            >
              A structured, step-by-step approach from your first
              enquiry to travel day, with professional guidance
              throughout your journey.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-clw-bg
            to-transparent
          "
        />
      </section>

      {/* =====================================================
          PROCESS SECTION
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-16
          lg:py-18
        "
      >
        {/* Subtle background pattern */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "url('/images/sections/travel-pattern.jpg')",
          }}
        />

        {/* Blue glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-10
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          "
        />

        {/* Gold glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-10
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          "
        />

        <div className="container-clw relative">

          {/* Section heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
            className="
              mb-9
              text-center
              sm:mb-11
            "
          >
            {/* Pill */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-clw-gold/25
                bg-white
                px-4
                py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-clw-blue
                shadow-sm
              "
            >
              How It Works
            </span>

            <h2
              className="
                mt-3
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
                lg:text-4xl
              "
            >
              Your Journey, Step by Step
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-xl
                text-xs
                leading-6
                text-clw-muted
                sm:text-sm
              "
            >
              From understanding your requirements to preparing
              your documents and getting ready to travel.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={gridAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <ProcessTimeline />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <CTASection />
    </>
  )
}