import { motion } from 'framer-motion'
import { processSteps } from '../data/content'
import PremiumSectionHeading from './PremiumSectionHeading'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-clw-bg py-16 sm:py-20">
      <div className="container-clw">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
         <PremiumSectionHeading
  eyebrow="Our Process"
  title="Simple. Clear. Hassle-Free."
  description="A straightforward process designed to make your visa journey easier."
/>
        </motion.div>

        {/* =====================================================
            DESKTOP TIMELINE
        ====================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-8 hidden lg:block"
        >

          {/* Base Line */}
          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[29px]
              h-[2px]
              rounded-full
              bg-clw-navy/10
            "
          />

          {/* Animated Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[29px]
              h-[2px]
              origin-left
              rounded-full
              bg-clw-gold
            "
          />

          {/* Steps */}
          <div className="grid grid-cols-6 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={item}
                className="group relative"
              >

                {/* Animated Circle */}
                <motion.div
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    relative
                    z-10
                    mb-5
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-clw-blue
                    text-sm
                    font-extrabold
                    text-white
                    shadow-[0_8px_20px_rgba(23,27,77,0.18)]
                    transition-colors
                    duration-300
                    group-hover:bg-clw-navy
                  "
                >
                  {step.number}

                  {/* Pulsing ring */}
                  <motion.span
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.45, 0, 0.45],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: index * 0.25,
                      ease: 'easeOut',
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-clw-gold
                    "
                  />

                  {/* Gold dot */}
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="
                      absolute
                      -right-0.5
                      -top-0.5
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-clw-gold
                      ring-2
                      ring-white
                    "
                  />
                </motion.div>

                {/* Content */}
                <h3
                  className="
                    font-heading
                    text-sm
                    font-extrabold
                    text-clw-navy
                    transition-colors
                    duration-300
                    group-hover:text-clw-blue
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    max-w-[170px]
                    text-[11px]
                    leading-relaxed
                    text-clw-muted
                  "
                >
                  {step.description}
                </p>

                {/* Step indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '32px' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="
                    mt-3
                    h-[2px]
                    rounded-full
                    bg-clw-gold
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            MOBILE / TABLET TIMELINE
        ====================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            relative
            mt-10
            space-y-7
            lg:hidden
          "
        >

          {/* Vertical Base Line */}
          <div
            className="
              absolute
              left-[27px]
              top-2
              bottom-2
              w-[2px]
              rounded-full
              bg-clw-navy/10
            "
          />

          {/* Animated Gold Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[27px]
              top-2
              bottom-2
              w-[2px]
              origin-top
              rounded-full
              bg-clw-gold
            "
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={item}
              className="group relative flex gap-4"
            >

              {/* Circle */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-white
                  bg-clw-blue
                  text-sm
                  font-extrabold
                  text-white
                  shadow-[0_6px_18px_rgba(23,27,77,0.16)]
                "
              >
                {step.number}

                {/* Pulse */}
                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.25,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-clw-gold
                  "
                />
              </motion.div>

              {/* Content Card */}
              <motion.div
                whileHover={{ x: 4 }}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-clw-navy/[0.06]
                  bg-white
                  p-4
                  shadow-[0_6px_20px_rgba(23,27,77,0.06)]
                  transition-shadow
                  duration-300
                  group-hover:shadow-[0_10px_25px_rgba(23,27,77,0.10)]
                "
              >
                <h3
                  className="
                    font-heading
                    text-sm
                    font-extrabold
                    text-clw-navy
                    group-hover:text-clw-blue
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-1.5
                    text-[11px]
                    leading-relaxed
                    text-clw-muted
                  "
                >
                  {step.description}
                </p>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}