import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  })

  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let animationFrame
    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setValue(Math.floor(easedProgress * to))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setValue(to)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const stats = [
  {
    value: 2019,
    label: 'Established',
    type: 'year',
  },
  {
    value: 11,
    suffix: '+',
    label: 'Travel Services',
  },
  {
    value: 9,
    suffix: '+',
    label: 'Visa Destinations',
  },
]

export default function StatsSection() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-12">
      <div className="container-clw">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-clw-dark/5
            bg-white
            p-6
            shadow-[0_15px_50px_-20px_rgba(23,27,77,0.25)]
            sm:p-8
            lg:p-9
          "
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-clw-blue/5 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-clw-gold/5 blur-3xl" />

          <div
            className="
              relative
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-clw-dark/10
              sm:grid-cols-4
              sm:divide-y-0
            "
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="
                  group
                  relative
                  px-4
                  py-5
                  text-center
                  sm:px-5
                  sm:py-2
                  sm:text-left
                  lg:px-7
                "
              >
                {/* Number */}
                <motion.p
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    font-heading
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-clw-blue
                    sm:text-4xl
                    lg:text-[2.5rem]
                  "
                >
                  {stat.type === 'year' ? (
                    <CountUp to={stat.value} />
                  ) : (
                    <CountUp
                      to={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                </motion.p>

                {/* Label */}
                <p
                  className="
                    mt-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-clw-muted
                    sm:text-xs
                  "
                >
                  {stat.label}
                </p>

                {/* Animated gold indicator */}
                <motion.span
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    width: 24,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.35,
                  }}
                  className="
                    mt-3
                    block
                    h-[2px]
                    rounded-full
                    bg-clw-gold
                  "
                />

                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-clw-blue/[0.02]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </motion.div>
            ))}

            {/* Chennai */}
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
                amount: 0.5,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: 'easeOut',
              }}
              className="
                group
                relative
                px-4
                py-5
                text-center
                sm:px-5
                sm:py-2
                sm:text-left
                lg:px-7
              "
            >
              <motion.p
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-heading
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-clw-navy
                  sm:text-3xl
                  lg:text-[2.2rem]
                "
              >
                Chennai
              </motion.p>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-clw-muted
                  sm:text-xs
                "
              >
                Head Office
              </p>

              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: 24,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.65,
                }}
                className="
                  mt-3
                  block
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  bg-clw-blue/[0.02]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}