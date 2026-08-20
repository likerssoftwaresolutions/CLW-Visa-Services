import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-clw-navy pt-36 pb-20 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-clw-blue-2/25 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
          <pattern id="ph-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ph-dots)" />
        </svg>
      </div>
      <div className="container-clw relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-clw-gold before:bg-clw-gold justify-center"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-base text-white/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
