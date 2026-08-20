import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Process', to: '/process' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const transparent = isHome && !scrolled

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            transparent
              ? 'bg-transparent py-4 sm:py-5'
              : 'border-b border-clw-dark/5 bg-white/95 py-3 shadow-[0_8px_30px_-12px_rgba(23,27,77,0.20)] backdrop-blur-xl'
          }
        `}
      >
        <div
          className="
            container-clw
            flex
            h-12
            items-center
            justify-between
            sm:h-14
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            aria-label="CLW Visa Services home"
            className="
              relative
              z-50
              flex
              shrink-0
              items-center
              outline-none
            "
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Logo
                scale={transparent ? 0.95 : 0.88}
                light={transparent}
              />
            </motion.div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="relative px-3 py-2"
              >
                {({ isActive }) => (
                  <span className="relative block">
                    <span
                      className={`
                        relative
                        z-10
                        text-[13px]
                        font-semibold
                        tracking-[0.01em]
                        transition-colors
                        duration-200
                        ${
                          transparent
                            ? isActive
                              ? 'text-white'
                              : 'text-white/75 hover:text-white'
                            : isActive
                              ? 'text-clw-blue'
                              : 'text-clw-dark/75 hover:text-clw-blue'
                        }
                      `}
                    >
                      {link.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="clw-nav-active"
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 35,
                        }}
                        className={`
                          absolute
                          -bottom-1
                          left-1/2
                          h-[3px]
                          w-5
                          -translate-x-1/2
                          rounded-full
                          bg-clw-gold
                        `}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919383349693"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-2
                text-[13px]
                font-semibold
                transition-all
                duration-200
                ${
                  transparent
                    ? 'text-white/85 hover:bg-white/10 hover:text-white'
                    : 'text-clw-blue hover:bg-clw-bg hover:text-clw-navy'
                }
              `}
            >
              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  transition-transform
                  duration-200
                  group-hover:scale-105
                  ${
                    transparent
                      ? 'bg-white/10'
                      : 'bg-clw-bg'
                  }
                `}
              >
                <MessageCircle size={15} />
              </span>

              <span>WhatsApp</span>
            </a>

            {/* Consultation */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-clw-blue
                px-5
                py-3
                text-[13px]
                font-bold
                text-white
                shadow-lg
                shadow-clw-blue/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-clw-navy
                hover:shadow-xl
              "
            >
              Get Free Consultation

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`
              relative
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              transition-colors
              lg:hidden
              ${
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-clw-navy hover:bg-clw-bg'
              }
            `}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={25} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={25} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-clw-dark/5
                bg-white
                shadow-2xl
                lg:hidden
              "
            >
              <nav
                className="
                  container-clw
                  flex
                  flex-col
                  gap-1
                  py-4
                  sm:py-5
                "
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                    }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-3
                          text-[15px]
                          font-semibold
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? 'bg-clw-bg text-clw-blue'
                              : 'text-clw-dark hover:bg-clw-bg/70 hover:text-clw-blue'
                          }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>

                          {isActive && (
                            <motion.span
                              layoutId="mobile-nav-active"
                              className="
                                h-2
                                w-2
                                rounded-full
                                bg-clw-gold
                              "
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Actions */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25,
                  }}
                  className="
                    mt-3
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-clw-dark/10
                    pt-4
                  "
                >
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919383349693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-clw-blue/15
                      bg-white
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-clw-blue
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-clw-bg
                    "
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>

                  {/* Consultation */}
                  <Link
                    to="/contact"
                    className="
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-clw-blue
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-clw-blue/20
                      transition-all
                      duration-200
                      hover:bg-clw-navy
                    "
                  >
                    Get Free Consultation

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}