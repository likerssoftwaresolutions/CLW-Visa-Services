import { motion } from 'framer-motion'
import Disclaimer from '../components/Disclaimer'
import CTASection from '../components/CTASection'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  return (
    <>
      {/* =====================================================
          FAQ HERO
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
            "url('/images/sections/visa-services-faq-background.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-clw-navy/55" />

        {/* Readability Gradient */}
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

        {/* Animated Glow */}
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
            -top-24
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          "
        />

        {/* Hero Content */}
        <div
          className="
            container-clw
            relative
            flex
            min-h-[380px]
            items-center
            justify-center
            py-20
            text-center
            sm:min-h-[420px]
            sm:py-24
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
            className="relative z-10 max-w-3xl"
          >
            {/* Premium Pill */}
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
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                "
              />

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                "
              >
                Frequently Asked Questions
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
              Questions?

              <br className="hidden sm:block" />

              <span className="text-clw-gold">
                {' '}We've Got Answers.
              </span>
            </motion.h1>

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
                text-white/70
                sm:text-base
              "
            >
              Find answers to common questions about visa
              assistance, documentation and travel services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-clw-bg py-12 sm:py-16 lg:py-20">

        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
            h-72
            w-72
            rounded-full
            bg-clw-blue/5
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-10
            h-72
            w-72
            rounded-full
            bg-clw-gold/5
            blur-3xl
          "
        />

        <div className="container-clw relative">

          {/* Premium Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-8 text-center sm:mb-10"
          >
            {/* Pill */}
            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                shadow-sm
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                "
              />

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                "
              >
                Helpful Information
              </span>
            </div>

            <h2
              className="
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
              "
            >
              Everything You Need to Know
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-clw-muted
              "
            >
              Quick answers about our visa and travel
              assistance services.
            </p>
          </motion.div>

          {/* FAQ */}
          <FAQ showHeading={false} />

        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ====================================================== */}
      <Disclaimer />

      {/* =====================================================
          CTA
      ====================================================== */}
      <CTASection />
    </>
  )
}