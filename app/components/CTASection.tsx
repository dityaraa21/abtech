import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail } from 'lucide-react';
export function CTASection() {
  return <section className="py-20 bg-[#0066CC] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#DC2626]/20 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Butuh Pemasangan Lift?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan
          proyek Anda. Tim ahli kami siap membantu.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="accent" size="lg" className="shadow-lg shadow-red-900/20" leftIcon={<Phone className="h-5 w-5" />}>
            Hubungi Kami Sekarang
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white" leftIcon={<Mail className="h-5 w-5" />}>
            Minta Penawaran
          </Button>
        </div>
      </div>
    </section>;
}