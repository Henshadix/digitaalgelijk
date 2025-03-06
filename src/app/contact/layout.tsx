import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Neiwu - IT Hardware Recycling en Data Verwijdering',
  description: 'Neem contact op met Neiwu voor al uw vragen over IT hardware recycling, opkoop en veilige data verwijdering. Ons team staat voor u klaar.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 