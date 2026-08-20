import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react'
import Logo from './Logo'
import { companyInfo } from '../data/content'
import { services } from '../data/services'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Visa Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Our Process', to: '/process' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=CLW+Visa+Services+Chennai'

  return (
    <footer className="bg-clw-navy text-white/70">

      {/* ================= MAIN FOOTER ================= */}
      <div className="container-clw py-10 sm:py-12 lg:py-14">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* ================= COMPANY ================= */}
          <div className="lg:col-span-4">

            <Logo light scale={0.9} />

            <p className="mt-3 max-w-sm text-xs leading-6 text-white/60">
              {companyInfo.tagline}.
            </p>

            <p className="mt-2.5 max-w-sm text-xs leading-5 text-white/45">
              Professional visa assistance and travel documentation support
              for individuals, families, students and business travellers.
            </p>

            {/* Google Maps */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
                text-[11px]
                font-semibold
                text-white/80
                transition-all
                duration-200
                hover:border-clw-gold/40
                hover:bg-clw-gold
                hover:text-clw-navy
              "
            >
              <MapPin size={14} />
              Find Us on Google Maps
              <ExternalLink size={12} />
            </a>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-2">

            <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">

              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1
                      text-xs
                      transition-colors
                      duration-200
                      hover:text-clw-gold
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={11}
                      className="
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= VISA SERVICES ================= */}
          <div className="lg:col-span-3">

            <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
              Visa Services
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">

              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      transition-colors
                      duration-200
                      hover:text-clw-gold
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-clw-gold/70
                        transition-all
                        duration-200
                        group-hover:w-1.5
                      "
                    />

                    {service.title}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3">

            <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </h3>

            <ul className="space-y-2.5 text-xs">

              {/* Address */}
              <li className="flex items-start gap-2.5">

                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                  <MapPin
                    size={14}
                    className="text-clw-gold"
                  />
                </span>

                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-white/35">
                    Office
                  </span>

                  <span className="mt-0.5 block leading-5 text-white/60">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>

              </li>

              {/* Phone */}
              {companyInfo.phones.map((phone) => (
                <li
                  key={phone}
                  className="flex items-center gap-2.5"
                >

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                    <Phone
                      size={14}
                      className="text-clw-gold"
                    />
                  </span>

                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="transition-colors hover:text-clw-gold"
                  >
                    {phone}
                  </a>

                </li>
              ))}

              {/* Email */}
              <li className="flex items-center gap-2.5">

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                  <Mail
                    size={14}
                    className="text-clw-gold"
                  />
                </span>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="break-all transition-colors hover:text-clw-gold"
                >
                  {companyInfo.email}
                </a>

              </li>

            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                mt-4
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-clw-gold
                px-4
                py-2.5
                text-[11px]
                font-extrabold
                text-clw-navy
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(212,167,44,0.2)]
              "
            >
              Start Your Visa Enquiry
              <ArrowUpRight size={13} />
            </Link>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/[0.08]">

        <div
          className="
            container-clw
            flex
            flex-col
            gap-2.5
            py-4
            text-[10px]
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} CLW Visa Services. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:justify-end">

<Link
  to="/privacy-policy#legal-hero"
  className="transition-colors hover:text-clw-gold"
>
  Privacy Policy
</Link>

<Link
  to="/terms#legal-hero"
  className="transition-colors hover:text-clw-gold"
>
  Terms & Conditions
</Link>

<Link
  to="/visa-disclaimer#legal-hero"
  className="transition-colors hover:text-clw-gold"
>
  Visa Disclaimer
</Link>

          </div>

        </div>
      </div>

    </footer>
  )
}