"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-[#0066CC] rounded flex items-center justify-center text-white font-bold text-lg mr-2">E</div>
              <span className="text-xl font-bold">
                ELEVATOR<span className="text-[#DC2626]">SOLUTIONS</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mitra terpercaya untuk solusi transportasi vertikal. Kami melayani pengadaan, pemasangan, dan perawatan lift serta eskalator dengan
              standar keamanan tertinggi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Menu Cepat</h3>
            <ul className="space-y-3">
              {["Home", "Tentang Kami", "Layanan", "Proyek", "Kontak"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#0066CC] transition-colors text-sm flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Layanan</h3>
            <ul className="space-y-3">
              {["Passenger Lift", "Cargo Lift", "Home Lift", "Escalator", "Dumbwaiter", "Maintenance"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#0066CC] transition-colors text-sm flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#DC2626] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Ruko Wanasari Komersial Jl. Raya Hm Bosih Selang Cau No.17, Wanasari, Cibitung, Bekasi, Jawa Barat 17520
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#DC2626] mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">(021) 8830368</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#DC2626] mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">marketing@abtech-lift.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} PT. Elevator Solutions Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
