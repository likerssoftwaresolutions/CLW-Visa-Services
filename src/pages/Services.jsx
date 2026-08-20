import { motion } from 'framer-motion'
import ServiceGrid from '../components/ServiceGrid'
import FeaturedVisaServices from '../components/FeaturedVisaServices'
import CTASection from '../components/CTASection'
import PremiumSectionHeading from '../components/PremiumSectionHeading'
import { services } from '../data/services'
import SEO from '../components/SEO'

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const heroItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Services() {
  return (
    <>
    <SEO
  title="Visa & Travel Services in Chennai | CLW Visa Services"
  description="Explore visa assistance, passport services, certificate attestation, flight booking, hotel booking, travel insurance and other services in Chennai."
/>
      {/* =====================================================
          SERVICES HERO
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
            "url('/images/sections/visa-services-chennai-background.webp')",
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
            from-clw-navy/70
            via-clw-navy/35
            to-transparent
          "
        />

        {/* Animated glow */}
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
            min-h-[400px]
            items-center
            justify-center
            py-16
            text-center
            sm:min-h-[440px]
            sm:py-20
            lg:min-h-[470px]
          "
        >
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >

            {/* Premium pill */}
            <motion.div
              variants={heroItem}
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
              <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-clw-gold
                "
              >
                Our Services
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={heroItem}
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
              Complete Visa & Travel
              <br className="hidden sm:block" />

              <span className="text-clw-gold">
                {' '}Solutions Under One Roof
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroItem}
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
              Professional visa assistance, documentation and travel
              support designed to make your journey simple and stress-free.
            </motion.p>

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
          SERVICES GRID
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-clw-bg
          py-14
          sm:py-16
          lg:py-20
        "
      >

        {/* Travel pattern */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-[0.045]
          "
          style={{
            backgroundImage:
              "url('/images/sections/travel-services-pattern.webp')",
          }}
        />

        {/* Blue glow */}
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-8
              text-center
              sm:mb-10
            "
          >
            <PremiumSectionHeading
              eyebrow="What We Offer"
              title="Professional Travel Support"
              description="Explore our visa and travel services designed around your journey."
            />
          </motion.div>


          {/* Service cards */}
          {/* ServiceGrid already contains its own animation */}
          <ServiceGrid items={services} />

        </div>
      </section>


      {/* =====================================================
          FEATURED VISA SERVICES
      ====================================================== */}
      <FeaturedVisaServices />


      {/* =====================================================
          CTA
      ====================================================== */}
      <CTASection />
    </>
  )
}