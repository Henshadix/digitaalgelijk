import { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen | Neiwu',
  description: 'Antwoorden op veelgestelde vragen over onze diensten, processen en duurzaamheidsaanpak. Vind informatie over hardware opkopen, dataverwijdering en recycling.',
};

export default function FAQ() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Veelgestelde <span className="text-blue-600 dark:text-blue-400">Vragen</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Hier vindt u antwoorden op de meest gestelde vragen over onze diensten, processen en duurzaamheidsaanpak. Heeft u een vraag die hier niet wordt beantwoord? Neem dan gerust contact met ons op.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Algemene Vragen
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Wat doet Neiwu precies?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Neiwu is gespecialiseerd in duurzame IT-oplossingen voor bedrijven. Onze kerndiensten omvatten het opkopen van gebruikte hardware, veilige dataverwijdering volgens GDPR-normen en milieuvriendelijke recycling van IT-apparatuur. Daarnaast bieden we aanvullende diensten zoals IT Asset Management, logistieke diensten en waardebepaling van IT-apparatuur.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Werkt Neiwu samen met alle soorten bedrijven?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Ja, wij werken samen met bedrijven van alle groottes, van kleine startups tot grote multinationals. Onze diensten zijn schaalbaar en kunnen worden aangepast aan de specifieke behoeften van uw organisatie. We hebben ervaring in diverse sectoren, waaronder financiële dienstverlening, gezondheidszorg, onderwijs, overheid en meer.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Hoe kan ik een offerte aanvragen?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      U kunt eenvoudig een offerte aanvragen via ons contactformulier op de website, per e-mail naar info@digitaalgelijk.nl of telefonisch via +31 (0)20 123 4567. Vermeld daarbij zo veel mogelijk details over uw hardware (type, aantal, staat) voor een nauwkeurige offerte. Wij reageren doorgaans binnen 24 uur op offerteaanvragen.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mt-16 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hardware Opkopen
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Welke soorten hardware koopt Neiwu op?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Wij kopen een breed scala aan IT-apparatuur op, waaronder:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Laptops, desktops en servers</li>
                      <li>Netwerkapparatuur (switches, routers, firewalls)</li>
                      <li>Opslagapparatuur (NAS, SAN, tape libraries)</li>
                      <li>Mobiele apparaten (smartphones, tablets)</li>
                      <li>Monitoren en randapparatuur</li>
                      <li>Telecomapparatuur</li>
                    </ul>
                    <p className="mt-2">
                      Ook als uw apparatuur niet in deze lijst staat, neem gerust contact met ons op. We zijn geïnteresseerd in vrijwel alle soorten IT-apparatuur.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Hoe bepaalt Neiwu de waarde van mijn hardware?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      De waarde van uw hardware wordt bepaald op basis van verschillende factoren:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Type, merk en model van de apparatuur</li>
                      <li>Leeftijd en technische specificaties</li>
                      <li>Fysieke staat en functionaliteit</li>
                      <li>Huidige marktwaarde en vraag</li>
                      <li>Hoeveelheid apparatuur</li>
                    </ul>
                    <p className="mt-2">
                      Na een eerste inschatting op basis van uw informatie, voeren we een gedetailleerde inspectie uit om de definitieve waarde te bepalen. We streven naar transparantie en eerlijke prijzen gebaseerd op de actuele marktwaarde.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Is de ophaalservice echt gratis?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Ja, onze ophaalservice is volledig gratis in heel Nederland, ongeacht de hoeveelheid apparatuur of uw locatie. We regelen het transport, de logistiek en de administratie zonder extra kosten. Dit is onderdeel van onze service om het proces zo eenvoudig mogelijk te maken voor onze klanten.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mt-16 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Data Verwijdering
              </h2>
              <div className="h-1 w-20 bg-purple-600 rounded"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Hoe garandeert Neiwu dat mijn data veilig wordt verwijderd?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Wij gebruiken gecertificeerde dataverwijderingsmethoden die voldoen aan de hoogste internationale standaarden, waaronder:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>NIST 800-88 richtlijnen voor mediaverwijdering</li>
                      <li>DoD 5220.22-M standaard</li>
                      <li>ADISA gecertificeerde processen</li>
                    </ul>
                    <p className="mt-2">
                      Afhankelijk van het type opslagmedium passen we verschillende technieken toe, zoals meervoudige overschrijvingen of degaussing. Voor media die niet veilig kunnen worden gewist, bieden we fysieke vernietiging. Alle processen worden uitgevoerd in een beveiligde omgeving door getraind personeel.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Wat houdt het certificaat van dataverwijdering in?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Na het voltooien van de dataverwijdering ontvangt u een gedetailleerd certificaat dat dient als officieel bewijs dat uw data veilig is verwijderd. Dit certificaat bevat:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Identificatie van de apparatuur (serienummers, asset tags)</li>
                      <li>Datum en tijd van dataverwijdering</li>
                      <li>Gebruikte methode en standaard</li>
                      <li>Verificatie van succesvolle verwijdering</li>
                      <li>Uniek certificaatnummer voor traceerbaarheid</li>
                    </ul>
                    <p className="mt-2">
                      Dit certificaat is belangrijk voor uw administratie en compliance met regelgeving zoals de GDPR/AVG.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Is de dataverwijdering GDPR/AVG-compliant?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Ja, onze dataverwijderingsprocessen voldoen volledig aan de eisen van de Algemene Verordening Gegevensbescherming (AVG/GDPR). We zorgen ervoor dat alle persoonsgegevens definitief worden verwijderd, waardoor het risico op datalekken wordt geëlimineerd. Onze processen zijn ontworpen om te voldoen aan de verplichting om persoonsgegevens niet langer te bewaren dan noodzakelijk en om deze veilig te verwijderen wanneer ze niet meer nodig zijn.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mt-16 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hardware Recycling
              </h2>
              <div className="h-1 w-20 bg-green-600 rounded"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Hoe draagt Neiwu bij aan duurzaamheid?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Onze bijdrage aan duurzaamheid omvat verschillende aspecten:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Verlenging van de levensduur van IT-apparatuur door hergebruik</li>
                      <li>99% hergebruik van materialen uit afgedankte apparatuur</li>
                      <li>Significante CO2-reductie door circulaire aanpak</li>
                      <li>Vermindering van elektronisch afval op stortplaatsen</li>
                      <li>Beperking van de behoefte aan nieuwe grondstoffen</li>
                    </ul>
                    <p className="mt-2">
                      Al onze processen zijn ISO 14001 gecertificeerd, wat garandeert dat we voldoen aan de hoogste milieunormen. We streven naar continue verbetering van onze milieuprestaties en transparante rapportage over onze impact.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Wat gebeurt er met apparatuur die niet kan worden hergebruikt?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Apparatuur die niet in zijn geheel kan worden hergebruikt, wordt zorgvuldig gedemonteerd in onze gespecialiseerde faciliteit. De verschillende componenten en materialen worden gescheiden en gesorteerd voor recycling:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Metalen worden gesmolten en hergebruikt in nieuwe producten</li>
                      <li>Kunststoffen worden verwerkt tot granulaat voor nieuwe toepassingen</li>
                      <li>Printplaten worden verwerkt om waardevolle metalen terug te winnen</li>
                      <li>Glas wordt gerecycled voor gebruik in nieuwe producten</li>
                    </ul>
                    <p className="mt-2">
                      Slechts een zeer klein percentage (minder dan 1%) dat niet kan worden gerecycled, wordt op een milieuvriendelijke manier verwerkt volgens de strengste regelgeving.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Ontvang ik een duurzaamheidsrapport?</span>
                    <span className="transition group-open:rotate-180">
                      <FiChevronDown className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <p>
                      Ja, na de recycling van uw apparatuur ontvangt u een gedetailleerd duurzaamheidsrapport met:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Exacte hoeveelheid gerecyclede materialen per type</li>
                      <li>Berekende CO2-besparing en milieu-impact</li>
                      <li>Vergelijking met traditionele verwerkingsmethoden</li>
                      <li>Bijdrage aan UN Sustainable Development Goals</li>
                    </ul>
                    <p className="mt-2">
                      Dit rapport kunt u gebruiken voor uw eigen duurzaamheidsverslaglegging en om uw bijdrage aan een circulaire economie aan te tonen.
                    </p>
                  </div>
                </details>
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
              Heeft u nog andere vragen?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Neem contact met ons op voor meer informatie over onze diensten of voor antwoorden op specifieke vragen.
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