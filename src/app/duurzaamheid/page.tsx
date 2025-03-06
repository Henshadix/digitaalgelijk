import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiGlobe, FiRefreshCw, FiAward, FiBarChart2, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Duurzaamheid | Neiwu',
  description: 'Ontdek hoe Neiwu bijdraagt aan een duurzamere wereld door circulaire IT-oplossingen, CO2-reductie en verantwoorde recycling van elektronisch afval.',
};

export default function Duurzaamheid() {
  // Sustainability goals
  const sustainabilityGoals = [
    {
      title: 'Circulaire Economie',
      description: 'Wij streven naar een volledig circulaire aanpak waarbij materialen zo lang mogelijk in de keten blijven.',
      icon: <FiRefreshCw className="w-6 h-6" />,
      stats: '99% hergebruik van materialen',
    },
    {
      title: 'CO2-Reductie',
      description: 'Door hergebruik en recycling dragen we bij aan een significante vermindering van CO2-uitstoot.',
      icon: <FiGlobe className="w-6 h-6" />,
      stats: '1.5 ton CO2 bespaard per ton gerecyclede elektronica',
    },
    {
      title: 'Transparante Rapportage',
      description: 'We bieden volledige transparantie over onze duurzaamheidsprestaties en impact.',
      icon: <FiBarChart2 className="w-6 h-6" />,
      stats: '100% transparantie in duurzaamheidsrapportages',
    },
    {
      title: 'Certificeringen',
      description: 'Onze processen voldoen aan de hoogste internationale standaarden voor duurzaamheid.',
      icon: <FiAward className="w-6 h-6" />,
      stats: '5 internationale duurzaamheidscertificeringen',
    }
  ];

  // SDG contributions
  const sdgContributions = [
    {
      number: 9,
      title: 'Industrie, Innovatie en Infrastructuur',
      description: 'We dragen bij aan duurzame industrialisatie door innovatieve recyclingtechnieken.',
      color: 'bg-orange-500',
    },
    {
      number: 12,
      title: 'Verantwoorde Consumptie en Productie',
      description: 'We bevorderen duurzame consumptie- en productiepatronen door hergebruik van IT-apparatuur.',
      color: 'bg-amber-600',
    },
    {
      number: 13,
      title: 'Klimaatactie',
      description: 'Onze circulaire aanpak draagt bij aan de vermindering van broeikasgasemissies.',
      color: 'bg-green-600',
    }
  ];

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
                Onze Missie
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Onze <span className="text-green-600 dark:text-green-400">Duurzaamheid</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Bij Neiwu staat duurzaamheid centraal in alles wat we doen. We streven naar een circulaire economie waarin IT-apparatuur en materialen zo lang mogelijk in de keten blijven, met minimale impact op het milieu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                  Meer Informatie <FiArrowRight />
                </Link>
                <Link href="/diensten/hardware-recycling" className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-colors">
                  Onze Recyclingdienst
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/sustainability.jpg" 
                  alt="Duurzaamheid bij Neiwu" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Circulaire IT-oplossingen</div>
                  <div className="text-green-200">Voor een duurzamere toekomst</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Duurzaamheidsdoelen
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              We hebben ambitieuze doelen gesteld om onze impact op het milieu te minimaliseren en bij te dragen aan een duurzamere wereld.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityGoals.map((goal) => (
              <div key={goal.title} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{goal.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{goal.description}</p>
                <div className="text-green-600 dark:text-green-400 font-medium">{goal.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Milieu-impact
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Door onze circulaire aanpak realiseren we een significante positieve impact op het milieu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Jaarlijkse Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">300K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Verwerkte apparaten</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">450 ton</div>
                  <div className="text-gray-600 dark:text-gray-400">CO2 bespaard</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">900K m³</div>
                  <div className="text-gray-600 dark:text-gray-400">Water bespaard</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">240 ton</div>
                  <div className="text-gray-600 dark:text-gray-400">Grondstoffen bespaard</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Materiaalhergebruik</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Metalen</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Kunststoffen</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Glas</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">97.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '97.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Overige materialen</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">95.0%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Certificeringen
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Wij voldoen aan de hoogste internationale standaarden voor duurzaamheid en milieubeheer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">ISO 14001</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Milieumanagement</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">WEEELABEX</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">E-waste verwerking</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">ADISA</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Gecertificeerde dataverwijdering</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">Blauer Engel</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Milieuvriendelijke processen</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center border border-gray-100 dark:border-gray-700">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">CO2 Prestatieladder</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">CO2-reductie</p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Bijdrage aan UN Sustainable Development Goals
            </h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Onze activiteiten dragen bij aan meerdere Duurzame Ontwikkelingsdoelen van de Verenigde Naties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdgContributions.map((sdg) => (
              <div key={sdg.number} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 ${sdg.color} flex items-center justify-center text-white font-bold text-2xl`}>
                  {sdg.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-16">{sdg.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{sdg.description}</p>
              </div>
            ))}
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
              Kies voor onze duurzame IT-oplossingen en draag bij aan een circulaire economie en een gezondere planeet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Neem Contact Op <FiArrowRight />
              </Link>
              <Link href="/diensten" className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white border border-green-500 rounded-lg font-medium transition-colors">
                Onze Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 