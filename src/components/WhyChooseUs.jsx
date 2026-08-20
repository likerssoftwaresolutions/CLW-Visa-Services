import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { whyChooseUs } from '../data/content'

const shortTitles = {
  'Professional Guidance': 'Expert Guidance',
  'Personalised Support': 'Personal Support',
  'Complete Travel Solutions': 'Travel Support',
  'Transparent Process': 'Transparent Process',
  'Experienced Team': 'Experienced Team',
  'Reliable Service': 'Reliable Service',
}

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-clw-navy
        py-14
        sm:py-16
      "
      style={{
        backgroundImage: "url('/images/why-choose-us.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark premium overlay */}
      <div className="absolute inset-0 bg-clw-navy/[0.93]" />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-clw-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-clw-blue-2/15 blur-3xl" />

      <div className="container-clw relative">

        {/* HEADER */}
<motion.div
  initial={{ opacity: 0, y: 15, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex flex-col items-center text-center"
>
  {/* Premium rounded eyebrow */}
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      delay: 0.1,
      ease: 'easeOut',
    }}
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-clw-gold/40
      bg-clw-gold/10
      px-4
      py-1.5
      text-[10px]
      font-extrabold
      uppercase
      tracking-[0.18em]
      text-clw-gold
      shadow-[0_4px_15px_rgba(212,167,44,0.08)]
      backdrop-blur-sm
      sm:px-5
      sm:py-2
      sm:text-[11px]
    "
  >
    Why Choose CLW?
  </motion.span>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.55,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      mt-4
      max-w-3xl
      font-heading
      text-2xl
      font-extrabold
      leading-tight
      tracking-tight
      text-white
      sm:text-3xl
      lg:text-4xl
    "
  >
    Trusted Support. Seamless Travel.
  </motion.h2>
</motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="
            mt-8
            grid
            grid-cols-2
            gap-2.5
            sm:grid-cols-2
            sm:gap-3
            lg:grid-cols-3
          "
        >
          {whyChooseUs.map((item, index) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 16,
                  scale: 0.97,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/[0.10]
                bg-white/[0.055]
                p-3
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-clw-gold/30
                hover:bg-white/[0.09]
                hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)]
                sm:p-4
              "
            >

              {/* Subtle gold glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-clw-gold/10
                  blur-2xl
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  right-2.5
                  top-2.5
                  text-[7px]
                  font-bold
                  tracking-widest
                  text-white/20
                "
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                className="
                  mb-2.5
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-clw-gold/20
                  bg-clw-gold/[0.08]
                  text-clw-gold
                "
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={2}
                />
              </motion.div>

              {/* Short title */}
              <h3
                className="
                  font-heading
                  text-[12px]
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-clw-gold
                  sm:text-[13px]
                "
              >
                {shortTitles[item.title] || item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-1
                  line-clamp-2
                  text-[9px]
                  leading-[1.55]
                  text-white/50
                  sm:text-[10px]
                "
              >
                {item.description}
              </p>

              {/* Premium bottom highlight */}
              {/* <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  absolute
                  bottom-0
                  left-3
                  h-[1px]
                  w-8
                  origin-left
                  rounded-full
                  bg-clw-gold/70
                "
              /> */}

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}