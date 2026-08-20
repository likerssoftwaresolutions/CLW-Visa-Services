import { useEffect } from 'react'

/* =========================================================
   WEBSITE CONFIGURATION
========================================================= */

const SITE_URL = 'https://clw-visa-services.vercel.app'

const DEFAULT_IMAGE =
  '/images/services/visa-assistance-chennai.webp'

/* =========================================================
   SERVICE SEO DATA
========================================================= */

export const serviceSeo = {
  'visa-assistance': {
    title: 'Visa Assistance in Chennai | CLW Visa Services',
    description:
      'Professional visa assistance in Chennai for applications, documentation, visa requirements and appointment procedures.',
  },

  'passport-services': {
    title: 'Passport Services in Chennai | CLW Visa Services',
    description:
      'Passport application, renewal and reissue assistance in Chennai with documentation and appointment support.',
  },

  'certificate-attestation': {
    title:
      'Certificate Attestation & Legalisation in Chennai | CLW Visa Services',
    description:
      'Certificate attestation and legalisation assistance in Chennai for educational, personal and commercial documents.',
  },

  'flight-booking': {
    title: 'Flight Ticket Booking in Chennai | CLW Visa Services',
    description:
      'Domestic and international flight ticket booking assistance in Chennai for individuals and groups.',
  },

  'hotel-booking': {
    title: 'Hotel Booking Services in Chennai | CLW Visa Services',
    description:
      'Hotel reservation and accommodation booking assistance for domestic and international travel from Chennai.',
  },

  'travel-insurance': {
    title:
      'Travel Insurance Assistance in Chennai | CLW Visa Services',
    description:
      'Travel insurance guidance and documentation assistance for international travellers from Chennai.',
  },

  'holiday-packages': {
    title: 'Holiday Packages from Chennai | CLW Visa Services',
    description:
      'Holiday package planning and travel assistance for families, couples and solo travellers from Chennai.',
  },

  'corporate-travel': {
    title:
      'Corporate Travel Services in Chennai | CLW Visa Services',
    description:
      'Corporate travel coordination and documentation support for organisations and travelling teams in Chennai.',
  },

  'business-travel': {
    title:
      'Business Travel & Visa Assistance in Chennai | CLW Visa Services',
    description:
      'Business travel and visa assistance in Chennai for meetings, conferences and professional engagements abroad.',
  },

  'group-travel': {
    title: 'Group Travel Services in Chennai | CLW Visa Services',
    description:
      'Group travel planning, visa documentation and booking coordination services in Chennai.',
  },

  'airport-transfers': {
    title:
      'Airport Transfer Services in Chennai | CLW Visa Services',
    description:
      'Airport arrival and departure transfer coordination for smooth and convenient travel in Chennai.',
  },
}

/* =========================================================
   SEO COMPONENT
========================================================= */

const SEO = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  canonical,
}) => {
  useEffect(() => {
    /* =====================================================
       CURRENT URL
    ====================================================== */

    const currentUrl =
      canonical ||
      `${SITE_URL}${window.location.pathname}`

    /* =====================================================
       TITLE
    ====================================================== */

    document.title = title

    /* =====================================================
       META DESCRIPTION
    ====================================================== */

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    )

    if (!metaDescription) {
      metaDescription = document.createElement('meta')

      metaDescription.setAttribute(
        'name',
        'description'
      )

      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute(
      'content',
      description
    )

    /* =====================================================
       CANONICAL
    ====================================================== */

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonicalLink) {
      canonicalLink = document.createElement('link')

      canonicalLink.setAttribute(
        'rel',
        'canonical'
      )

      document.head.appendChild(canonicalLink)
    }

    canonicalLink.setAttribute(
      'href',
      currentUrl
    )

    /* =====================================================
       OPEN GRAPH
    ====================================================== */

    const setOpenGraph = (
      property,
      content
    ) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      )

      if (!meta) {
        meta = document.createElement('meta')

        meta.setAttribute(
          'property',
          property
        )

        document.head.appendChild(meta)
      }

      meta.setAttribute(
        'content',
        content
      )
    }

    setOpenGraph('og:title', title)

    setOpenGraph(
      'og:description',
      description
    )

    setOpenGraph(
      'og:url',
      currentUrl
    )

    setOpenGraph(
      'og:type',
      'website'
    )

    setOpenGraph(
      'og:site_name',
      'CLW Visa Services'
    )

    setOpenGraph(
      'og:image',
      `${SITE_URL}${image}`
    )

    /* =====================================================
       TWITTER / X
    ====================================================== */

    const setTwitterMeta = (
      name,
      content
    ) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      )

      if (!meta) {
        meta = document.createElement('meta')

        meta.setAttribute(
          'name',
          name
        )

        document.head.appendChild(meta)
      }

      meta.setAttribute(
        'content',
        content
      )
    }

    setTwitterMeta(
      'twitter:card',
      'summary_large_image'
    )

    setTwitterMeta(
      'twitter:title',
      title
    )

    setTwitterMeta(
      'twitter:description',
      description
    )

    setTwitterMeta(
      'twitter:image',
      `${SITE_URL}${image}`
    )
  }, [
    title,
    description,
    image,
    canonical,
  ])

  return null
}

export default SEO