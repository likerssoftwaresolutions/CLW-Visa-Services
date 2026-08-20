import {
  FileCheck2,
  BookUser,
  Stamp,
  Plane,
  BedDouble,
  ShieldCheck,
  Palmtree,
  Briefcase,
  Building2,
  Users,
  Car,
} from 'lucide-react'

// Single source of truth for every service.
export const services = [
  {
    slug: 'visa-assistance',
    icon: FileCheck2,
    title: 'Visa Assistance',
    image: '/images/services/visa-assistance1.webp',
    short:
      'Professional assistance for visa applications, documentation and appointment procedures.',
    description:
      'CLW Visa Services guides you through each stage of the visa process, from understanding the requirements of your destination country to preparing your documentation and booking your appointment. Our team works closely with you to keep the process clear and organised.',
    points: [
      'Guidance on visa category and requirements',
      'Documentation checklist support',
      'Application form assistance',
      'Appointment scheduling support',
    ],
  },

  {
    slug: 'passport-services',
    icon: BookUser,
    title: 'Passport Services',
    image: '/images/services/passport-services.webp',
    short:
      'Support with new passport applications, renewals and related documentation.',
    description:
      'We assist individuals and families with passport-related documentation and procedures, helping you understand the steps involved for a new passport, renewal or reissue.',
    points: [
      'New passport application guidance',
      'Renewal and reissue support',
      'Documentation assistance',
      'Appointment coordination',
    ],
  },

  {
    slug: 'certificate-attestation',
    icon: Stamp,
    title: 'Certificate Legalisation & Attestation',
    image: '/images/services/certificate-attestation.webp',
    short:
      'Assistance with certificate legalisation and attestation for study, work and travel abroad.',
    description:
      'Many visa and overseas requirements call for legalised or attested certificates. We help you understand the attestation process for your educational, personal or commercial documents.',
    points: [
      'Educational certificate attestation guidance',
      'Personal document legalisation support',
      'Process and authority coordination',
      'Document handling support',
    ],
  },

  {
    slug: 'flight-booking',
    icon: Plane,
    title: 'Flight Ticket Booking',
    image: '/images/services/flight-booking.webp',
    short:
      'Domestic and international flight ticket booking support for individuals and groups.',
    description:
      'From single travellers to group itineraries, we help you find and book flight options that suit your travel plans and schedule.',
    points: [
      'Domestic and international bookings',
      'Group travel ticketing',
      'Itinerary planning support',
      'Fare and schedule assistance',
    ],
  },

  {
    slug: 'hotel-booking',
    icon: BedDouble,
    title: 'Hotel Booking',
    image: '/images/services/hotel-booking.webp',
    short:
      'Hotel reservations tailored to your destination, budget and travel dates.',
    description:
      'We assist with hotel reservations across a wide range of destinations, helping you find accommodation that fits your itinerary and preferences.',
    points: [
      'Destination-based hotel search',
      'Budget and preference matching',
      'Booking coordination',
      'Itinerary-aligned stays',
    ],
  },

  {
    slug: 'travel-insurance',
    icon: ShieldCheck,
    title: 'Travel Insurance',
    image: '/images/services/travel-insurance.webp',
    short:
      'Guidance on travel insurance options for your international journey.',
    description:
      'Travel insurance is often a requirement for international travel. We help you understand your options so you can travel with greater peace of mind.',
    points: [
      'Policy option guidance',
      'Coverage explanation support',
      'Documentation assistance',
      'Application coordination',
    ],
  },

  {
    slug: 'holiday-packages',
    icon: Palmtree,
    title: 'Holiday Packages',
    image: '/images/services/holiday-packages.webp',
    short:
      'Curated holiday planning support for families, couples and solo travellers.',
    description:
      'We help design holiday itineraries that match your interests and schedule, coordinating the travel elements so your trip comes together smoothly.',
    points: [
      'Personalised itinerary planning',
      'Family, couple and solo travel support',
      'Coordinated bookings',
      'Destination guidance',
    ],
  },

  {
    slug: 'corporate-travel',
    icon: Building2,
    title: 'Corporate Travel',
    image: '/images/services/corporate-travel.webp',
    short:
      'Dependable travel coordination for organisations and their travelling teams.',
    description:
      'CLW Visa Services supports organisations with the coordination of travel arrangements for teams and employees, aiming for a dependable and organised process.',
    points: [
      'Team travel coordination',
      'Documentation support for employees',
      'Itinerary management',
      'Ongoing travel support',
    ],
  },

  {
    slug: 'business-travel',
    icon: Briefcase,
    title: 'Business Travel',
    image: '/images/services/business-travel.webp',
    short:
      'Travel and visa support tailored for business trips and meetings abroad.',
    description:
      'For professionals travelling for meetings, conferences or business engagements, we help coordinate the visa and travel elements of your trip.',
    points: [
      'Business visa guidance',
      'Travel scheduling support',
      'Documentation assistance',
      'Point-of-contact coordination',
    ],
  },

  {
    slug: 'group-travel',
    icon: Users,
    title: 'Group Travel',
    image: '/images/services/group-travel.webp',
    short:
      'Coordinated visa and travel arrangements for groups travelling together.',
    description:
      'Travelling as a group brings its own coordination needs. We help manage documentation and bookings so your group can travel together smoothly.',
    points: [
      'Group documentation coordination',
      'Group booking support',
      'Itinerary alignment',
      'Single point of contact',
    ],
  },

  {
    slug: 'airport-transfers',
    icon: Car,
    title: 'Airport Transfers',
    image: '/images/services/airport-transfers.webp',
    short:
      'Arrival and departure transfer support to keep your journey seamless.',
    description:
      'We help coordinate airport transfer arrangements so your journey between the airport and your destination is comfortable and well planned.',
    points: [
      'Arrival transfer coordination',
      'Departure transfer coordination',
      'Schedule-based planning',
      'Destination-specific support',
    ],
  },
]

export const visaTypes = [
  {
    title: 'Tourist Visa',
    image: '/images/visatypes/tourist-visa.webp',
    description:
      'Assistance for individuals and families travelling abroad for leisure and sightseeing.',
  },
  {
    title: 'Business Visa',
    image: '/images/visatypes/business-visa.webp',
    description:
      'Support for professionals travelling for meetings, conferences and business engagements.',
  },
  {
    title: 'Visitor Visa',
    image: '/images/visatypes/visitor-visa.webp',
    description:
      'Guidance for those visiting family, friends or attending personal occasions abroad.',
  },
  {
    title: 'Student Visa',
    image: '/images/visatypes/student-visa.webp',
    description:
      'Documentation and application guidance for students pursuing studies overseas.',
  },
  {
    title: 'Family / Dependent Visa',
    image: '/images/visatypes/family-visa.webp',
    description:
      'Assistance for family members joining relatives who are already residing abroad.',
  },
  {
    title: 'Transit Visa',
    image: '/images/visatypes/transit-visa.webp',
    description:
      'Support for travellers who require a transit visa while journeying through another country.',
  },
]