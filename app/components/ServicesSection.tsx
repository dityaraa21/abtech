import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Building2, TrendingUp, Package, ArrowRight } from 'lucide-react';
export function ServicesSection() {
  const services = [{
    icon: <Building2 className="h-10 w-10 text-white" />,
    title: 'Pemasangan Lift',
    description: 'Solusi lift penumpang, lift barang, dan lift rumah sakit dengan teknologi terbaru. Hemat energi, halus, dan desain interior kabin yang elegan.',
    features: ['Passenger Lift', 'Cargo Lift', 'Hospital Lift', 'Home Lift']
  }, {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: 'Pemasangan Eskalator',
    description: 'Eskalator dan travelator untuk pusat perbelanjaan, stasiun, dan bandara. Dirancang untuk menangani trafik tinggi dengan durabilitas maksimal.',
    features: ['Indoor Escalator', 'Outdoor Escalator', 'Moving Walk', 'Travelator']
  }, {
    icon: <Package className="h-10 w-10 text-white" />,
    title: 'Pemasangan Dumbwaiter',
    description: 'Lift makanan dan dokumen kecil untuk restoran, hotel, dan rumah sakit. Higienis, efisien, dan material stainless steel food-grade.',
    features: ['Kitchen Lift', 'Document Lift', 'Medical Lift', 'Lab Lift']
  }];
  return <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Layanan Kami" subtitle="Solusi komprehensif untuk kebutuhan transportasi vertikal gedung Anda." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
              <div className="h-2 bg-[#0066CC] w-full group-hover:bg-[#DC2626] transition-colors" />
              <div className="p-8">
                <div className="w-16 h-16 bg-[#0066CC] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#DC2626] transition-colors shadow-lg shadow-blue-900/20">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2 group-hover:bg-[#0066CC]"></span>
                      {feature}
                    </li>)}
                </ul>

                <Button variant="outline" className="w-full group-hover:border-[#0066CC] group-hover:text-[#0066CC]">
                  Detail Layanan
                </Button>
              </div>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-sm pr-6">
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mr-3">
              Info
            </span>
            <span className="text-sm text-slate-600 mr-2">
              Kami juga menyediakan layanan modernisasi dan maintenance rutin.
            </span>
            <a href="#contact" className="text-[#0066CC] font-medium text-sm hover:underline flex items-center">
              Hubungi Sales <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>;
}