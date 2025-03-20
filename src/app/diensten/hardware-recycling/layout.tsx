import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hardware Recycling | Digitaalgelijk',
  description: 'Duurzame recycling van IT-apparatuur met maximaal hergebruik van materialen en minimale milieubelasting. ISO 14001 gecertificeerd proces.',
};

export default function HardwareRecyclingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 