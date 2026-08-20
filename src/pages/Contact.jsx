import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  ArrowDown,
  Clock,
  MessageCircle,
} from 'lucide-react'

import ContactForm from '../components/ContactForm'
import { companyInfo } from '../data/content'
import SEO from '../components/SEO'

export default function Contact() {
  return (
    <>
    <SEO
  title="Contact CLW Visa Services | Visa Assistance in Chennai"
  description="Contact CLW Visa Services in Chennai for visa assistance, passport services, travel bookings and international travel support."
/>
      {/* =====================================================
          PREMIUM CONTACT HERO
      ====================================================== */}
      <section className="relative min-h-[480px] overflow-hidden bg-clw-navy sm:min-h-[530px]">

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
              "url('/images/sections/contact-clw-visa-services.jpg')",
          }}
        />

        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-clw-navy via-clw-navy/80 to-clw-navy/25" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-clw-navy/60 to-transparent" />

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
            top-10
            h-72
            w-72
            rounded-full
            bg-clw-blue-2/20
            blur-3xl
          "
        />

        {/* Hero Content */}
        <div className="container-clw relative flex min-h-[480px] items-center sm:min-h-[530px]">

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

            {/* Pill */}
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

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-gold
                  sm:text-[10px]
                "
              >
                Get In Touch
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
              Let's Start
              <span className="block text-clw-gold">
                Your Journey
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
              Have questions about your visa or travel plans?
              Reach out to CLW Visa Services and let our team
              guide you through the next steps.
            </motion.p>

            {/* Quick Contact Pills */}
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
              className="mt-7 flex flex-wrap gap-2.5"
            >

              <a
                href={`tel:${companyInfo.phones[0]?.replace(/\s/g, '')}`}
                className="
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
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Phone
                  size={13}
                  className="text-clw-gold"
                />
                Call Us
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="
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
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Mail
                  size={13}
                  className="text-clw-gold"
                />
                Email Us
              </a>

              <a
                href="https://wa.me/919383349693"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#25D366]/30
                  bg-[#25D366]/10
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-[#25D366]
                  backdrop-blur-md
                  transition-all
                  hover:bg-[#25D366]
                  hover:text-white
                "
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>

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
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-1
            text-white/40
            sm:flex
          "
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
            Contact
          </span>

          <ArrowDown size={13} />
        </motion.div>

      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-clw-bg py-14 sm:py-18 lg:py-20">

        {/* Background Glow */}
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

          {/* Section Heading */}
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-9"
          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/10
                bg-clw-blue/[0.04]
                px-3
                py-1.5
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                "
              >
                Contact Information
              </span>
            </div>

            <h2
              className="
                mt-3
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy
                sm:text-3xl
              "
            >
              We're Here to Help
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-6 text-clw-muted sm:text-sm">
              Visit our office or contact us through your preferred channel.
            </p>

          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-8">

            {/* ================= LEFT ================= */}
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
              }}
              className="lg:col-span-5"
            >

              {/* Company Card */}
              <div
                className="
                  rounded-2xl
                  border
                  border-clw-dark/[0.07]
                  bg-white
                  p-5
                  shadow-[0_12px_35px_rgba(23,27,77,0.06)]
                  sm:p-6
                "
              >

                <h3 className="font-heading text-lg font-extrabold text-clw-navy">
                  {companyInfo.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-clw-muted">
                  Visit us or reach out through any of the channels below.
                </p>

                <div className="mt-5 space-y-3.5">

                  {/* Address */}
                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      "
                    >
                      <MapPin size={16} />
                    </div>

                    <div className="text-xs leading-5 text-clw-dark">
                      {companyInfo.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>

                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      "
                    >
                      <Phone size={16} />
                    </div>

                    <div className="text-xs">

                      {companyInfo.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="
                            block
                            leading-5
                            transition-colors
                            hover:text-clw-blue
                          "
                        >
                          {phone}
                        </a>
                      ))}

                    </div>

                  </div>

                  {/* Email */}
                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      "
                    >
                      <Mail size={16} />
                    </div>

                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="
                        self-center
                        text-xs
                        transition-colors
                        hover:text-clw-blue
                      "
                    >
                      {companyInfo.email}
                    </a>

                  </div>

                  {/* Office Hours */}
                  <div className="flex gap-3">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-clw-blue/[0.06]
                        text-clw-blue
                      "
                    >
                      <Clock size={16} />
                    </div>

                    <div className="text-xs leading-5">
                      <p className="font-bold text-clw-navy">
                        Office Hours
                      </p>

                      <p className="text-clw-muted">
                        Contact us for current availability
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Google Map */}
              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-2xl
                  border
                  border-clw-dark/[0.07]
                  bg-white
                  p-1.5
                  shadow-[0_12px_35px_rgba(23,27,77,0.06)]
                "
              >
                <iframe
                  title="CLW Visa Services location"
                  src="https://www.google.com/maps?q=Alsa+Mall+Montieth+Road+Egmore+Chennai+600008&output=embed"
                  width="100%"
                  height="250"
                  style={{
                    border: 0,
                    borderRadius: '12px',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </motion.div>

            {/* ================= RIGHT FORM ================= */}
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
              }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}