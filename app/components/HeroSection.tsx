import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#0066CC] skew-x-12 transform origin-top-right translate-x-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] text-sm font-medium mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-[#0066CC] mr-2"></span>
              Mitra Terpercaya Konstruksi Modern
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Solusi <span className="text-[#0066CC]">Lift, Eskalator</span> & <span className="text-[#0066CC]">Dumbwaiter</span> Profesional
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kami menghadirkan teknologi transportasi vertikal dengan standar keamanan tertinggi. Pengalaman puluhan tahun melayani gedung
              perkantoran, hotel, rumah sakit, dan apartemen di seluruh Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Konsultasi Gratis
              </Button>
              <Button variant="outline" size="lg">
                Lihat Portofolio
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#DC2626] mr-2" />
                <span>Teknisi Bersertifikat</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#DC2626] mr-2" />
                <span>Standar ISO 9001</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#DC2626] mr-2" />
                <span>Layanan 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for Elevator Image */}
              <div className="w-full h-full flex items-center justify-center bg-slate-200 relative">
                {/* Abstract representation of an elevator shaft/modern building */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Proyek Terbaru</p>
                      <p className="text-lg font-bold text-slate-900">Grand Central Tower, Jakarta</p>
                    </div>
                    <div className="text-[#0066CC] font-bold text-2xl">24 Lt.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-8 top-12 bg-[#DC2626] text-white p-6 rounded-lg shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90">Tahun Pengalaman Industri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
