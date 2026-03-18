import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ShieldCheck, HardHat, Clock } from 'lucide-react';
export function AboutSection() {
  const values = [{
    icon: <HardHat className="h-8 w-8 text-[#0066CC]" />,
    title: 'Profesional',
    description: 'Tim teknisi dan insinyur kami memiliki sertifikasi resmi dan terlatih menangani berbagai merek dan tipe unit.'
  }, {
    icon: <ShieldCheck className="h-8 w-8 text-[#0066CC]" />,
    title: 'Aman & Terpercaya',
    description: 'Keamanan adalah prioritas utama. Kami menerapkan standar keselamatan ketat dalam setiap proses instalasi dan maintenance.'
  }, {
    icon: <Clock className="h-8 w-8 text-[#0066CC]" />,
    title: 'Berpengalaman',
    description: 'Lebih dari 15 tahun melayani kebutuhan transportasi vertikal untuk berbagai jenis gedung di Indonesia.'
  }];
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Tentang Perusahaan" subtitle="Mitra terbaik untuk solusi transportasi vertikal gedung Anda." alignment="left" />
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                PT. Elevator Solutions Indonesia adalah perusahaan kontraktor
                spesialis yang bergerak di bidang pengadaan, pemasangan,
                modernisasi, dan perawatan lift, eskalator, serta dumbwaiter.
              </p>
              <p>
                Kami berdedikasi untuk memberikan solusi mobilitas vertikal yang
                efisien, aman, dan nyaman bagi pengguna gedung. Dengan dukungan
                tim ahli dan kemitraan dengan produsen global, kami menjamin
                kualitas instalasi yang presisi dan layanan purna jual yang
                responsif.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-[#DC2626] pl-4">
                <p className="text-3xl font-bold text-slate-900">250+</p>
                <p className="text-sm text-slate-500">Proyek Selesai</p>
              </div>
              <div className="border-l-4 border-[#0066CC] pl-4">
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500">Klien Puas</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => <div key={index} className="flex items-start p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-sm mr-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}