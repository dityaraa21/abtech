import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
export function ProjectsSection() {
  const projects = [{
    title: 'Grand Horizon Hotel',
    category: 'Hotel & Resort',
    location: 'Bali',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Sentra Medika Hospital',
    category: 'Rumah Sakit',
    location: 'Jakarta Selatan',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Menara Mandiri Tower',
    category: 'Perkantoran',
    location: 'Surabaya',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Green View Apartment',
    category: 'Apartemen',
    location: 'Bandung',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Metropolitan Mall',
    category: 'Pusat Perbelanjaan',
    location: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    title: 'Universitas Teknologi',
    category: 'Pendidikan',
    location: 'Yogyakarta',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proyek & Portofolio
            </h2>
            <p className="text-lg text-slate-600">
              Beberapa proyek yang telah kami selesaikan dengan sukses.
            </p>
            <div className="mt-4 h-1 w-20 bg-[#DC2626] mx-auto md:mx-0" />
          </div>
          <div className="hidden md:block">
            <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Lihat Semua Proyek
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 h-64 w-full">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#DC2626] text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full mr-2"></span>
                  {project.location}
                </p>
              </div>
            </div>)}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Lihat Semua Proyek
          </Button>
        </div>
      </div>
    </section>;
}