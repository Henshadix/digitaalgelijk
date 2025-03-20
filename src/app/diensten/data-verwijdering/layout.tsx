import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Data Verwijdering | Digitaalgelijk',
  description: 'Gecertificeerde dataverwijdering volgens de hoogste veiligheidsnormen, met uitgebreide rapportage en certificering. GDPR-compliant en geschikt voor alle opslagmedia.',
};

export default function DataVerwijderingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 