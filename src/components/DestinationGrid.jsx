import { motion } from 'framer-motion'
import DestinationCard from './DestinationCard'

const gridAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function DestinationGrid({ items }) {
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
        gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        lg:gap-5
      "
    >
      {items.map((destination, index) => (
        <DestinationCard
          key={destination.name}
          destination={destination}
          index={index}
        />
      ))}
    </motion.div>
  )
}