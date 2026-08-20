import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import AboutSection from '../components/AboutSection'
import PremiumSectionHeading from '../components/PremiumSectionHeading'
import ServiceGrid from '../components/ServiceGrid'
import FeaturedVisaServices from '../components/FeaturedVisaServices'
import DestinationCard from '../components/DestinationCard'
import ProcessTimeline from '../components/ProcessTimeline'
import WhyChooseUs from '../components/WhyChooseUs'
import MissionVision from '../components/MissionVision'
import ContactForm from '../components/ContactForm'
import CTASection from '../components/CTASection'
import FAQ from '../components/FAQ'
import Disclaimer from '../components/Disclaimer'
import SEO from '../components/SEO'
import { services } from '../data/services'
import { destinations } from '../data/destinations'

export default function Home() {
  return (
    <>
    <SEO
  title="Visa & Travel Services in Chennai | CLW Visa Services"
  description="CLW Visa Services provides visa assistance, passport services, travel bookings, insurance and travel solutions in Chennai."
/>
      {/* =====================================================
          HERO
      ====================================================== */}
      <HeroSection />

      {/* =====================================================
          STATS
      ====================================================== */}
      <StatsSection />

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <AboutSection />

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="relative overflow-hidden bg-clw-bg section-pad">
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-20
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

        <div className="container-clw relative">
          <PremiumSectionHeading
            eyebrow="Our Services"
            title="Complete Visa & Travel Solutions"
            description="Professional services to make your journey simple, organised and stress-free."
          />

          <div className="mt-10 sm:mt-12">
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>

      {/* =====================================================
          VISA ASSISTANCE
      ====================================================== */}
      <FeaturedVisaServices />

      {/* =====================================================
          DESTINATIONS
      ====================================================== */}
      <section className="relative overflow-hidden bg-clw-bg section-pad">
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

        <div className="container-clw relative">
          <div
            className="
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <PremiumSectionHeading
              align="left"
              eyebrow="Visa Destinations"
              title="Explore the World With Confidence"
              description="Visa assistance for popular destinations across Europe, Asia, the Middle East and beyond."
            />

            <Link
              to="/destinations"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-5
                py-2.5
                text-xs
                font-bold
                text-clw-blue
                shadow-sm
                transition-all
                duration-300
                hover:border-clw-blue
                hover:bg-clw-blue
                hover:text-white
                sm:mb-1
              "
            >
              View All Destinations

              <span
                className="
                  ml-2
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:mt-12
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {destinations.slice(0, 6).map((destination, index) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <ProcessTimeline />

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <WhyChooseUs />

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <MissionVision />
      {/* =====================================================
          CTA
      ====================================================== */}
      <CTASection />

      {/* =====================================================
          CONTACT + GOOGLE MAP
      ====================================================== */}
      <section className="relative overflow-hidden bg-clw-bg section-pad">
        <div className="container-clw">

          {/* Contact Heading */}
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
            className="mb-10 text-center"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-blue
                shadow-[0_5px_18px_rgba(23,27,77,0.06)]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />
              Get In Touch
            </span>

            <h2
              className="
                mx-auto
                mt-4
                max-w-2xl
                font-heading
                text-3xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-4xl
              "
            >
              Let&apos;s Start Your Journey
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-relaxed
                text-clw-muted
              "
            >
              Have questions about your visa or travel plans?
              Our team is here to help.
            </p>
          </motion.div>

          {/* Form + Map */}
          <div
            className="
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-2
            "
          >

            {/* ================= CONTACT FORM ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-clw-dark/[0.06]
                bg-white
                p-5
                shadow-[0_10px_35px_rgba(23,27,77,0.06)]
                sm:p-6
              "
            >
              <ContactForm />
            </motion.div>

            {/* ================= GOOGLE MAP ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                min-h-[380px]
                overflow-hidden
                rounded-2xl
                border
                border-clw-dark/[0.06]
                bg-white
                shadow-[0_10px_35px_rgba(23,27,77,0.06)]
              "
            >
              {/* Map */}
              <iframe
                title="CLW Visa Services Location"
                src="https://www.google.com/maps?q=Alsa+Mall+Montieth+Road+Egmore+Chennai+600008&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Location badge */}
              {/* <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-clw-navy/90
                  px-3
                  py-2
                  text-[10px]
                  font-bold
                  text-white
                  shadow-lg
                  backdrop-blur-md
                "
              >
                <MapPin
                  size={13}
                  className="text-clw-gold"
                />
                CLW Visa Services
              </div> */}
            </motion.div>

          </div>
        </div>
      </section>

      

      {/* =====================================================
          FAQ
      ====================================================== */}
      <FAQ />

      {/* =====================================================
          DISCLAIMER
      ====================================================== */}
      <Disclaimer />
    </>
  )
}