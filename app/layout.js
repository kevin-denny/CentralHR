import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.centralhrsolutions.com'),
  title: 'Central HR Solutions',
  description: 'Professional HR consulting for growing businesses.',
  icons: {
    icon: '/logo.png',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Central HR Solutions',
  alternateName: 'CHRS',
  url: 'https://www.centralhrsolutions.com',
  logo: 'https://www.centralhrsolutions.com/logo.png',
  image: 'https://www.centralhrsolutions.com/logo.png',
  description:
    'Professional HR consulting for growing businesses. We offer expertise in compliance, talent acquisition, training, and more.',
  telephone: '+94-77-743-1596',
  email: 'hello@centralhrsolutions.com',
  areaServed: 'Sri Lanka',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  serviceType: [
    'HR Consulting',
    'Training & Development',
    'Talent Acquisition',
    'Compliance & Risk Management',
    'Payroll Support',
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

