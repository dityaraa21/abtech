import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.namaperusahaananda.co.id"),

  title: {
    default: "PT Abdi Teknik Elevator | Jasa Pemasangan Lift, Eskalator & Dumbwaiter",
    template: "%s | PT Abdi Teknik Elevator",
  },

  description:
    "PT Abdi Teknik Elevator adalah perusahaan profesional yang bergerak di bidang jasa pemasangan, perawatan, dan modernisasi lift, eskalator, dan dumbwaiter untuk gedung perkantoran, rumah sakit, hotel, dan apartemen di seluruh Indonesia.",

  keywords: [
    "jasa pemasangan lift",
    "kontraktor lift",
    "jasa eskalator",
    "pemasangan eskalator",
    "jasa dumbwaiter",
    "kontraktor lift indonesia",
    "perusahaan lift",
    "service lift dan eskalator",
    "pemasangan lift gedung",
    "jasa lift profesional",
  ],

  authors: [{ name: "PT Abdi Teknik Elevator" }],
  creator: "PT Abdi Teknik Elevator",
  publisher: "PT Abdi Teknik Elevator",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.namaperusahaananda.co.id",
    siteName: "PT Abdi Teknik Elevator",
    title: "PT Abdi Teknik Elevator | Jasa Lift, Eskalator & Dumbwaiter",
    description:
      "Spesialis jasa pemasangan dan perawatan lift, eskalator, dan dumbwaiter untuk berbagai jenis bangunan dengan standar keselamatan tinggi.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Abdi Teknik Elevator - Jasa Pemasangan Lift dan Eskalator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PT Abdi Teknik Elevator | Jasa Lift & Eskalator",
    description: "Perusahaan jasa pemasangan lift, eskalator, dan dumbwaiter profesional dan terpercaya di Indonesia.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.namaperusahaananda.co.id",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
