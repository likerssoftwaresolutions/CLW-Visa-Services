import { motion } from 'framer-motion'

export default function PremiumSectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const isLeft = align === 'left'

  return (
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        ${isLeft ? 'text-left' : 'text-center'}
      `}
    >
      {/* Premium rounded eyebrow */}
      <motion.span
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay: 0.1,
          ease: 'easeOut',
        }}
        className={`
          inline-flex
          items-center
          rounded-full
          border
          px-4
          py-1.5
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          backdrop-blur-sm
          sm:px-5
          sm:py-2
          sm:text-[11px]

          ${
            light
              ? 'border-clw-gold/40 bg-clw-gold/10 text-clw-gold'
              : 'border-clw-gold/35 bg-clw-gold/10 text-clw-blue'
          }
        `}
      >
        {eyebrow}
      </motion.span>

      {/* Main heading */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          mt-4
          max-w-3xl
          font-heading
          text-2xl
          font-extrabold
          leading-tight
          tracking-tight
          sm:text-3xl
          lg:text-4xl

          ${
            light
              ? 'text-white'
              : 'text-clw-navy'
          }

          ${isLeft ? '' : 'mx-auto'}
        `}
      >
        {title}
      </motion.h2>

      {/* Optional description */}
      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.28,
          }}
          className={`
            mt-3
            max-w-2xl
            text-sm
            leading-relaxed
            sm:text-base

            ${
              light
                ? 'text-white/60'
                : 'text-clw-muted'
            }

            ${isLeft ? '' : 'mx-auto'}
          `}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}