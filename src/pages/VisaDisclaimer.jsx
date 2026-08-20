import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'

const sections = [
  {
    title: 'General Disclaimer',
    text: `CLW Visa Services provides visa assistance and documentation support to help applicants understand and prepare their visa applications. Visa approval is solely determined by the relevant embassy, consulate, immigration authority or government department.`,
  },
  {
    title: 'Visa Approval',
    text: `Submission of a visa application does not guarantee approval. The final decision regarding visa issuance, duration, entry permission and conditions remains entirely with the respective immigration authority.`,
  },
  {
    title: 'Processing Times',
    text: `Visa processing times may vary depending on the destination, visa category, embassy or consulate workload, documentation, background verification and other circumstances. Any processing time provided by CLW Visa Services is an estimated timeframe and should not be considered a guarantee.`,
  },
  {
    title: 'Applicant Responsibility',
    text: `Applicants are responsible for providing accurate, complete and genuine information and documents. CLW Visa Services is not responsible for delays, refusals or cancellations resulting from incorrect, incomplete or misleading information supplied by the applicant.`,
  },
  {
    title: 'No Guarantee',
    text: `CLW Visa Services does not guarantee visa approval, appointment availability, processing time, entry into a country or any particular immigration outcome.`,
  },
  {
    title: 'Official Authorities',
    text: `Applicants should always verify the latest visa requirements, fees, immigration rules and travel regulations with the official embassy, consulate or government immigration authority before submitting an application or making travel arrangements.`,
  },
]

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function VisaDisclaimer() {
  return (
    <main className="min-h-screen bg-clw-bg">

      {/* =====================================================
          PREMIUM VISA DISCLAIMER HERO
      ====================================================== */}

      <section
        id="visa-disclaimer-hero"
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
            "url('/images/sections/visa-disclaimer-background.webp')",
        }}
      >

        {/* Dark Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-clw-navy/
          "
        />

        {/* Premium Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-clw-navy/95
            via-clw-navy/75
            to-clw-blue/25
          "
        />

        {/* Blue Glow */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
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

        {/* Gold Glow */}
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

        {/* Hero Content */}
        <div
          className="
            container-clw
            relative
            flex
            min-h-[390px]
            items-center
            justify-center
            px-4
            py-20
            text-center

            sm:min-h-[430px]
            sm:py-24

            lg:min-h-[460px]
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
            className="
              flex
              w-full
              max-w-4xl
              flex-col
              items-center
            "
          >

            {/* =================================================
                PREMIUM PILL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                inline-flex
                items-center
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
                Visa Information
              </span>

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
                HERO TITLE
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
              Visa Disclaimer
            </motion.h1>

            {/* Gold Accent */}
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

            {/* Description */}
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
                text-white/70

                sm:text-base
              "
            >
              Important information regarding visa applications,
              processing timelines and travel documentation.
            </motion.p>

          </motion.div>

        </div>

        {/* Bottom Fade */}
        {/* <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-14
            bg-gradient-to-t
            from-clw-bg
            to-transparent
          "
        /> */}

      </section>


      {/* =====================================================
          DISCLAIMER CONTENT
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mx-auto
              mb-9
              max-w-2xl
              text-center
            "
          >

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-gold/30
                bg-clw-gold/10
                px-4
                py-1.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-clw-blue
              "
            >
              <ShieldCheck
                size={13}
                className="text-clw-gold"
              />

              Important Information
            </span>

            <h2
              className="
                mt-4
                font-heading
                text-2xl
                font-extrabold
                tracking-tight
                text-clw-navy

                sm:text-3xl
              "
            >
              Please Read Before Applying
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-clw-muted
              "
            >
              Please review the following information carefully
              before proceeding with your visa application or
              travel arrangements.
            </p>

          </motion.div>


          {/* Disclaimer Cards */}
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="
              mx-auto
              grid
              max-w-5xl
              gap-4

              sm:grid-cols-2
            "
          >

            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                variants={cardAnimation}
                className="
                  group
                  rounded-2xl
                  border
                  border-clw-dark/[0.06]
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-clw-blue/15
                  hover:shadow-card
                "
              >

                {/* Card Header */}
                <div
                  className="
                    flex
                    items-start
                    gap-4
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-clw-blue/10
                      text-[10px]
                      font-extrabold
                      text-clw-blue
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0">

                    <h3
                      className="
                        font-heading
                        text-base
                        font-bold
                        text-clw-navy
                      "
                    >
                      {section.title}
                    </h3>

                    <div
                      className="
                        mt-2
                        h-[2px]
                        w-8
                        rounded-full
                        bg-clw-gold
                        transition-all
                        duration-300
                        group-hover:w-12
                      "
                    />

                  </div>

                </div>

                {/* Card Text */}
                <p
                  className="
                    mt-4
                    text-sm
                    leading-6
                    text-clw-muted
                  "
                >
                  {section.text}
                </p>

              </motion.article>
            ))}

          </motion.div>


          {/* Important Notice */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mx-auto
              mt-8
              max-w-5xl
              rounded-2xl
              border
              border-clw-gold/20
              bg-clw-navy
              p-5
              shadow-card

              sm:p-6
            "
          >

            <div
              className="
                flex
                items-start
                gap-4
              "
            >

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-clw-gold/10
                "
              >
                <CheckCircle2
                  size={19}
                  className="text-clw-gold"
                />
              </span>

              <div>

                <h3
                  className="
                    font-heading
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Always Verify With Official Authorities
                </h3>

                <p
                  className="
                    mt-1.5
                    text-xs
                    leading-6
                    text-white/60

                    sm:text-sm
                  "
                >
                  Visa requirements, government fees, processing
                  rules and immigration regulations can change.
                  Applicants should confirm the latest information
                  directly with the relevant official authority.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  )
}