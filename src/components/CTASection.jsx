import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-clw-navy
        bg-cover
        bg-center
        bg-no-repeat
        py-16
        sm:py-20
      "
      style={{
        backgroundImage: "url('/images/sections/visa-services-call-to-action.webp')",
      }}
    >

      {/* =====================================================
          BACKGROUND IMAGE OVERLAY
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-clw-navy/55
        "
      />

      {/* =====================================================
          SUBTLE BLUE GLOW - RIGHT
      ====================================================== */}
      <motion.div
        animate={{
          x: [0, 18, 0],
          y: [0, -10, 0],
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
          h-64
          w-64
          rounded-full
          bg-clw-blue-2/20
          blur-3xl
        "
      />

      {/* =====================================================
          SUBTLE BLUE GLOW - LEFT
      ====================================================== */}
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
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-clw-blue/20
          blur-3xl
        "
      />

      {/* =====================================================
          GOLD AMBIENT GLOW
      ====================================================== */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-clw-gold/5
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="container-clw relative z-10">

        {/* =================================================
            PREMIUM GLASS CTA CARD
        ================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-2xl
            border
            border-white/20
            bg-white/[0.08]
            px-5
            py-8
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.22)]
            backdrop-blur-[4px]
            sm:px-10
            sm:py-10
          "
        >

          {/* =================================================
              LIGHT GLASS OVERLAY
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-white/[0.035]
            "
          />

          {/* =================================================
              SUBTLE CARD BORDER GLOW
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              ring-1
              ring-inset
              ring-white/[0.08]
            "
          />

          {/* =================================================
              CONTENT WRAPPER
          ================================================== */}
          <div className="relative z-10">

            {/* =================================================
                TOP GOLD ACCENT
            ================================================== */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: '80px',
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: 'easeOut',
              }}
              className="
                absolute
                left-1/2
                top-[-32px]
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-clw-gold
                shadow-[0_0_12px_rgba(212,167,44,0.5)]
              "
            />

            {/* =================================================
                BADGE
            ================================================== */}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-clw-gold/40
                bg-clw-gold/10
                px-3
                py-1
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-gold
                backdrop-blur-sm
              "
            >
              Start Your Journey
            </motion.span>

            {/* =================================================
                HEADING
            ================================================== */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.16,
              }}
              className="
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-2xl
                font-extrabold
                leading-tight
                tracking-tight
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                sm:text-3xl
                lg:text-4xl
              "
            >
              Planning Your Next Journey?
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.24,
              }}
              className="
                mx-auto
                mt-3
                max-w-lg
                text-xs
                leading-relaxed
                text-white/80
                drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]
                sm:text-sm
              "
            >
              Let CLW Visa Services make your visa and travel process
              simple, organised and stress-free.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.32,
              }}
              className="
                mt-6
                flex
                flex-col
                items-center
                justify-center
                gap-2.5
                sm:flex-row
              "
            >

              {/* =================================================
                  GET FREE CONSULTATION
              ================================================== */}
              <Link
                to="/contact"
                className="
                  group/consult
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-clw-gold
                  px-5
                  py-2.5
                  text-[11px]
                  font-extrabold
                  text-clw-navy
                  shadow-[0_8px_20px_rgba(212,167,44,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2b83b]
                  hover:shadow-[0_12px_28px_rgba(212,167,44,0.35)]
                  active:translate-y-0
                "
              >
                Get Free Consultation

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover/consult:translate-x-1
                  "
                />
              </Link>

              {/* =================================================
                  WHATSAPP
              ================================================== */}
              <a
                href="https://wa.me/919383349693"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group/whatsapp
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#25D366]/60
                  bg-[#25D366]/10
                  px-5
                  py-2.5
                  text-[11px]
                  font-extrabold
                  text-[#25D366]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#25D366]
                  hover:bg-[#25D366]
                  hover:text-white
                  hover:shadow-[0_10px_25px_rgba(37,211,102,0.25)]
                  active:translate-y-0
                "
              >
                <MessageCircle
                  size={15}
                  strokeWidth={2.3}
                  className="
                    transition-transform
                    duration-300
                    group-hover/whatsapp:scale-110
                  "
                />

                WhatsApp Us
              </a>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}