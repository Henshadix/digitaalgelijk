import { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamisch importeren van client component
const PageHeader = dynamic(() => import('@/components/ui/PageHeader'), { ssr: true });

export const metadata: Metadata = {
  title: 'Ad\'s Nieuwe iPhone 16',
  description: 'Ad heeft een nieuwe iPhone 16 gekocht!',
};

export default function AdPage() {
  return (
    <>
      <PageHeader
        title="Ad's Nieuwe iPhone 16"
        description="Goed nieuws! Ad heeft een nieuwe iPhone 16 gekocht."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600 dark:text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ad heeft een nieuwe iPhone 16!</h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Met trots kunnen we aankondigen dat Ad een gloednieuwe iPhone 16 heeft aangeschaft. 
                    Dit toestel beschikt over de nieuwste technologie en functies.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Specificaties</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">A18 Pro chip</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Geavanceerde camera met 48MP</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Verbeterde batterijduur</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">iOS 18 met nieuwe AI-functies</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                    "Deze nieuwe iPhone is geweldig! De snelheid en camera zijn indrukwekkend." - Ad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 