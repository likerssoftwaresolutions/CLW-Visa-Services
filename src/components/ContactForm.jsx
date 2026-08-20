import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Briefcase,
  MapPin,
  MessageSquare,
} from 'lucide-react'
import { services } from '../data/services'

const initialState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  destination: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }))
    }
  }

  const validate = () => {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Enter your full name.'
    }

    if (!form.phone.trim()) {
      next.phone = 'Enter your phone number.'
    }

    if (!form.email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }

    if (!form.service) {
      next.service = 'Select a service.'
    }

    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validation = validate()
    setErrors(validation)

    if (Object.keys(validation).length === 0) {
      setSubmitted(true)
      setForm(initialState)
    }
  }

  const inputClass = (field) => `
    w-full
    rounded-xl
    border
    bg-clw-bg/40
    px-3.5
    py-3
    text-xs
    font-medium
    text-clw-navy
    outline-none
    transition-all
    duration-200
    placeholder:text-clw-muted/50
    focus:bg-white
    focus:ring-4
    focus:ring-clw-blue/5
    ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-clw-dark/[0.08] focus:border-clw-blue/40'
    }
  `

  return (
    <div className="relative overflow-hidden rounded-2xl border border-clw-dark/[0.07] bg-white p-5 shadow-[0_12px_40px_rgba(23,27,77,0.07)] sm:p-6">

      {/* Top Accent */}
      <div className="absolute left-6 right-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-clw-gold to-transparent" />

      {/* Header */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-clw-blue/10 bg-clw-blue/[0.04] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-clw-gold" />

          <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-clw-blue">
            Quick Enquiry
          </span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-extrabold tracking-tight text-clw-navy sm:text-2xl">
          Tell Us About Your Journey
        </h3>

        <p className="mt-1.5 max-w-md text-xs leading-relaxed text-clw-muted">
          Share your requirements and our team will get back to you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >

        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Full Name
          </label>

          <div className="relative">
            <User
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"
            />

            <input
              id="name"
              type="text"
              value={form.name}
              onChange={update('name')}
              placeholder="Your full name"
              className={`${inputClass('name')} pl-10`}
            />
          </div>

          {errors.name && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"
            />

            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="Your phone number"
              className={`${inputClass('phone')} pl-10`}
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"
            />

            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="Your email address"
              className={`${inputClass('email')} pl-10`}
            />
          </div>

          {errors.email && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Service Required
          </label>

          <div className="relative">
            <Briefcase
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"
            />

            <select
              id="service"
              value={form.service}
              onChange={update('service')}
              className={`${inputClass('service')} pl-10`}
            >
              <option value="">Select a service</option>

              {services.map((service) => (
                <option
                  key={service.slug}
                  value={service.title}
                >
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {errors.service && (
            <p className="mt-1 text-[10px] font-medium text-red-500">
              {errors.service}
            </p>
          )}
        </div>

        {/* Destination */}
        <div>
          <label
            htmlFor="destination"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Destination
          </label>

          <div className="relative">
            <MapPin
              size={15}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-clw-blue/60"
            />

            <input
              id="destination"
              type="text"
              value={form.destination}
              onChange={update('destination')}
              placeholder="Where are you travelling?"
              className={`${inputClass('destination')} pl-10`}
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-clw-navy"
          >
            Message
          </label>

          <div className="relative">
            <MessageSquare
              size={15}
              className="pointer-events-none absolute left-3.5 top-4 text-clw-blue/60"
            />

            <textarea
              id="message"
              rows={3}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us briefly about your travel plans..."
              className={`${inputClass('message')} min-h-[90px] resize-none pl-10`}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-clw-blue px-5 py-3 text-xs font-extrabold text-white shadow-[0_8px_20px_rgba(23,27,77,0.16)] transition-all duration-300 hover:bg-clw-navy hover:shadow-[0_12px_28px_rgba(23,27,77,0.22)]"
          >
            Send Enquiry

            <Send
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </form>

      {/* Success Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-6 text-center backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 220,
                damping: 15,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-clw-blue/[0.08] text-clw-blue"
            >
              <CheckCircle2 size={30} strokeWidth={1.8} />
            </motion.div>

            <h3 className="mt-4 font-heading text-lg font-extrabold text-clw-navy">
              Enquiry Sent
            </h3>

            <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-clw-muted">
              Thank you for contacting CLW Visa Services. Our team will get back to you shortly.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-5 rounded-full border border-clw-blue/15 bg-clw-blue/[0.04] px-4 py-2 text-[10px] font-bold text-clw-blue transition-all hover:bg-clw-blue hover:text-white"
            >
              Send Another Enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}