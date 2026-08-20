import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'

import CTASection from '../components/CTASection'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()

  const service = services.find(
    (item) => item.slug === slug
  )

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  const related = services
    .filter((item) => item.slug !== slug)
    .slice(0, 3)

  return (
    <>
      {/* =====================================================
          SERVICE HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-clw-navy">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-clw-navy/40" />

        {/* Premium Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-clw-navy/90
            via-clw-navy/75
            to-clw-navy/35
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
            HERO CONTAINER
        ================================================== */}

        <div
          className="
            container-clw
            relative
            min-h-[430px]
            sm:min-h-[460px]
            lg:min-h-[480px]
          "
        >

          {/* =================================================
              BACK TO SERVICES
              Fixed: pushed down below the site header, raised
              z-index to z-50, and increased background opacity
              so the button is always clearly visible.
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-3
              top-16
              z-50

              sm:left-6
              sm:top-24

              lg:left-8
              lg:top-28
            "
          >
            <Link
              to="/services"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/30
                bg-white/15
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-white
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-clw-gold
                hover:bg-clw-gold
                hover:text-clw-navy

                sm:gap-2.5
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              <span
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1

                  sm:text-base
                "
              >
                ←
              </span>

              <span>
                Back to Services
              </span>
            </Link>
          </motion.div>

          {/* =================================================
              CENTER HERO CONTENT
          ================================================== */}

          <div
            className="
              flex
              min-h-[430px]
              items-center
              justify-center
              px-4
              pb-16
              pt-32

              sm:min-h-[460px]
              sm:px-6
              sm:pt-28

              lg:min-h-[480px]
              lg:pt-32
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
              className="
                flex
                w-full
                max-w-4xl
                flex-col
                items-center
                text-center
              "
            >

              {/* =================================================
                  OUR SERVICES - CENTERED
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-clw-gold/40
                  bg-white/[0.08]
                  px-5
                  py-2
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
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
                  <Icon
                    size={13}
                    strokeWidth={2.2}
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
                  Our Services
                </span>

                {/* Dot */}
                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-clw-gold
                  "
                />

              </motion.div>

              {/* =================================================
                  SERVICE TITLE
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
                  mt-5
                  max-w-4xl
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
                {service.title}
              </motion.h1>

              {/* =================================================
                  GOLD ACCENT
              ================================================== */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 58,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                }}
                className="
                  mt-5
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                  shadow-[0_0_14px_rgba(212,167,44,0.45)]
                "
              />

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

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
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/75

                  sm:text-base
                "
              >
                {service.description}
              </motion.p>

            </motion.div>

          </div>

        </div>

        {/* =================================================
            BOTTOM FADE
        ================================================== */}

        {/* <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-12
            bg-gradient-to-t
            from-clw-bg
            to-transparent
          "
        /> */}

      </section>


      {/* =====================================================
          SERVICE CONTENT
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
            bottom-20
            h-80
            w-80
            rounded-full
            bg-clw-gold/5
            blur-3xl
          "
        />

        <div className="container-clw relative">

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div
            className="
              grid
              gap-8

              lg:grid-cols-[1.5fr_0.75fr]
              lg:gap-10
            "
          >

            {/* =================================================
                MAIN SERVICE CARD
            ================================================== */}

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-clw-dark/[0.06]
                bg-white
                shadow-card
              "
            >

              {/* Service Image */}

              <div
                className="
                  relative
                  h-56
                  overflow-hidden

                  sm:h-72
                "
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-clw-navy/60
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image Badge */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-clw-navy/70
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    backdrop-blur-md
                  "
                >
                  <Icon
                    size={13}
                    className="text-clw-gold"
                  />

                  {service.title}
                </div>

              </div>

              {/* Content */}

              <div className="p-6 sm:p-8">

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-clw-blue/10
                      text-clw-blue
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </span>

                  <div>

                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-clw-blue
                      "
                    >
                      Professional Support
                    </p>

                    <h2
                      className="
                        mt-0.5
                        font-heading
                        text-xl
                        font-bold
                        text-clw-navy
                      "
                    >
                      What's Included
                    </h2>

                  </div>

                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    text-clw-muted
                  "
                >
                  {service.description}
                </p>

                {/* Included Services */}

                <ul
                  className="
                    mt-7
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >

                  {service.points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-clw-dark/[0.05]
                        bg-clw-bg
                        px-4
                        py-3
                        text-sm
                        text-clw-dark
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-clw-blue/15
                        hover:bg-white
                      "
                    >

                      <CheckCircle2
                        size={17}
                        className="
                          mt-0.5
                          shrink-0
                          text-clw-gold
                        "
                      />

                      <span>
                        {point}
                      </span>

                    </motion.li>
                  ))}

                </ul>

              </div>

            </motion.div>


            {/* =================================================
                CONSULTATION CARD
            ================================================== */}

            <motion.aside
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                h-fit
                rounded-3xl
                border
                border-clw-blue/10
                bg-white
                p-6
                shadow-card

                lg:sticky
                lg:top-24
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-clw-blue/10
                  text-clw-blue
                "
              >
                <ShieldCheck size={22} />
              </div>

              <p
                className="
                  mt-5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                "
              >
                Need Assistance?
              </p>

              <h3
                className="
                  mt-2
                  font-heading
                  text-xl
                  font-bold
                  text-clw-navy
                "
              >
                Ready to get started?
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-clw-muted
                "
              >
                Speak with our team for personalised guidance on{' '}
                {service.title.toLowerCase()}.
              </p>

              <Link
                to="/contact"
                className="
                  btn-primary
                  mt-6
                  w-full
                "
              >
                Get Free Consultation

                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/919383349693?text=Hello%20CLW%20Visa%20Services%2C%20I%20would%20like%20to%20know%20more%20about%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-secondary
                  mt-3
                  w-full
                "
              >
                <MessageCircle size={17} />

                WhatsApp Us
              </a>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  border-t
                  border-clw-dark/[0.06]
                  pt-5
                  text-xs
                  text-clw-muted
                "
              >
                <CheckCircle2
                  size={14}
                  className="text-clw-gold"
                />

                Professional documentation support
              </div>

            </motion.aside>

          </div>


          {/* =================================================
              RELATED SERVICES
          ================================================== */}

          <div className="mt-14 sm:mt-16">

            <div
              className="
                mb-6
                flex
                items-end
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-clw-blue
                  "
                >
                  Explore More
                </p>

                <h2
                  className="
                    mt-1.5
                    font-heading
                    text-2xl
                    font-extrabold
                    text-clw-navy
                  "
                >
                  Related Services
                </h2>

              </div>

              <Link
                to="/services"
                className="
                  hidden
                  items-center
                  gap-1
                  text-xs
                  font-bold
                  text-clw-blue
                  transition-colors
                  hover:text-clw-gold

                  sm:inline-flex
                "
              >
                View All

                <ArrowUpRight size={14} />
              </Link>

            </div>


            {/* Related Cards */}

            <div
              className="
                grid
                gap-4

                sm:grid-cols-3
              "
            >

              {related.map((relatedService, index) => {

                const RelatedIcon =
                  relatedService.icon

                return (
                  <motion.div
                    key={relatedService.slug}
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                  >

                    <Link
                      to={`/services/${relatedService.slug}`}
                      className="
                        group
                        block
                        overflow-hidden
                        rounded-2xl
                        border
                        border-clw-dark/[0.06]
                        bg-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-clw-blue/15
                        hover:shadow-card-hover
                      "
                    >

                      {/* Related Image */}

                      <div
                        className="
                          h-32
                          overflow-hidden
                        "
                      >

                        <img
                          src={relatedService.image}
                          alt={relatedService.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                      </div>


                      {/* Related Content */}

                      <div className="p-5">

                        <RelatedIcon
                          size={19}
                          className="mb-3 text-clw-blue"
                          strokeWidth={1.8}
                        />

                        <h3
                          className="
                            font-heading
                            text-sm
                            font-bold
                            text-clw-navy
                          "
                        >
                          {relatedService.title}
                        </h3>

                        <span
                          className="
                            mt-3
                            inline-flex
                            items-center
                            gap-1
                            text-xs
                            font-semibold
                            text-clw-blue
                          "
                        >
                          Learn more

                          <ArrowRight
                            size={13}
                            className="
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />
                        </span>

                      </div>

                    </Link>

                  </motion.div>
                )
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <CTASection />
    </>
  )
}