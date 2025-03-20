import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hardware Inkoop | Digitaalgelijk',
  description: 'Verkoop uw gebruikte IT-apparatuur voor een eerlijke prijs. We kopen laptops, desktops, mobiele apparaten en tablets op. Inclusief veilige dataverwijdering en transport.',
};

export default function HardwareOpkopenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 