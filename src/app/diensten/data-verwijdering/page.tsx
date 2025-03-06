import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiShield, FiFileText, FiLock, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Data Verwijdering | Neiwu',
  description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering. GDPR-compliant en geschikt voor alle opslagmedia.',
};

export default function DataVerwijdering() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-purple-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
                Onze Diensten
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Data <span className="text-purple-600 dark:text-purple-400">Verwijdering</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering voor uw gemoedsrust en compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
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
                  src="/images/services/data-verwijdering.jpg" 
                  alt="Data Verwijdering" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">GDPR-compliant dataverwijdering</div>
                  <div className="text-purple-200">Certificaat van verwijdering voor uw administratie</div>
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
              Waarom Kiezen voor Onze Dataverwijdering?
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij bieden een veilige en gecertificeerde dataverwijderingsservice die voldoet aan alle wettelijke eisen en industriestandaarden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GDPR-Compliant</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Onze dataverwijderingsprocessen voldoen volledig aan de GDPR/AVG-regelgeving en andere relevante wetgeving.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FiFileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Certificering</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Na dataverwijdering ontvangt u een officieel certificaat als bewijs voor uw administratie en compliance.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FiLock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Veilige Methoden</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wij gebruiken geavanceerde technieken die voldoen aan militaire en industriële standaarden voor dataverwijdering.
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Alle Opslagmedia</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Onze service is geschikt voor alle soorten opslagmedia, van harde schijven en SSD's tot servers en mobiele apparaten.
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
              Ons Dataverwijderingsproces
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een veilig en transparant proces van begin tot eind, met volledige documentatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Inventarisatie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We inventariseren alle apparatuur en opslagmedia die dataverwijdering vereisen en stellen een gedetailleerd plan op.
              </p>
              <Link href="/contact" className="text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2 hover:underline">
                Plan Aanvragen <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Dataverwijdering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We voeren de dataverwijdering uit volgens de hoogste veiligheidsnormen, met meerdere overschrijvingen waar nodig.
              </p>
              <div className="text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2">
                ADISA Gecertificeerd
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Rapportage & Certificering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                U ontvangt een gedetailleerd rapport en certificaat van dataverwijdering voor elk apparaat, inclusief serienummers.
              </p>
              <div className="text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2">
                Volledige Documentatie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Certificeringen & Standaarden
            </h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij voldoen aan de hoogste internationale standaarden voor dataverwijdering en beveiliging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">ADISA</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Asset Disposal & Information Security Alliance certificering voor veilige dataverwijdering.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">ISO 27001</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Internationale standaard voor informatiebeveiliging en risicobeheer.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">NIST 800-88</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Richtlijnen voor mediaverwijdering van het National Institute of Standards and Technology.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">GDPR/AVG</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Volledige naleving van de Algemene Verordening Gegevensbescherming voor databescherming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bescherm uw gevoelige data
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Neem vandaag nog contact met ons op voor een veilige en gecertificeerde dataverwijderingsoplossing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight />
              </Link>
              <Link href="tel:+31201234567" className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white border border-purple-500 rounded-lg font-medium transition-colors">
                Bel Ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 