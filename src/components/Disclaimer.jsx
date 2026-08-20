import { motion } from 'framer-motion'
import { Info } from 'lucide-react'

export default function Disclaimer() {
  return (
    <section className="bg-clw-bg pb-12 sm:pb-16">
      <div className="container-clw">

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
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
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            mx-auto
            flex
            max-w-3xl
            items-start
            gap-3
            rounded-xl
            border
            border-clw-blue/10
            bg-white/90
            px-4
            py-4
            shadow-[0_6px_20px_rgba(23,27,77,0.05)]
            transition-all
            duration-300
            hover:border-clw-blue/20
            hover:shadow-[0_10px_28px_rgba(23,27,77,0.08)]
            sm:px-5
            sm:py-4
          "
        >

          {/* Premium Info Icon */}
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-clw-blue/15
              bg-clw-blue/[0.06]
              text-clw-blue
              transition-all
              duration-300
              group-hover:bg-clw-blue
              group-hover:text-white
            "
          >
            <Info
              size={14}
              strokeWidth={2.2}
            />
          </div>

          {/* Content */}
          <div className="min-w-0">

            <h3
              className="
                font-heading
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.08em]
                text-clw-navy
                sm:text-xs
              "
            >
              Important Visa Disclaimer
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                leading-relaxed
                text-clw-muted
                sm:text-xs
                sm:leading-5
              "
            >
              CLW Visa Services provides visa assistance and documentation
              support. Visa decisions are solely made by the respective
              embassy, consulate or immigration authority. Visa approval
              is not guaranteed. Fees, processing times and requirements
              may change according to the respective authorities.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  )
}