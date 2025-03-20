import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vacatures | Binnenkort Beschikbaar | Digitaalgelijk',
  description: 'Onze vacaturepagina is momenteel in ontwikkeling. Kom binnenkort terug voor alle carrièremogelijkheden binnen Digitaalgelijk.',
};

export default function VacaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 