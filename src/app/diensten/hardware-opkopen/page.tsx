import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiMonitor, FiTruck, FiShield, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Hardware Opkopen | Neiwu',
  description: 'Verkoop uw gebruikte IT-apparatuur voor een eerlijke prijs. Wij bieden gratis ophaalservice in heel Nederland en veilige dataverwijdering volgens GDPR-normen.',
};

export default function HardwareOpkopen() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                Onze Diensten
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hardware <span className="text-blue-600 dark:text-blue-400">Opkopen</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Wij kopen uw gebruikte IT-apparatuur op tegen eerlijke prijzen, ongeacht het aantal of de staat. Onze service is ontworpen om het proces zo eenvoudig en voordelig mogelijk te maken voor uw bedrijf.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                  Offerte Aanvragen <FiArrowRight />
                </Link>
                <Link href="/diensten" className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-colors">
                  Alle Diensten
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/hardware-opkopen.jpg" 
                  alt="Hardware Opkopen" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Eerlijke prijzen voor uw hardware</div>
                  <div className="text-blue-200">Gratis ophaalservice in heel Nederland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Waarom Uw Hardware Verkopen aan Neiwu?
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij bieden een complete service voor het opkopen van uw gebruikte IT-apparatuur, met focus op eerlijke prijzen, duurzaamheid en veiligheid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiMonitor className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Eerlijke Prijzen</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wij bieden marktconforme prijzen voor uw gebruikte hardware, gebaseerd op actuele marktwaarde en staat van de apparatuur.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiTruck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gratis Ophaalservice</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wij halen uw apparatuur kosteloos op in heel Nederland, ongeacht de hoeveelheid of locatie.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Veilige Dataverwijdering</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Alle data wordt veilig verwijderd volgens GDPR-normen, met certificaat van verwijdering voor uw administratie.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Duurzame Verwerking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Uw hardware wordt duurzaam verwerkt, met maximaal hergebruik van materialen en minimale milieubelasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hoe Werkt Het?
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Ons proces is eenvoudig en transparant, van aanvraag tot uitbetaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Offerte Aanvragen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Vul ons contactformulier in met details over uw hardware of neem telefonisch contact met ons op.
              </p>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 hover:underline">
                Offerte Aanvragen <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Ophalen & Inspectie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Wij halen uw hardware op en inspecteren deze op onze locatie om de definitieve waarde te bepalen.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                Gratis Ophaalservice
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Uitbetaling & Certificering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Na akkoord ontvangt u de betaling en een certificaat van dataverwijdering voor uw administratie.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                Snelle Uitbetaling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om uw hardware te verkopen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight />
              </Link>
              <Link href="tel:+31201234567" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors">
                Bel Ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 