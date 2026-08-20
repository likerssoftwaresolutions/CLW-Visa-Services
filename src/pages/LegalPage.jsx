import { motion } from 'framer-motion'
import { ShieldCheck, ArrowDown } from 'lucide-react'

export default function LegalPage({ title, children }) {
  const scrollToContent = () => {
    document
      .getElementById('legal-content')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <>
      {/* =====================================================
          PREMIUM LEGAL HERO
      ====================================================== */}
      <section
        id="legal-hero"
        className="
          relative
          overflow-hidden
          bg-clw-navy
          bg-cover
          bg-center
          bg-no-repeat
          py-16
          sm:py-20
          lg:py-24
        "
        style={{
          backgroundImage:
            "url('/images/sections/visa-services-legal-background.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-clw-navy/10" />

        {/* Premium gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-clw-navy/95
            via-clw-navy/80
            to-clw-blue/30
          "
        />

        {/* =================================================
            BLUE GLOW
        ================================================== */}
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
            h-80
            w-80
            rounded-full
            bg-clw-blue/20
            blur-3xl
          "
        />

        {/* =================================================
            GOLD GLOW
        ================================================== */}
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            h-72
            w-72
            rounded-full
            bg-clw-gold/10
            blur-3xl
          "
        />

        {/* =================================================
            HERO CONTENT
        ================================================== */}
        <div
          className="
            container-clw
            relative
            flex
            min-h-[300px]
            items-center
            justify-center
            text-center
            sm:min-h-[340px]
            lg:min-h-[380px]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
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
            {/* =================================================
                PREMIUM PILL
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-clw-gold/35
                bg-white/[0.08]
                px-5
                py-2
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-clw-gold/55
                hover:bg-white/[0.12]
              "
            >
              {/* Icon */}
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-clw-gold/30
                  bg-clw-gold/10
                "
              >
                <ShieldCheck
                  size={13}
                  strokeWidth={2.3}
                  className="text-clw-gold"
                />
              </span>

              {/* Text */}
              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-clw-gold
                  sm:text-[10px]
                "
              >
                Legal Information
              </span>

              {/* Dot */}
              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-clw-gold/70
                "
              />
            </motion.div>

            {/* =================================================
                TITLE
            ================================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 18,
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
                mt-6
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
              {title}
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
                shadow-[0_0_12px_rgba(212,167,44,0.35)]
              "
            />

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-white/65
                sm:text-base
              "
            >
              Important information about CLW Visa Services.
            </motion.p>

            {/* Scroll button */}
            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              onClick={scrollToContent}
              aria-label="Scroll to legal information"
              className="
                mx-auto
                mt-7
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.06]
                text-white/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-clw-gold/40
                hover:bg-clw-gold/10
                hover:text-clw-gold
              "
            >
              <motion.span
                animate={{
                  y: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown size={15} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom fade
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
        /> */}
      </section>

      {/* =====================================================
          LEGAL CONTENT
      ====================================================== */}
      <section
        id="legal-content"
        className="
          relative
          overflow-hidden
          bg-clw-bg
          py-12
          sm:py-16
          lg:py-20
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            h-80
            w-80
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
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          "
        />

        {/* Content card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            container-clw
            relative
          "
        >
          <div
            className="
              mx-auto
              max-w-4xl
              rounded-2xl
              border
              border-clw-dark/[0.06]
              bg-white
              p-6
              shadow-[0_15px_50px_rgba(15,23,42,0.06)]
              sm:p-8
              lg:p-10
            "
          >
            <div
              className="
                text-sm
                leading-7
                text-clw-muted
              "
            >
              {children}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}