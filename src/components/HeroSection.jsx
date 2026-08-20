import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-clw-navy
        bg-cover
        bg-center
        bg-no-repeat
        pt-24
        pb-16
        sm:pt-28
        sm:pb-20
        lg:pt-32
        lg:pb-24
      "
      style={{
        backgroundImage: "url('/images/Travel 1.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/90 to-clw-navy/60" />

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">

        {/* Blue Glow */}
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-clw-blue-2/20 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-clw-blue/20 blur-3xl" />

        {/* Subtle Dots */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.02]"
          aria-hidden="true"
        >
          <pattern
            id="heroDots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1.5"
              cy="1.5"
              r="1.2"
              fill="white"
            />
          </pattern>

          <rect
            width="100%"
            height="100%"
            fill="url(#heroDots)"
          />
        </svg>

        {/* Decorative Travel Route */}
        <svg
          className="
            absolute
            left-1/2
            top-1/4
            hidden
            h-32
            w-[55%]
            -translate-x-1/2
            opacity-25
            lg:block
          "
          viewBox="0 0 600 160"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 140C160 20 440 20 590 140"
            stroke="#D4A72C"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          <circle
            cx="10"
            cy="140"
            r="3"
            fill="#D4A72C"
          />

          <circle
            cx="590"
            cy="140"
            r="3"
            fill="#D4A72C"
          />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div
        className="
          container-clw
          relative
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-12
        "
      >

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
         {/* Eyebrow */}
<motion.div
  variants={item}
  className="
    mt-2
    flex
    items-center
    gap-3
  "
>
  {/* Animated Gold Line */}
  <motion.span
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: 42, opacity: 1 }}
    transition={{
      duration: 0.7,
      delay: 0.35,
      ease: 'easeOut',
    }}
    className="
      block
      h-[3px]
      rounded-full
      bg-clw-gold
      shadow-[0_0_10px_rgba(212,167,44,0.65)]
    "
  />

  {/* Animated Text */}
  <motion.span
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.6,
      delay: 0.55,
      ease: 'easeOut',
    }}
    className="
      relative
      text-sm
      font-bold
      uppercase
      tracking-[0.22em]
      text-white
      drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
      sm:text-base
    "
  >
    Established in 2019

    {/* Gold highlight */}
    <motion.span
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.75,
        ease: 'easeOut',
      }}
      className="
        absolute
        -bottom-1
        left-0
        h-[2px]
        w-full
        origin-left
        rounded-full
        bg-clw-gold/70
      "
    />
  </motion.span>
</motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="
              mt-4
              font-heading
              text-3xl
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[3rem]
              xl:text-[3.3rem]
            "
          >
            Visa &amp; Travel
            <br />
            Solutions,
            <br />
            <span className="text-clw-gold">
              Made Simple.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="
              mt-5
              max-w-lg
              text-sm
              leading-relaxed
              text-white/75
              sm:text-base
            "
          >
            Professional visa assistance, travel services and
            personalised support for individuals, families,
            students, business travellers and corporate clients.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <Link
              to="/contact"
              className="
                btn-primary
                inline-flex
                items-center
                justify-center
                gap-2
              "
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/services"
              className="
                btn-ghost-white
                inline-flex
                items-center
                justify-center
              "
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Supporting Services */}
          <motion.div
            variants={item}
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-xs
              font-medium
              text-white/55
            "
          >
            <span>Visa Assistance</span>

            <span className="h-1 w-1 rounded-full bg-clw-gold" />

            <span>Travel Services</span>

            <span className="h-1 w-1 rounded-full bg-clw-gold" />

            <span>Personalised Support</span>
          </motion.div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <div className="relative z-10">

          {/* Video Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.25,
            }}
            className="
              relative
              mx-auto
              aspect-[4/5]
              w-full
              max-w-[340px]
              overflow-hidden
              rounded-2xl
              border
              border-white/20
              bg-clw-navy
              shadow-2xl
              sm:rounded-[1.5rem]
            "
          >
            {/* Video */}
 <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover"
>
  <source
    src="/Videos/travel-animation-web.mp4"
    type="video/mp4"
  />
</video>
            {/* Video Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-clw-navy/55
                via-transparent
                to-clw-navy/10
              "
            />

            {/* Top Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="
                absolute
                left-4
                top-4
                sm:left-5
                sm:top-5
              "
            >
              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white/20
                  bg-clw-navy/50
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.12em]
                    text-white
                    sm:text-[10px]
                  "
                >
                  VISA • TRAVEL • SUPPORT
                </span>
              </div>
            </motion.div>

            {/* Bottom Information */}
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
                delay: 0.7,
              }}
              className="
                absolute
                bottom-3
                left-3
                right-3
                sm:bottom-4
                sm:left-4
                sm:right-4
              "
            >
              <div
                className="
                  rounded-xl
                  border
                  border-white/20
                  bg-clw-navy/55
                  p-3
                  backdrop-blur-md
                  sm:p-4
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-clw-gold
                    sm:text-[10px]
                  "
                >
                  Your Journey Starts Here
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-semibold
                    text-white
                    sm:text-sm
                  "
                >
                  Professional Visa &amp; Travel Assistance
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 11+ SERVICES FLOATING CARD */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.7,
              ease: 'easeOut',
            }}
            className="
              animate-float
              absolute
              -bottom-5
              -left-2
              rounded-xl
              bg-white
              p-3
              shadow-xl
              sm:-left-7
              sm:rounded-2xl
              sm:p-4
            "
          >
            <p
              className="
                font-heading
                text-2xl
                font-extrabold
                text-clw-blue
                sm:text-3xl
              "
            >
              11
              <span className="text-clw-gold">
                +
              </span>
            </p>

            <p
              className="
                text-[10px]
                font-medium
                text-clw-muted
                sm:text-xs
              "
            >
              Travel Services
            </p>

            <div
              className="
                mt-2
                border-t
                border-clw-dark/10
                pt-2
                sm:mt-3
                sm:pt-3
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  text-clw-navy
                  sm:text-xs
                "
              >
                Trusted Travel Support
              </p>

              <p
                className="
                  mt-0.5
                  text-[9px]
                  text-clw-muted
                  sm:text-[11px]
                "
              >
                Since 2019
              </p>
            </div>
          </motion.div>

        {/* IATA Floating Circle */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.7,
    y: -15,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -6, 0],
  }}
  transition={{
    opacity: {
      duration: 0.5,
      delay: 0.8,
    },
    scale: {
      duration: 0.5,
      delay: 0.8,
      ease: 'easeOut',
    },
    y: {
      duration: 3.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1.2,
    },
  }}
  className="
    absolute
    right-1
    top-3
    z-30
    block
    sm:-right-3
    sm:top-5
  "
>
  <div
    className="
      flex
      h-16
      w-16
      items-center
      justify-center
      overflow-hidden
      rounded-full
      border-2
      border-white
      bg-white
      p-1
      shadow-xl
      sm:h-24
      sm:w-24
      sm:border-4
    "
  >
    <img
      src="/images/logo/iata-logo.jpg"
      alt="IATA Accredited Travel Agent"
      className="
        h-full
        w-full
        object-contain
      "
    />
  </div>
</motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-clw-gold/40
          to-transparent
        "
      />
    </section>
  )
}