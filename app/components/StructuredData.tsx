export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Dr. Aparna Ghosh Clinic',
    url: 'https://draparana.com', // Update with your actual domain
    logo: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    description: 'Expert gynecologist Dr. Aparna Ghosh offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, and more in Chembur, Mumbai.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '501, Pure Gold CHS, NG Acharya Marg, Station Road, Chembur East',
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071',
      addressCountry: 'IN',
    },
    telephone: '+919326579679', // Update with actual phone number
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Aparna Ghosh',
    alternateName: 'Dr. Aparna Ghosh',
    jobTitle: 'Gynecologist',
    description: 'Expert gynecologist (MBBS from RGMC 1998, MD from KEM Hospital 2002) with 23 years of experience in gynecology and Obstetrics, specializing in comprehensive women\'s health care, cosmetic gynecology, and advanced treatments.',
    url: 'https://draparana.com', // Update with your actual domain
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    telephone: '+919326579679', // Update with actual phone number
    email: 'aparnaghosh67@yahoo.co.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '501, Pure Gold CHS, NG Acharya Marg, Station Road, Chembur East',
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071',
      addressCountry: 'IN',
    },
    medicalSpecialty: [
      'Gynecology',
      'Obstetrics',
      'High-Risk Pregnancy',
      'Hysterectomy',
      'Fibroid Removal',
      'Urinary Incontinence Treatment',
      'HIFU Treatment',
      'Vaginal Tightening',
      'Skin Tightening',
      'Cosmetic Gynecology',
      'Laser Hair Reduction',
      'HRT Treatment',
    ],
    credential: [
      'MBBS',
      'MD - Obstetrics & Gynecology',
    ],
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Dr. Aparna Ghosh Clinic',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Aparna Ghosh Clinic',
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    '@id': 'https://draparana.com',
    url: 'https://draparana.com',
    telephone: '+919326579679',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '501, Pure Gold CHS, NG Acharya Marg, Station Road, Chembur East',
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0621,
      longitude: 72.9008,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/draparnaghosh445/',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

