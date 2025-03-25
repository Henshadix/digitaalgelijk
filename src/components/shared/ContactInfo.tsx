import React from 'react';

// Updated types for the contact information
interface ContactInfoProps {
  contactInfo: {
    address: {
      street: string;
      city: string;
      postalCode?: string;
      country: string;
    };
    phone: string;
    email: string;
    businessHours: {
      weekdays: string;
      weekend: string;
    };
  };
}

/**
 * Server Component dat contactgegevens weergeeft
 */
const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <span className="mr-3 text-blue-600 dark:text-blue-400">👤</span>
        Contactgegevens
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl transition-all hover:shadow-md">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
            <span role="img" aria-label="Location" className="text-xl">📍</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Adres</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {contactInfo.address.street}<br />
              {contactInfo.address.city}<br />
              {contactInfo.address.country}
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-6 bg-purple-50 dark:bg-purple-900/10 rounded-xl transition-all hover:shadow-md">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
            <span role="img" aria-label="Phone" className="text-xl">📞</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Telefoon</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors min-w-[180px] inline-block">
                {contactInfo.phone}
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-6 bg-green-50 dark:bg-green-900/10 rounded-xl transition-all hover:shadow-md">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
            <span role="img" aria-label="Email" className="text-xl">✉️</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-mail</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-green-600 dark:hover:text-green-400 transition-colors min-w-[200px] inline-block">
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start p-6 bg-amber-50 dark:bg-amber-900/10 rounded-xl transition-all hover:shadow-md">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400">
            <span role="img" aria-label="Clock" className="text-xl">🕒</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Openingstijden</h3>
            <div className="text-gray-600 dark:text-gray-400 mt-1 space-y-2">
              <div className="flex justify-between border-b border-amber-100 dark:border-amber-900/20 pb-2">
                <span>Maandag - Vrijdag</span>
                <span className="ml-4 font-medium">{contactInfo.businessHours.weekdays}</span>
              </div>
              <div className="flex justify-between border-b border-amber-100 dark:border-amber-900/20 pb-2">
                <span>Zaterdag - Zondag</span>
                <span className="ml-4 font-medium">{contactInfo.businessHours.weekend}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Snelle reactie binnen 24 uur</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Wij streven ernaar om alle berichten binnen 24 uur te beantwoorden. Voor dringende zaken kunt u ons telefonisch bereiken.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo; 