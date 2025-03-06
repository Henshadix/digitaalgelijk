import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiUsers, FiTarget, FiAward, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Over Ons | Neiwu',
  description: 'Leer meer over Neiwu, onze missie, visie en het team achter onze duurzame IT-oplossingen. Ontdek hoe wij bijdragen aan een circulaire economie.',
};

export default function OverOns() {
  // Team members
  const teamMembers = [
    {
      name: 'Jan de Vries',
      role: 'CEO & Oprichter',
      bio: 'Jan heeft meer dan 15 jaar ervaring in de IT-sector en is gepassioneerd over duurzaamheid en circulaire economie. Hij richtte Neiwu op in 2015 met de missie om de IT-industrie duurzamer te maken.',
      imageSrc: '/images/team/jan.jpg',
    },
    {
      name: 'Lisa Janssen',
      role: 'COO',
      bio: 'Lisa is verantwoordelijk voor de dagelijkse operaties en zorgt ervoor dat alle processen soepel verlopen. Met haar achtergrond in supply chain management optimaliseert ze onze logistieke processen.',
      imageSrc: '/images/team/lisa.jpg',
    },
    {
      name: 'Mohammed El Amrani',
      role: 'CTO',
      bio: 'Mohammed leidt ons technische team en is verantwoordelijk voor de ontwikkeling van onze dataverwijderingsprocessen. Hij heeft een achtergrond in cybersecurity en dataprotectie.',
      imageSrc: '/images/team/mohammed.jpg',
    },
    {
      name: 'Sophie van Dijk',
      role: 'Sustainability Officer',
      bio: 'Sophie zorgt ervoor dat duurzaamheid centraal staat in alles wat we doen. Ze ontwikkelt onze duurzaamheidsstrategieën en rapporteert over onze milieu-impact.',
      imageSrc: '/images/team/sophie.jpg',
    }
  ];

  // Company milestones
  const milestones = [
    {
      year: '2015',
      title: 'Oprichting Neiwu',
      description: 'Neiwu werd opgericht met de missie om de IT-industrie duurzamer te maken door circulaire oplossingen.',
    },
    {
      year: '2017',
      title: 'ISO 14001 Certificering',
      description: 'We behaalden onze eerste ISO 14001 certificering voor milieumanagement.',
    },
    {
      year: '2019',
      title: 'Uitbreiding Faciliteit',
      description: 'Opening van onze state-of-the-art recycling- en dataverwijderingsfaciliteit in Amsterdam.',
    },
    {
      year: '2020',
      title: 'ADISA Certificering',
      description: 'We behaalden de ADISA certificering voor onze dataverwijderingsprocessen.',
    },
    {
      year: '2022',
      title: '100.000ste Apparaat',
      description: 'We verwerkten ons 100.000ste apparaat en vierden deze mijlpaal met het planten van 10.000 bomen.',
    },
    {
      year: '2023',
      title: 'Europese Expansie',
      description: 'Start van onze dienstverlening in België en Duitsland.',
    }
  ];

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
                Ons Verhaal
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Over <span className="text-blue-600 dark:text-blue-400">Neiwu</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Neiwu is een toonaangevend bedrijf in duurzame IT-oplossingen. Wij zijn gespecialiseerd in het opkopen van gebruikte hardware, veilige dataverwijdering en milieuvriendelijke recycling. Onze missie is om bij te dragen aan een circulaire economie en de milieu-impact van de IT-industrie te verminderen.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about/office.jpg" 
                  alt="Neiwu kantoor" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-white text-xl font-bold">Ons hoofdkantoor in Amsterdam</div>
                  <div className="text-blue-200">Duurzaam gebouwd en energie-neutraal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiTarget className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Onze Missie</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Onze missie is om de IT-industrie duurzamer te maken door circulaire oplossingen te bieden die de levensduur van hardware verlengen, data veilig verwijderen en materialen maximaal hergebruiken. We streven ernaar om de ecologische voetafdruk van IT-apparatuur te minimaliseren en bij te dragen aan een gezondere planeet.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <FiAward className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Onze Visie</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Wij zien een toekomst waarin IT-apparatuur volledig circulair is, waarbij materialen eindeloos worden hergebruikt en er geen elektronisch afval meer bestaat. We willen de standaard zetten voor duurzame IT-praktijken en bedrijven helpen om hun digitale transformatie op een milieuvriendelijke manier te realiseren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Kernwaarden
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Deze waarden vormen de basis van alles wat we doen en hoe we omgaan met onze klanten, partners en het milieu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Duurzaamheid</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We streven naar maximale duurzaamheid in al onze processen en beslissingen, met het oog op de lange termijn impact op onze planeet.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Betrouwbaarheid</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We doen wat we beloven en zijn transparant in onze processen, prijzen en impact. Onze klanten kunnen op ons rekenen.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovatie</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We zoeken voortdurend naar nieuwe en betere manieren om onze diensten te verbeteren en de milieu-impact van IT te verminderen.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Samenwerking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We geloven in de kracht van samenwerking met klanten, partners en de gemeenschap om samen een duurzamere toekomst te creëren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ons Team
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Maak kennis met de mensen achter Neiwu die elke dag werken aan onze missie om de IT-industrie duurzamer te maken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image 
                    src={member.imageSrc} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Mijlpalen
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Een overzicht van belangrijke momenten in de geschiedenis van Neiwu.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative">
                    {/* Year bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    
                    {/* Content */}
                    <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className="w-1/2"></div>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
              Werk met ons samen
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ontdek hoe Neiwu uw bedrijf kan helpen met duurzame IT-oplossingen. Neem vandaag nog contact met ons op.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors flex items-center gap-2">
                Contact Opnemen <FiArrowRight />
              </Link>
              <Link href="/diensten" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 rounded-lg font-medium transition-colors">
                Onze Diensten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 