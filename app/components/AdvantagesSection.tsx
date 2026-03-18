import React, { cloneElement } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Award, Shield, Wrench, Building } from "lucide-react";
export function AdvantagesSection() {
  const advantages = [
    {
      icon: <Award className="h-8 w-8 text-[#0066CC]" />,
      title: "Teknisi Bersertifikat",
      description: "Tim teknis kami memiliki sertifikasi K3 Lift & Eskalator resmi dari Kemnaker RI.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#0066CC]" />,
      title: "Standar Keamanan",
      description: "Penerapan standar keamanan internasional EN-81 dan SNI dalam setiap instalasi.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#0066CC]" />,
      title: "Garansi & Maintenance",
      description: "Jaminan garansi sparepart dan layanan maintenance berkala yang responsif 24/7.",
    },
    {
      icon: <Building className="h-8 w-8 text-[#0066CC]" />,
      title: "Pengalaman Proyek",
      description: "Portofolio luas menangani proyek high-rise building, mall, hingga rumah sakit.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Keunggulan Kami" subtitle="Mengapa developer dan kontraktor memilih kami sebagai mitra." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {advantages.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0066CC] transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {cloneElement(item.icon as React.ReactElement, {
                    className: "h-10 w-10",
                  })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
