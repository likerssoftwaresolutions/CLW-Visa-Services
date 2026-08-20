import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

const whatsappNumber = '919383349693'

const whatsappMessage = encodeURIComponent(
  `Hello CLW Visa Services,

I would like to enquire about your visa and travel services.

Please guide me regarding the visa process, requirements and documentation.

Thank you.`
)

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-5">

      {/* ================= MOBILE CALL BUTTON ================= */}
      <motion.a
        href="tel:+919383349693"
        aria-label="Call CLW Visa Services"
        initial={{
          opacity: 0,
          scale: 0.6,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.45,
          type: 'spring',
          stiffness: 220,
          damping: 15,
        }}
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-clw-navy
          text-white
          shadow-[0_8px_25px_rgba(23,27,77,0.25)]
          sm:hidden
        "
      >
        <Phone size={18} strokeWidth={2.2} />
      </motion.a>

      {/* ================= WHATSAPP ================= */}
      <div className="relative flex items-center">

        {/* Desktop Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                x: 10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: 10,
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                right-full
                mr-3
                hidden
                whitespace-nowrap
                rounded-xl
                border
                border-white/10
                bg-clw-navy
                px-3.5
                py-2
                text-[11px]
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(23,27,77,0.25)]
                sm:block
              "
            >
              <span className="block">
                Chat with CLW
              </span>

              <span className="mt-0.5 block text-[9px] font-medium text-white/50">
                Quick visa assistance
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Pulse Ring */}
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
          "
        />

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with CLW Visa Services on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.55,
            type: 'spring',
            stiffness: 220,
            damping: 14,
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            bg-[#25D366]
            text-white
            shadow-[0_10px_30px_rgba(37,211,102,0.35)]
            transition-shadow
            duration-300
            hover:shadow-[0_14px_38px_rgba(37,211,102,0.5)]
            sm:h-16
            sm:w-16
          "
        >

          {/* Official-style WhatsApp mark */}
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-white sm:h-8 sm:w-8"
            aria-hidden="true"
          >
            <path d="M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.71-1.32-1.58-1.48-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.6-.66 1.83-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z" />

            <path d="M16 3.2A12.8 12.8 0 0 0 5.02 22.58L3.2 28.8l6.38-1.78A12.8 12.8 0 1 0 16 3.2zm0 23.35c-2.01 0-3.97-.54-5.7-1.56l-.41-.24-3.78 1.05 1.01-3.68-.27-.42A10.52 10.52 0 1 1 16 26.55z" />
          </svg>

          {/* Small notification dot */}
          <motion.span
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-0
              top-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-clw-gold
            "
          />

        </motion.a>
      </div>
    </div>
  )
}