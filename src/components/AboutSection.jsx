import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { companyInfo } from '../data/content'

const reviews = [
  {
    rating: '5.0',
    text: 'Excellent Service',
  },
  {
    rating: '5.0',
    text: 'Trusted Travel Support',
  },
  {
    rating: '5.0',
    text: 'Highly Recommended',
  },
]

export default function AboutSection() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const review = reviews[currentReview]

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-clw grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* =====================================================
            LEFT - ABOUT IMAGE
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            order-2
            mx-auto
            w-full
            max-w-md
            lg:order-1
          "
        >

          {/* =================================================
              MAIN IMAGE
          ================================================== */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            className="
              relative
              aspect-[4/5]
              w-full
              overflow-hidden
              rounded-[1.75rem]
              bg-clw-navy
              shadow-[0_25px_60px_-20px_rgba(23,27,77,0.35)]
            "
          >

            {/* About Image */}
            <img
              src="/images/logo/clw-visa-services-logo.png"
              alt="CLW Visa Services - Visa and Travel Services"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
              loading="lazy"
            />

            {/* Premium image overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-clw-navy/75
                via-transparent
                to-clw-navy/10
              "
            />

            {/* Subtle gold glow */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-48
                w-48
                rounded-full
                bg-clw-gold/10
                blur-3xl
              "
            />

            {/* =================================================
                BOTTOM INFORMATION
            ================================================== */}
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
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              className="
                absolute
                bottom-5
                left-5
                right-5
                sm:bottom-6
                sm:left-6
                sm:right-6
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-clw-navy/55
                  p-4
                  backdrop-blur-md
                "
              >
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-clw-gold
                  "
                >
                  Trusted Travel Support
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Visa &amp; Travel Solutions Since{' '}
                  {companyInfo.established}
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* =================================================
              GOLD BORDER ACCENT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 12,
              y: -12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              pointer-events-none
              absolute
              -right-3
              -top-3
              -z-10
              hidden
              h-full
              w-full
              rounded-[1.75rem]
              border-2
              border-clw-gold/35
              sm:block
            "
          />

          {/* =================================================
              ANIMATED REVIEW BADGE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
           className="
  absolute
  -right-3
  -top-5
  z-20
  rounded-2xl
  border
  border-clw-gold/40
  bg-white
  px-4
  py-3
  shadow-[0_18px_45px_rgba(23,27,77,0.2)]
  sm:-right-6
  sm:py-4
  sm:px-5
"
          >

            {/* Floating animation */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              {/* =================================================
                  RATING
              ================================================== */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{
                    opacity: 0,
                    x: -18,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 18,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: 'easeOut',
                  }}
                  className="flex items-center gap-2"
                >

                  {/* Rating Number */}
                  <span
                    className="
                      font-heading
                      text-2xl
                      font-black
                      tracking-tight
                      text-clw-navy
                      sm:text-3xl
                    "
                  >
                    {review.rating}
                  </span>

                  {/* =================================================
                      GOLD STARS
                  ================================================== */}
                  <div className="flex items-center gap-0.5">

                    {[0, 1, 2, 3, 4].map((star, index) => (
                      <motion.span
                        key={star}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          rotate: -30,
                        }}
                        animate={{
                          opacity: 1,
                          scale: [1, 1.12, 1],
                          rotate: 0,
                        }}
                        transition={{
                          opacity: {
                            duration: 0.3,
                            delay: index * 0.07,
                          },
                          rotate: {
                            duration: 0.3,
                            delay: index * 0.07,
                          },
                          scale: {
                            duration: 1.2,
                            delay: index * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2.2,
                            ease: 'easeInOut',
                          },
                        }}
                        className="
                          text-clw-gold
                          drop-shadow-[0_1px_2px_rgba(212,167,44,0.45)]
                        "
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.57l-5.9 3.11 1.13-6.58-4.78-4.66 6.6-.96L12 2.5z" />
                        </svg>
                      </motion.span>
                    ))}

                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  CHANGING REVIEW TEXT
              ================================================== */}
              <div className="relative mt-1 h-4 overflow-hidden">

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentReview}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      left-0
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-clw-muted
                      sm:text-[10px]
                    "
                  >
                    {review.text}
                  </motion.p>
                </AnimatePresence>

              </div>

              {/* =================================================
                  GOLD ANIMATED LINE
              ================================================== */}
              <motion.div
                animate={{
                  scaleX: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  mt-2
                  h-[2px]
                  origin-left
                  rounded-full
                  bg-clw-gold
                "
              />

            </motion.div>

          </motion.div>

        </motion.div>

        {/* =====================================================
            RIGHT - CONTENT
        ====================================================== */}
        <motion.div
  initial={{
    opacity: 0,
    x: 35,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="order-1 lg:order-2"
>
  {/* ABOUT HEADER */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: 0.1,
      }}
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-clw-gold/35
        bg-clw-gold/10
        px-4
        py-1.5
        text-[10px]
        font-extrabold
        uppercase
        tracking-[0.16em]
        text-clw-gold
        sm:px-5
        sm:py-2
        sm:text-[11px]
      "
    >
      About CLW Visa Services
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: 0.18,
      }}
      className="
        mt-4
        max-w-xl
        font-heading
        text-2xl
        font-extrabold
        leading-tight
        tracking-tight
        text-clw-navy
        sm:text-3xl
        lg:text-4xl
      "
    >
      Your Trusted Visa & Travel Partner
    </motion.h2>
  </motion.div>

  {/* Your existing paragraph/content continues here */}

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-clw-muted
              sm:mt-6
              sm:text-base
            "
          >
            CLW Visa Services was established in{' '}
            {companyInfo.established} with a vision to provide reliable
            and professional visa and travel services to individuals,
            families, students, business travellers and corporate clients.
          </p>

          {/* =================================================
              FOUNDERS
          ================================================== */}
          <div
            className="
              mt-6
              rounded-2xl
              border
              border-clw-dark/[0.06]
              bg-clw-bg/70
              p-5
              sm:p-6
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-clw-blue
              "
            >
              Founded By
            </p>

            <div className="mt-3 space-y-2">

              {companyInfo.founders.map((founder) => (
                <motion.div
                  key={founder}
                  whileHover={{
                    x: 3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    font-semibold
                    text-clw-navy
                  "
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-clw-gold"
                  />

                  <span>{founder}</span>
                </motion.div>
              ))}

            </div>
          </div>

          {/* =================================================
              KEY POINTS
          ================================================== */}
          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >

            {[
              {
                text: 'Personalised Service',
                color: 'text-clw-blue',
                bg: 'bg-clw-blue/10',
              },
              {
                text: 'Professional Guidance',
                color: 'text-clw-gold',
                bg: 'bg-clw-gold/10',
              },
              {
                text: 'Documentation Support',
                color: 'text-clw-blue',
                bg: 'bg-clw-blue/10',
              },
              {
                text: 'Dedicated Support',
                color: 'text-clw-gold',
                bg: 'bg-clw-gold/10',
              },
            ].map((point, index) => (
              <motion.div
                key={point.text}
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
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3"
              >

                <span
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${point.bg}
                  `}
                >
                  <CheckCircle2
                    size={17}
                    className={point.color}
                  />
                </span>

                <span className="text-sm font-medium text-clw-dark">
                  {point.text}
                </span>

              </motion.div>
            ))}

          </div>

          {/* =================================================
              ESTABLISHED
          ================================================== */}
          <motion.p
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
              duration: 0.5,
              delay: 0.25,
            }}
            className="
              mt-6
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-clw-gold
            "
          >
            Established in {companyInfo.established}
          </motion.p>

          {/* =================================================
              CTA
          ================================================== */}
          <Link
            to="/about"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-clw-blue
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-clw-blue/15
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-clw-navy
              hover:shadow-xl
            "
          >
            Discover Our Story

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>

        </motion.div>

      </div>
    </section>
  )
}