import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -2,
      }}
      className="
        group
        overflow-hidden
        rounded-xl
        border
        border-clw-navy/[0.07]
        bg-white
        shadow-[0_6px_24px_rgba(23,27,77,0.05)]
        transition-all
        duration-300
        hover:border-clw-blue/15
        hover:shadow-[0_12px_30px_rgba(23,27,77,0.08)]
      "
    >
      {/* Question */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-4
          py-4
          text-left
          sm:px-5
        "
      >
        <div className="flex min-w-0 items-center gap-3">

          {/* Number */}
          <span
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[9px]
              font-extrabold
              transition-all
              duration-300
              ${
                isOpen
                  ? 'bg-clw-blue text-white'
                  : 'bg-clw-bg text-clw-blue'
              }
            `}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Question */}
          <span
            className={`
              font-heading
              text-xs
              font-bold
              leading-5
              transition-colors
              duration-200
              sm:text-sm
              ${
                isOpen
                  ? 'text-clw-blue'
                  : 'text-clw-navy'
              }
            `}
          >
            {faq.question}
          </span>
        </div>

        {/* Plus */}
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen
              ? '#303795'
              : '#f4f5fb',
            color: isOpen
              ? '#ffffff'
              : '#303795',
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
          "
        >
          <Plus size={15} strokeWidth={2.2} />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="px-4 pb-4 pl-[3.75rem] sm:px-5 sm:pb-5 sm:pl-[4.25rem]">

              {/* Gold accent */}
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 42,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.05,
                }}
                className="
                  mb-3
                  h-[2px]
                  rounded-full
                  bg-clw-gold
                "
              />

              <p
                className="
                  text-xs
                  leading-6
                  text-clw-muted
                  sm:text-sm
                  sm:leading-6
                "
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ({ showHeading = true }) {
  const [openIndex, setOpenIndex] = useState(0)

  /*
   * Show only the 4 most important FAQs.
   * The full FAQ data can remain inside content.js.
   */
  const visibleFaqs = faqs.slice(0, 4)

  return (
    <section className={showHeading ? 'bg-transparent' : 'bg-transparent'}>
      <div className="container-clw">

        {/* Optional heading */}
        {showHeading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.5,
            }}
            className="mb-8 text-center"
          >
            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-clw-blue/15
                bg-white
                px-4
                py-1.5
                shadow-sm
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-clw-gold
                "
              />

              <span
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-clw-blue
                "
              >
                FAQ
              </span>
            </div>

            <h2
              className="
                mt-4
                font-heading
                text-2xl
                font-extrabold
                text-clw-navy
                sm:text-3xl
              "
            >
              Frequently Asked Questions
            </h2>
          </motion.div>
        )}

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl space-y-3">
          {visibleFaqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(
                  openIndex === index ? -1 : index
                )
              }
            />
          ))}
        </div>

      </div>
    </section>
  )
}