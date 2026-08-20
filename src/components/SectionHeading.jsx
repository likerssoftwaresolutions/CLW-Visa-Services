import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} gap-4 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-clw-gold before:bg-clw-gold' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] ${
          light ? 'text-white' : 'text-clw-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-clw-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
