import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Quote } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    quote: 'Pelayanan sangat profesional. Pemasangan lift di gedung kantor kami selesai tepat waktu dengan hasil yang sangat rapi. Tim teknisi sangat responsif.',
    author: 'Budi Santoso',
    role: 'Project Manager',
    company: 'PT. Bangun Jaya Konstruksi'
  }, {
    quote: 'Kami mempercayakan maintenance eskalator mall kami kepada tim ini selama 3 tahun terakhir. Performa unit selalu prima dan minim downtime.',
    author: 'Hendrawan',
    role: 'Building Management',
    company: 'City Plaza Mall'
  }, {
    quote: 'Solusi dumbwaiter untuk restoran kami sangat membantu operasional. Instalasi cepat dan training penggunaan sangat jelas.',
    author: 'Siti Rahmawati',
    role: 'Owner',
    company: 'Restoran Rasa Nusantara'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Kata Klien Kami" subtitle="Kepercayaan klien adalah bukti kualitas layanan kami." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <Quote className="h-10 w-10 text-[#0066CC]/20 absolute top-6 right-6" />

              <div className="mb-6">
                {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-lg">
                    ★
                  </span>)}
              </div>

              <p className="text-slate-600 mb-6 italic leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm mr-3">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    {item.author}
                  </p>
                  <p className="text-xs text-slate-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}