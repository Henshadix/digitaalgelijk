import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiRefreshCw, FiGlobe, FiAward, FiBarChart2, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Hardware Recycling | Neiwu',
  description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting. ISO 14001 gecertificeerd proces.',
};

export default function HardwareRecycling() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-green-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-green-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6">
                Onze Diensten
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hardware <span className="text-green-600 dark:text-green-400">Recycling</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting. Onze circulaire aanpak zorgt voor een significante CO2-reductie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
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
                  src="/images/services/hardware-recycling.jpg" 
                  alt="Hardware Recycling" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">99% hergebruik van materialen</div>
                  <div className="text-green-200">ISO 14001 gecertificeerd proces</div>
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
              Waarom Kiezen voor Onze Recyclingdienst?
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Onze duurzame recyclingdienst zorgt voor maximaal hergebruik van materialen en minimale milieubelasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <FiRefreshCw className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">99% Hergebruik</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wij hergebruiken 99% van alle materialen uit uw afgedankte IT-apparatuur, van metalen tot kunststoffen.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <FiGlobe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">CO2-Reductie</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Onze circulaire aanpak zorgt voor een significante CO2-reductie vergeleken met traditionele verwerkingsmethoden.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <FiBarChart2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Transparante Rapportage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                U ontvangt gedetailleerde rapportages over de verwerking en het hergebruik van uw apparatuur.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <FiAward className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gecertificeerd Proces</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ons recyclingproces is ISO 14001 en WEEELABEX gecertificeerd, wat garant staat voor de hoogste milieunormen.
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
              Ons Recyclingproces
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een transparant en duurzaam proces van inzameling tot hergebruik van materialen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Inzameling & Sortering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We halen uw apparatuur op en sorteren deze op type, materiaal en herbruikbaarheid in onze gespecialiseerde faciliteit.
              </p>
              <Link href="/contact" className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2 hover:underline">
                Ophaalservice Aanvragen <FiArrowRight />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Demontage & Verwerking</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We demonteren de apparatuur zorgvuldig en scheiden alle materialen voor optimale recycling en hergebruik.
              </p>
              <div className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                Gespecialiseerde Technieken
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">Hergebruik & Rapportage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                De gescheiden materialen worden hergebruikt in nieuwe producten. U ontvangt een gedetailleerd duurzaamheidsrapport.
              </p>
              <div className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                Circulaire Economie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Uw Milieu-impact
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Door te kiezen voor onze recyclingdienst draagt u actief bij aan een duurzamere wereld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CO2-Besparing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Voor elke ton gerecyclede elektronica bespaart u gemiddeld:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">1.5 ton</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">CO2-uitstoot bespaard</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">3000 L</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Water bespaard</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">2 MWh</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Energie bespaard</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">0.8 ton</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Grondstoffen bespaard</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Duurzaamheidsrapportage</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Na recycling ontvangt u een gedetailleerd rapport met:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Exacte hoeveelheid gerecyclede materialen per type</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Berekende CO2-besparing en milieu-impact</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Certificaat voor uw duurzaamheidsverslaglegging</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3 mt-1">
                    <FiCheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">Bijdrage aan UN Sustainable Development Goals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Draag bij aan een duurzamere toekomst
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Neem vandaag nog contact met ons op voor een duurzame recyclingoplossing voor uw IT-apparatuur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight />
              </Link>
              <Link href="tel:+31201234567" className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white border border-green-500 rounded-lg font-medium transition-colors">
                Bel Ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 