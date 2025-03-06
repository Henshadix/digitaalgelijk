import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Website in ontwikkeling | Digitaalgelijk',
  description: 'Deze website is momenteel in ontwikkeling. Kom binnenkort terug voor meer informatie.',
};

export default function UnderConstructionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 