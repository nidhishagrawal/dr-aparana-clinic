export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Dr. Aparana Ghosh Clinic',
    url: 'https://draparana.com', // Update with your actual domain
    logo: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    description: 'Expert gynecologist Dr. Aparana Ghosh offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, and more in Chembur, Mumbai.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Clinic Address, Chembur', // Update with actual address
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071', // Update with actual postal code
      addressCountry: 'IN',
    },
    telephone: '+919876543210', // Update with actual phone number
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
    name: 'Dr. Aparana Ghosh',
    alternateName: 'Dr. Aparana Ghosh',
    jobTitle: 'Gynecologist',
    description: 'Expert gynecologist (MBBS, MD - Obstetrics & Gynecology) with FMAS fellowship, specializing in comprehensive women\'s health care, cosmetic gynecology, and advanced treatments.',
    url: 'https://draparana.com', // Update with your actual domain
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    telephone: '+919876543210', // Update with actual phone number
    email: 'info@draparana.com', // Update with actual email
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Clinic Address, Chembur', // Update with actual address
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071', // Update with actual postal code
      addressCountry: 'IN',
    },
    medicalSpecialty: [
      'Gynecology',
      'Obstetrics',
      'Cosmetic Gynecology',
      'Laser Hair Reduction',
      'HIFU Treatment',
      'HRT Treatment',
    ],
    credential: [
      'MBBS',
      'MD - Obstetrics & Gynecology',
      'FMAS (Fellowship in Minimally Invasive Surgeries)',
    ],
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Dr. Aparana Ghosh Clinic',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mumbai',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Aparana Ghosh Clinic',
    image: 'https://draparana.com/images/dr-aparana-ghosh.jpg',
    '@id': 'https://draparana.com',
    url: 'https://draparana.com',
    telephone: '+919876543210',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Clinic Address, Chembur', // Update with actual address
      addressLocality: 'Chembur',
      addressRegion: 'Maharashtra',
      postalCode: '400071', // Update with actual postal code
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0596, // Update with actual coordinates
      longitude: 72.8985, // Update with actual coordinates
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
      // Add your social media profiles here
      // 'https://www.facebook.com/draparana',
      // 'https://www.instagram.com/draparana',
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

