import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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

export default function ServiceCard({
  service,
  index = 0,
}) {
  return (
    <motion.article
      variants={cardAnimation}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
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
          src={service.image}
          alt={service.title}
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

        {/* Premium image overlay */}
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

        {/* Service number */}
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

        {/* Service category */}
        {/* <span
          className="
            absolute
            bottom-3
            left-3
            rounded-full
            border
            border-white/30
            bg-white/15
            px-2.5
            py-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            backdrop-blur-md
          "
        >
          CLW Services
        </span> */}
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
          {service.title}
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
          {service.short}
        </p>

        {/* Explore */}
        <Link
          to={`/services/${service.slug}`}
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
          Explore Service

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
  )
}