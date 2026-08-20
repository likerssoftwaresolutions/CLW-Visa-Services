import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { visaTypes } from '../data/services'
import PremiumSectionHeading from './PremiumSectionHeading'

const gridAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function FeaturedVisaServices() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-clw">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
         <PremiumSectionHeading
  align="left"
  eyebrow="Visa Assistance"
  title="Expert Guidance for Your Global Journey"
  description="Professional visa support to help you travel with confidence."
/>

          <Link
            to="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-1.5
              self-start
              rounded-full
              border
              border-clw-blue/15
              bg-clw-blue/[0.04]
              px-4
              py-2
              text-[11px]
              font-bold
              text-clw-blue
              transition-all
              duration-200
              hover:border-clw-blue
              hover:bg-clw-blue
              hover:text-white
              sm:self-auto
            "
          >
            Check Visa Requirements

            <ArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </motion.div>

        {/* ================= VISA GRID ================= */}
        <motion.div
          variants={gridAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-4
          "
        >
          {visaTypes.map((visa, index) => (
            <motion.article
              key={visa.title}
              variants={cardAnimation}
              whileHover={{ y: -5 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-clw-navy/[0.08]
                bg-white
                shadow-[0_8px_25px_rgba(23,27,77,0.08)]
                transition-all
                duration-300
                hover:border-clw-blue/15
                hover:shadow-[0_16px_35px_rgba(23,27,77,0.14)]
              "
            >

              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  aspect-[16/8]
                  overflow-hidden
                  bg-clw-navy
                "
              >
                <img
                  src={visa.image}
                  alt={visa.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Premium overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-clw-navy/55
                    via-transparent
                    to-transparent
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/35
                    bg-white/15
                    text-[8px]
                    font-bold
                    text-white
                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="bg-white p-4 sm:p-4.5">

                {/* Title */}
                <h3
                  className="
                    font-heading
                    text-[14px]
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-clw-navy
                    transition-colors
                    duration-200
                    group-hover:text-clw-blue
                    sm:text-[15px]
                  "
                >
                  {visa.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-1.5
                    line-clamp-2
                    text-[10px]
                    leading-[1.55]
                    text-clw-muted
                    sm:text-[11px]
                  "
                >
                  {visa.description}
                </p>

                {/* Explore */}
                <Link
                  to="/contact"
                  className="
                    group/link
                    mt-3
                    inline-flex
                    items-center
                    gap-1
                    text-[10px]
                    font-bold
                    text-clw-blue
                    transition-colors
                    duration-200
                    hover:text-clw-gold
                    sm:text-[11px]
                  "
                >
                  Explore Visa

                  <ArrowUpRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-0.5
                      group-hover/link:-translate-y-0.5
                    "
                  />
                </Link>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}