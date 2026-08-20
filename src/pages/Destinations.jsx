import { motion } from 'framer-motion'
import DestinationCard from '../components/DestinationCard'
import CTASection from '../components/CTASection'
import PremiumSectionHeading from '../components/PremiumSectionHeading'
import { destinations } from '../data/destinations'
import SEO from '../components/SEO'

const gridAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Destinations() {
  return (
    <>
    <SEO
  title="Visa Assistance for Worldwide Destinations | CLW Visa Services"
  description="Get visa assistance for the UK, USA, Canada, Australia, New Zealand, Schengen countries, Europe, Asia, Africa and the Middle East."
/>
      {/* =====================================================
          DESTINATION HERO
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
      "url('/images/sections/travel-destinations-background.webp')",
  }}
>
  {/* Premium Dark Overlay */}
  <div className="absolute inset-0 bg-clw-navy/45" />

  {/* Left Readability Gradient */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-clw-navy/65
      via-clw-navy/30
      to-transparent
    "
  />

  {/* Animated Blue Glow */}
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

  {/* Animated Gold Glow */}
  <motion.div
    animate={{
      opacity: [0.12, 0.28, 0.12],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      pointer-events-none
      absolute
      -bottom-20
      left-1/2
      h-64
      w-64
      -translate-x-1/2
      rounded-full
      bg-clw-gold/10
      blur-3xl
    "
  />

  {/* Hero Content */}
  <div
    className="
      container-clw
      relative
      flex
      min-h-[420px]
      items-center
      justify-center
      py-20
      text-center
      sm:min-h-[470px]
      sm:py-24
      lg:min-h-[500px]
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
      {/* Pill */}
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
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-1.5 w-1.5 rounded-full bg-clw-gold"
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
          Visa Destinations
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
        Explore the World

        <br className="hidden sm:block" />

        <span className="text-clw-gold">
          {' '}With Confidence
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
        Visa guidance across a wide range of countries and
        regions, with professional support from application
        to travel.
      </motion.p>

      {/* Small Gold Accent */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.45,
        }}
        className="
          mx-auto
          mt-7
          h-[2px]
          w-12
          origin-center
          rounded-full
          bg-clw-gold
        "
      />
    </motion.div>
  </div>
</section>
      {/* =====================================================
          DESTINATIONS GRID
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-18
          lg:py-20
        "
      >
        {/* =================================================
            TRAVEL PATTERN
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.08]
          "
          style={{
            backgroundImage:
              "url('/images/sections/travel-services-pattern.webp')",
          }}
        />

        {/* Soft blue glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-clw-blue/5
            blur-3xl
          "
        />

        {/* Soft gold glow */}
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
          {/* =================================================
              SECTION HEADING
          ================================================== */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-9 text-center sm:mb-11"
          >
            <PremiumSectionHeading
              eyebrow="Our Destinations"
              title="Visa Assistance Across the Globe"
              description="Explore popular destinations and discover professional visa assistance tailored to your travel plans."
            />
          </motion.div>

          {/* =================================================
              DESTINATION CARDS
          ================================================== */}
          <motion.div
            variants={gridAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                variants={cardAnimation}
              >
                <DestinationCard
                  destination={destination}
                  index={index}
                />
              </motion.div>
            ))}
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