import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const gridAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

export default function ServiceGrid({ items }) {
  return (
    <motion.div
      variants={gridAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-4
      "
    >
      {items.map((service, index) => (
        <ServiceCard
          key={service.slug}
          service={service}
          index={index}
        />
      ))}
    </motion.div>
  )
}