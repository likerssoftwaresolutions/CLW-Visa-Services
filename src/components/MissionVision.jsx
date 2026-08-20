import { motion } from 'framer-motion'
import { Target, Eye, ArrowUpRight } from 'lucide-react'

const cards = [
  {
    type: 'Mission',
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide reliable, transparent and personalised visa and travel solutions while making the travel preparation process simple and convenient for our clients.',
    dark: true,
  },
  {
    type: 'Vision',
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become a trusted and preferred visa and travel services provider, recognised for professional service, customer care and dependable travel solutions.',
    dark: false,
  },
]

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-clw-bg py-14 sm:py-16 lg:py-20">

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-clw-blue/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-clw-gold/5
          blur-3xl
        "
      />

      <div className="container-clw relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center"
        >
          <span
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
              tracking-[0.18em]
              text-clw-blue
              sm:px-5
              sm:py-2
              sm:text-[11px]
            "
          >
            Our Purpose
          </span>

          <h2
            className="
              mx-auto
              mt-4
              max-w-2xl
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
            Driven by Purpose. Built on Trust.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.article
                key={card.type}
                initial={{
                  opacity: 0,
                  y: 22,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-5
                  shadow-[0_10px_30px_rgba(23,27,77,0.08)]
                  transition-all
                  duration-300
                  sm:p-6
                  ${
                    card.dark
                      ? `
                        bg-clw-navy
                        text-white
                        hover:shadow-[0_18px_40px_rgba(23,27,77,0.18)]
                      `
                      : `
                        border
                        border-clw-navy/[0.07]
                        bg-white
                        text-clw-navy
                        hover:border-clw-blue/15
                        hover:shadow-[0_18px_40px_rgba(23,27,77,0.12)]
                      `
                  }
                `}
              >

                {/* Decorative circle */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    transition-transform
                    duration-500
                    group-hover:scale-125
                    ${
                      card.dark
                        ? 'bg-white/[0.06]'
                        : 'bg-clw-gold/[0.08]'
                    }
                  `}
                />

                {/* Number */}
                <span
                  className={`
                    absolute
                    right-4
                    top-4
                    text-[8px]
                    font-extrabold
                    tracking-[0.18em]
                    ${
                      card.dark
                        ? 'text-white/25'
                        : 'text-clw-navy/20'
                    }
                  `}
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={`
                    relative
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${
                      card.dark
                        ? 'border-clw-gold/25 bg-clw-gold/10 text-clw-gold'
                        : 'border-clw-blue/10 bg-clw-blue/[0.06] text-clw-blue'
                    }
                  `}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* Small category */}
                <p
                  className={`
                    mb-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    ${
                      card.dark
                        ? 'text-clw-gold'
                        : 'text-clw-blue'
                    }
                  `}
                >
                  CLW {card.type}
                </p>

                {/* Title */}
                <h3
                  className={`
                    font-heading
                    text-lg
                    font-extrabold
                    tracking-tight
                    sm:text-xl
                    ${
                      card.dark
                        ? 'text-white'
                        : 'text-clw-navy'
                    }
                  `}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                    mt-2
                    max-w-xl
                    text-[11px]
                    leading-[1.65]
                    sm:text-xs
                    ${
                      card.dark
                        ? 'text-white/60'
                        : 'text-clw-muted'
                    }
                  `}
                >
                  {card.description}
                </p>

                {/* Bottom arrow */}
                <div
                  className={`
                    mt-4
                    flex
                    items-center
                    gap-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wider
                    ${
                      card.dark
                        ? 'text-clw-gold'
                        : 'text-clw-blue'
                    }
                  `}
                >
                  Learn More

                  <ArrowUpRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>

              </motion.article>
            )
          })}

        </div>
      </div>
    </section>
  )
}