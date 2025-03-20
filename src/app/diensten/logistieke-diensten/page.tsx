import { Metadata } from 'next';
import Link from 'next/link';
import { FiTruck, FiCheckCircle, FiPackage, FiMap, FiShield, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Logistieke Diensten | Neiwu',
  description: 'Veilig transport en opslag van uw IT-apparatuur, met volledige tracking en tracing in heel Nederland. Professionele logistieke oplossingen voor uw IT-assets.',
};

export default function LogistiekeDiensten() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                Logistieke Diensten
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Veilig <span className="text-blue-600 dark:text-blue-400">transport</span> van uw IT-apparatuur
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Professionele logistieke oplossingen voor het veilig vervoeren en opslaan van uw waardevolle IT-assets, met volledige tracking en tracing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                  Offerte Aanvragen <FiArrowRight />
                </Link>
                <Link href="/diensten" className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-gray-700 rounded-lg font-medium transition-colors">
                  Alle Diensten
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/services/logistieke-diensten-pro.jpg" 
                  alt="Professionele IT-logistieke diensten" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Gespecialiseerde IT-logistiek</div>
                  <div className="text-blue-200">Veilig transport en opslag van IT-apparatuur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Waarom kiezen voor onze logistieke diensten?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Wij zorgen voor een veilige en efficiënte logistieke afhandeling van uw IT-apparatuur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <FiTruck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Landelijke Dekking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ophaalservice in heel Nederland, met flexibele planning op basis van uw wensen.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <FiPackage className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Veilige Verpakking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Speciale verpakkingsmaterialen voor optimale bescherming van uw IT-apparatuur.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <FiMap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Track & Trace</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Volledige tracking en tracing van uw zendingen, van ophalen tot aflevering.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Beveiligde Opslag</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tijdelijke opslag in onze beveiligde magazijnen met 24/7 bewaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Logistieke Diensten
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Een compleet pakket aan logistieke oplossingen voor uw IT-apparatuur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">1</span>
                Transport & Ophaalservice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Wij verzorgen het veilige transport van uw IT-apparatuur, van enkele items tot complete datacenters. Onze gespecialiseerde chauffeurs zorgen voor een zorgvuldige behandeling van uw waardevolle assets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Landelijke ophaalservice op afspraak</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Flexibele planning, ook buiten kantoortijden</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Gespecialiseerde voertuigen voor IT-apparatuur</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Volledig verzekerd transport</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">2</span>
                Verpakking & Bescherming
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Wij bieden professionele verpakkingsoplossingen voor alle soorten IT-apparatuur. Onze verpakkingsmaterialen zijn speciaal ontworpen om uw apparatuur optimaal te beschermen tijdens transport.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Antistatische verpakkingsmaterialen</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Schokabsorberende materialen voor gevoelige apparatuur</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Herbruikbare transportkisten voor regelmatige zendingen</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Milieuvriendelijke verpakkingsoplossingen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">3</span>
                Beveiligde Opslag
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Heeft u tijdelijk opslagruimte nodig voor uw IT-apparatuur? Wij bieden beveiligde opslagfaciliteiten met 24/7 bewaking en klimaatcontrole voor optimale bescherming.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">24/7 beveiligde faciliteiten met camerabewaking</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Klimaatgecontroleerde opslagruimtes</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Flexibele opslagperiodes, van dagen tot maanden</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Volledig verzekerde opslag</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">4</span>
                Tracking & Rapportage
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Wij bieden volledige transparantie over de status van uw zendingen. Via ons online portaal kunt u uw zendingen realtime volgen en gedetailleerde rapportages ontvangen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Realtime tracking van uw zendingen</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Digitale afleverbewijzen en transportdocumentatie</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Gedetailleerde inventarisatielijsten</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Maandelijkse rapportages voor grote klanten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ons logistieke proces in vier eenvoudige stappen
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 dark:bg-blue-900/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Aanvraag & Planning</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    U dient een aanvraag in via ons contactformulier of telefonisch. Onze logistieke planners nemen contact met u op om de details te bespreken en een ophaalmoment in te plannen.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 z-10">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                  <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
                </div>
                <div className="md:w-1/2 order-3"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 order-2"></div>
                <div className="relative order-1 z-10">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                  <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ophalen & Verpakken</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Onze gespecialiseerde chauffeurs komen op het afgesproken tijdstip uw IT-apparatuur ophalen. Indien nodig verzorgen wij ter plaatse de juiste verpakking voor veilig transport.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Transport & Opslag</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Uw apparatuur wordt veilig getransporteerd naar onze faciliteiten of direct naar de eindbestemming. Via ons online portaal kunt u de status van uw zending realtime volgen.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 z-10">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                  <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
                </div>
                <div className="md:w-1/2 order-3"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="md:w-1/2 order-2"></div>
                <div className="relative order-1 z-10">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                  <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-xl"></div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Aflevering & Rapportage</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Na aflevering ontvangt u een gedetailleerde rapportage met alle relevante informatie over het transport. Bij regelmatige zendingen ontvangt u maandelijks een overzichtsrapportage.
                  </p>
                </div>
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
              Klaar voor veilig transport van uw IT-apparatuur?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem contact met ons op voor een vrijblijvende offerte of bel direct voor meer informatie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Offerte Aanvragen <FiArrowRight />
              </Link>
              <a href="tel:+31201234567" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors">
                Bel +31 (0)20 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 