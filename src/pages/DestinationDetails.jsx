import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Globe2,
} from 'lucide-react'
import { destinations } from '../data/destinations'

export default function DestinationDetails() {
  const { slug } = useParams()

  const destination = destinations.find(
    (item) => item.slug === slug
  )

  if (!destination) {
    return (
      <section className="min-h-[60vh] bg-clw-bg">
        <div className="container-clw flex min-h-[60vh] flex-col items-center justify-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-clw-blue/10 text-clw-blue">
            <Globe2 size={24} />
          </div>

          <h1 className="mt-4 font-heading text-2xl font-extrabold text-clw-navy sm:text-3xl">
            Destination Not Found
          </h1>

          <p className="mt-2 text-sm text-clw-muted">
            The destination you are looking for is unavailable.
          </p>

          <Link
            to="/destinations"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-clw-dark/10
              bg-white
              px-3
              py-1.5
              text-[10px]
              font-bold
              text-clw-navy
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-clw-blue/20
              hover:text-clw-blue

              sm:gap-2.5
              sm:px-6
              sm:py-3
              sm:text-sm
            "
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Destinations
          </Link>

        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-clw-bg pb-12 pt-24 sm:py-16 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-clw-blue/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-clw-gold/5 blur-3xl" />

      <div className="container-clw relative">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            to="/destinations"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-clw-dark/10
              bg-white
              px-3
              py-1.5
              text-[10px]
              font-bold
              text-clw-navy
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-clw-blue/20
              hover:text-clw-blue

              sm:gap-2
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Destinations
          </Link>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white p-1.5 shadow-[0_15px_45px_rgba(23,27,77,0.10)]"
          >
            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[380px] lg:h-full lg:min-h-[470px]">

              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clw-navy/65 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-clw-navy/45 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-white">
                  {destination.tag}
                </span>
              </div>

              {/* Image Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-clw-gold">
                  Visa Destination
                </p>

                <h2 className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {destination.name}
                </h2>
              </div>

            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-2xl border border-clw-dark/[0.06] bg-white p-5 shadow-[0_15px_45px_rgba(23,27,77,0.07)] sm:p-7 lg:p-8"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-clw-blue/10 bg-clw-blue/[0.04] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-clw-blue">
                {destination.tag}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-clw-navy sm:text-4xl">
              {destination.name}
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-clw-muted">
              {destination.description}
            </p>

            {/* Divider */}
            <div className="my-6 h-px bg-clw-dark/[0.06]" />

            {/* Countries Heading */}
            <div className="flex items-center justify-between gap-3">

              <div>
                <h2 className="font-heading text-base font-extrabold text-clw-navy sm:text-lg">
                  Countries We Support
                </h2>

                <p className="mt-0.5 text-[10px] text-clw-muted">
                  Visa assistance available for these destinations.
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clw-blue/[0.06] text-clw-blue">
                <Globe2 size={16} />
              </div>

            </div>

            {/* Countries */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {destination.countries.map((country) => (
                <motion.div
                  key={country}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={{ y: -2 }}
                  className="group flex min-h-[42px] items-center gap-2 rounded-lg border border-clw-dark/[0.06] bg-clw-bg/60 px-2.5 py-2 transition-all duration-300 hover:border-clw-blue/15 hover:bg-white hover:shadow-[0_6px_18px_rgba(23,27,77,0.07)]"
                >

                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-clw-blue shadow-sm transition-colors group-hover:bg-clw-blue group-hover:text-white">
                    <MapPin size={12} />
                  </span>

                  <span className="text-[10px] font-bold leading-tight text-clw-navy transition-colors group-hover:text-clw-blue sm:text-[11px]">
                    {country}
                  </span>

                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-clw-blue px-5 py-2.5 text-xs font-extrabold text-white shadow-[0_8px_20px_rgba(23,27,77,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clw-navy"
              >
                Get Visa Assistance

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/destinations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-clw-dark/10 bg-white px-5 py-2.5 text-xs font-bold text-clw-navy transition-all duration-300 hover:border-clw-blue/20 hover:text-clw-blue"
              >
                Other Destinations
              </Link>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}