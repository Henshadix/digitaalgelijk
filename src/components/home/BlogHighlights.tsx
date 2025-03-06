'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

// Uitgelichte blogartikelen voor de homepage
const featuredPosts = [
  {
    id: "e-waste-crisis",
    title: "De groeiende e-waste crisis: wat kunnen bedrijven doen?",
    excerpt: "Elektronisch afval is een van de snelst groeiende afvalstromen ter wereld. Ontdek hoe bedrijven kunnen bijdragen aan het verminderen van e-waste.",
    date: "15 februari 2024",
    image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Duurzaamheid"
  },
  {
    id: "data-security-tips",
    title: "5 essentiële tips voor databeveiliging bij afstoting van hardware",
    excerpt: "Bij het vervangen van oude hardware is databeveiliging cruciaal. Lees onze top 5 tips om uw gevoelige gegevens te beschermen.",
    date: "28 januari 2024",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Databeveiliging"
  },
  {
    id: "circular-it",
    title: "Circulaire IT: de toekomst van duurzame hardware",
    excerpt: "Circulaire economie wint terrein in de IT-sector. Ontdek hoe circulaire IT-strategieën kosten kunnen besparen én het milieu kunnen helpen.",
    date: "10 januari 2024",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Duurzaamheid"
  }
];

const BlogHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Laatste Nieuws & Inzichten
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Blijf op de hoogte van de laatste ontwikkelingen op het gebied van hardware recycling, 
              databeveiliging en duurzame IT-oplossingen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  Lees meer
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Bekijk alle artikelen
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights; 