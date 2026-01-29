import React, { useState, useRef, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronRight, Star, ArrowDown, Award, ShieldCheck, MapPin, Volume2 } from 'lucide-react';
import Button from './components/Button';
import SectionTitle from './components/SectionTitle';
import PricingCard from './components/PricingCard';
import CookieRedirectPopup from './components/CookieRedirectPopup';
import { PROJECTS, MODULES, BONUSES, FAQS, BENEFITS } from './constants';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [logoError, setLogoError] = useState(false); // Nuevo estado para el logo
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Forzar inicio del video al cargar (Autoplay agresivo para el preview)
  useEffect(() => {
    if (videoRef.current && !isVideoPlaying) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay preventivo bloqueado por el navegador:", error);
      });
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.loop = false;
      videoRef.current.controls = true;
      videoRef.current.play().catch(e => console.log("Play failed", e));
    }
  };

  const handleTimeUpdate = () => {
    // Modo Preview: Si no le han dado clic, loopeamos los primeros 15 segs
    if (!isVideoPlaying && videoRef.current) {
      if (videoRef.current.currentTime >= 15) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {}); // Asegurar que siga reproduciendo
      }
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden relative">
      
      {/* --- POPUP TRAMPA (Z-INDEX ALTO) --- */}
      <div className="relative z-[9999]">
         <CookieRedirectPopup />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-8 pb-24 px-4 overflow-hidden bg-[#EBE3FF] bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('https://cdn.jsdelivr.net/gh/Rudolfmastery/alambre@main/webpcrianzainfantil/S1-PC-v3.webp')"
      }}>
        {/* Fallback Decorative Elements */}
        <div className="absolute inset-0 z-0 bg-white/30 backdrop-blur-[1px]"></div>
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply" style={{
            backgroundImage: 'linear-gradient(to right, #8B5CF620 1px, transparent 1px), linear-gradient(to bottom, #8B5CF620 1px, transparent 1px)',
            backgroundSize: '32px 32px'
        }}></div>

         {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8 flex justify-center relative z-20">
             {/* Imagen del Logo */}
             <img 
                src="https://academiadigitaldye.com/wp-content/uploads/2025/08/logo-accesorios-resina.png" 
                alt="Accesorios en Resina" 
                className={`w-48 md:w-64 h-auto object-contain drop-shadow-sm ${logoError ? 'hidden' : 'block'}`}
                onError={() => setLogoError(true)}
             />
             {/* Texto Fallback (Si la imagen falla, mostramos esto) */}
             <h1 className={`text-3xl font-bold text-[#5B21B6] mb-4 bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-200 ${logoError ? 'block' : 'hidden'}`}>
                Accesorios en Resina
             </h1>
          </div>
          
          {/* Headline */}
          <div className="mb-10 max-w-3xl mx-auto">
             <h2 className="text-xl md:text-[28px] leading-tight md:leading-snug text-[#4C1D95] drop-shadow-sm bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                <span className="font-normal block mb-1">Descubre cómo cientos de mujeres están</span>
                <span className="font-extrabold text-[#5B21B6] block">elaborando accesorios en resina de manera</span>
                <span className="font-extrabold text-[#5B21B6]">creativa desde casa</span> <span className="text-[#6D28D9]">creando su propio</span>
                <span className="text-[#6D28D9] block">negocio en tan solo 30 días</span>
             </h2>
          </div>

          {/* Video Container */}
          <div className="relative w-full max-w-[800px] mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group cursor-pointer border-[1px] border-white/30 z-20">
            <video 
              ref={videoRef}
              src={videoError ? "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" : "https://academiadigitaldye.com/wp-content/uploads/2025/08/BIENVENIDA-1.mp4"}
              className="w-full h-full object-cover" 
              muted 
              autoPlay 
              playsInline
              // Si no está reproduciendo (modo preview), dejamos que el handleTimeUpdate haga el loop manual.
              // Si el usuario da play, quitamos el loop nativo para que vea el video completo.
              loop={!isVideoPlaying} 
              poster="https://cdn.jsdelivr.net/gh/Rudolfmastery/alambre@main/webpcrianzainfantil/Screenshot%202026-01-29%20115851.webp"
              onTimeUpdate={handleTimeUpdate}
              onError={() => setVideoError(true)}
            />

            {/* Overlay - Only visible if !isVideoPlaying (Preview Mode) */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 z-10 bg-black/10 transition-colors hover:bg-black/20" onClick={handleVideoClick}>
                 {/* Play/Volume Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-[#D94848]/90 text-white px-8 py-3 rounded-lg flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse backdrop-blur-sm border border-white/20 cursor-pointer">
                      <Volume2 className="w-8 h-8 mb-1 fill-current" />
                      <span className="text-[10px] md:text-xs font-medium leading-tight">El video ya inició</span>
                      <span className="text-xs md:text-sm font-bold uppercase leading-tight">Clic para escuchar</span>
                   </div>
                </div>
                
                {/* Progress Bar Simulation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                   <div className="h-full w-1/3 bg-red-600 animate-[progress_15s_linear_infinite]"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Left Curve Decoration */}
        <div className="absolute bottom-0 left-0 w-32 h-16 bg-white rounded-tr-[60px] z-10"></div>
      </header>

      {/* --- AUDIENCE SECTION --- */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>
            Este curso es perfecto <span className="text-purple-600">para ti si...</span>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "¿Te gustan las manualidades?",
              "Te sientes estancada económicamente y necesitas generar altos ingresos.",
              "No sabes cómo comenzar un negocio altamente rentable.",
              "Quieres libertad de horarios, y generar ingresos desde casa.",
              "¿Quieres comenzar un negocio con bajo presupuesto.",
              "¿Requieres un aprendizaje fácil, sencillo, rápido y práctico desde cero?"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                <div className="bg-orange-400 p-2 rounded-md flex-shrink-0 text-white">
                   {index % 2 === 0 ? <ChevronRight size={20} /> : <ArrowDown size={20} />}
                </div>
                <p className="font-medium text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-10">
              <div className="bg-orange-400 p-3 rounded-lg animate-bounce">
                  <ArrowDown className="text-white w-8 h-8" />
              </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl text-center shadow-lg border-2 border-purple-100 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-medium text-slate-700">
                  Y lo más importante: <br/>
                  <span className="font-bold">¿Necesitas un paso a paso de cómo hacer accesorios en resina para convertirlo en tu negocio?</span>
              </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-400 to-purple-600 p-8 rounded-xl text-center text-white shadow-lg transform -rotate-1 mx-4 md:mx-auto max-w-4xl">
              <h3 className="text-xl md:text-3xl font-bold italic font-serif">
                  ¡Imagínate poder aprender a hacer todo tipo de accesorios en resina y venderlas por las redes sociales a miles de personas!
              </h3>
          </div>
        </div>
      </section>

      {/* --- OUTCOME SECTION --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
           <SectionTitle className="mb-12">
               ¿QUÉ VAS A LOGRAR <span className="block text-purple-900">CON NUESTRO PROGRAMA?</span>
           </SectionTitle>
           
           <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
                 <img src="https://picsum.photos/seed/collage1/300/300" className="rounded-tl-3xl rounded-br-3xl w-full h-full object-cover shadow-md" alt="collage" />
                 <img src="https://picsum.photos/seed/collage2/300/300" className="rounded-tr-3xl rounded-bl-3xl w-full h-full object-cover shadow-md" alt="collage" />
                 <img src="https://picsum.photos/seed/collage3/300/300" className="rounded-tr-3xl rounded-bl-3xl w-full h-full object-cover shadow-md" alt="collage" />
                 <img src="https://picsum.photos/seed/collage4/300/300" className="rounded-tl-3xl rounded-br-3xl w-full h-full object-cover shadow-md" alt="collage" />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                 {BENEFITS.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                        <div className="bg-orange-100 text-orange-500 rounded-full p-2">
                           <Check className="w-6 h-6" />
                        </div>
                        <p className="text-slate-700 font-medium">{benefit.text}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- CURRICULUM SECTION --- */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-2">¡Aquí te lo enseñamos <span className="text-purple-600">TODO</span></h2>
           <h3 className="text-2xl font-bold text-purple-400 mb-6">paso a paso!</h3>
           <p className="text-slate-600 mb-8">Conoce todo el contenido completo aquí</p>
           
           <div className="bg-purple-100 inline-block px-6 py-2 rounded-full text-purple-800 font-bold mb-10">
               En más de 85 clases y 12 horas en video encontrarás..
           </div>

           <div className="space-y-3 text-left">
              {MODULES.map((module) => (
                  <div key={module.id} className="bg-purple-200 bg-opacity-50 p-4 rounded-lg flex items-center gap-4 hover:bg-purple-200 transition-colors">
                      <div className="bg-purple-400 text-white rounded-full p-1">
                          <ChevronRight size={20} />
                      </div>
                      <span className="font-semibold text-slate-800">{module.title}</span>
                  </div>
              ))}
              <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                      <li>Bienvenida al curso.</li>
                      <li>Lo que vas a aprender.</li>
                      <li>Comunidad privada en Whatsapp.</li>
                  </ul>
              </div>
           </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-16 px-4 bg-white">
         <div className="max-w-5xl mx-auto">
            <SectionTitle>
                ¡Estos son los proyectos <span className="text-purple-600">que aprenderás a elaborar!</span>
            </SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="flex flex-col items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-100 shadow-lg mb-3 hover:scale-105 transition-transform duration-300">
                            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-center font-bold text-slate-700 text-sm md:text-base">{project.name}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- CTA 1 --- */}
      <section className="py-12 px-4 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-slate-300 p-6 md:p-10 rounded-2xl bg-white">
             <p className="mb-4 text-slate-600 text-sm md:text-base">
                Aún puedes comenzar con tu negocio de Accesorios en Resina para emprender ahora mismo y en 1 mes ya estés generando altos ingresos adicionales por tus ventas. <br className="hidden md:block"/>
                Créeme que si comienzas hoy mismo a aprender y aplicar todos los conocimientos de este programa podrás llevar tu negocio a otro nivel ¡NO MÁS DUDAS!
             </p>
             <h4 className="font-extrabold text-xl md:text-2xl text-slate-800">
                 ¡SOLO TIENES QUE DAR EL <span className="text-orange-500">PRIMER PASO!</span>
             </h4>
          </div>
      </section>

      {/* --- PRICING SECTION 1 --- */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
         <PricingCard />
      </section>

      {/* --- BONUSES SECTION --- */}
      <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
             <SectionTitle>
                No solo aprenderás a elaborar accesorios en resina para tu emprendimiento sino también recibirás estos regalos.
             </SectionTitle>

             <div className="space-y-8">
                {BONUSES.map((bonus) => (
                    <div key={bonus.id} className="flex flex-col md:flex-row bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="md:w-1/3">
                            <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover min-h-[200px]" />
                        </div>
                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <h4 className="font-bold text-orange-500 uppercase mb-2">{bonus.title}</h4>
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-slate-500 text-sm">Clase video valorado en:</span>
                                <span className="font-bold text-green-600 text-lg">{bonus.value}</span>
                                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">GRATIS HOY</span>
                            </div>
                            <p className="text-slate-600 text-sm">{bonus.description}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </section>

      {/* --- EXTRA BENEFITS --- */}
      <section className="py-16 px-4 bg-purple-50">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-purple-800 mb-10">
                Inscríbete hoy al programa y obtén <br/> estos beneficios
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                 <div className="flex flex-col items-center">
                     <div className="w-40 h-40 bg-white rounded-xl shadow-lg p-2 mb-4 transform hover:-rotate-3 transition-transform">
                        <img src="https://picsum.photos/seed/pdf/300/400" alt="PDF" className="w-full h-full object-cover rounded" />
                     </div>
                     <p className="font-bold text-slate-700">Material de apoyo en PDF</p>
                 </div>
                 <div className="flex flex-col items-center">
                     <div className="w-40 h-40 bg-white rounded-xl shadow-lg p-2 mb-4 transform hover:rotate-3 transition-transform">
                        <img src="https://picsum.photos/seed/list/300/400" alt="Materiales" className="w-full h-full object-cover rounded" />
                     </div>
                     <p className="font-bold text-slate-700">Lista de materiales y proveedores</p>
                 </div>
                 <div className="flex flex-col items-center">
                     <div className="w-40 h-40 bg-white rounded-xl shadow-lg p-2 mb-4 flex items-center justify-center">
                         <div className="w-full h-full bg-green-500 rounded flex flex-col items-center justify-center text-white p-4">
                             <span className="font-bold text-2xl mb-2">VIP</span>
                             <span className="text-4xl font-bold">WhatsApp</span>
                         </div>
                     </div>
                     <p className="font-bold text-slate-700 font-orange-500">¡NO ESTARÁS SOLA!</p>
                     <p className="text-xs text-slate-500 mt-2 max-w-[200px]">Harás parte de una comunidad hermosa donde te ayudaremos con todas tus dudas.</p>
                 </div>
            </div>

            <div className="bg-purple-100 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">¡gratis!</div>
                <h3 className="text-purple-700 font-bold uppercase mb-2">¡ESPERA! AÚN HAY MÁS</h3>
                <p className="text-slate-600 mb-6">Por realizar la compra hoy mismo recibirás completamente ¡gratis!</p>
                
                <h2 className="text-2xl font-extrabold text-blue-800 mb-2">MÓDULO DE CREA LA MARCA DE TU NEGOCIO</h2>
                <p className="text-slate-500 mb-6 text-sm">Para que puedas ampliar tus conocimientos y aplicarlos en tu negocio</p>

                <div className="flex justify-center">
                    <img src="https://picsum.photos/seed/bonusbrand/500/300" alt="Marketing Bonus" className="rounded-lg shadow-xl" />
                </div>
                
                <div className="mt-8">
                     <p className="text-red-500 font-bold text-sm uppercase mb-4">¡INSCRÍBETE HOY PARA RECIBIR LOS BONOS GRATIS!</p>
                     <Button className="max-w-md text-base py-3">INSCRIBIRME CON EL 50% DE DESCUENTO</Button>
                </div>
            </div>
         </div>
      </section>

      {/* --- PRICING SECTION 2 --- */}
      <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto mb-10 text-center">
               <div className="inline-block bg-purple-500 text-white font-bold px-8 py-2 rounded-lg shadow-lg uppercase tracking-wide mb-6">
                   Llévate todos estos beneficios
               </div>
          </div>
          <PricingCard showTitle={true} />
      </section>

      {/* --- CERTIFICATE & GUARANTEE --- */}
      <section className="py-16 px-4 bg-purple-50">
          <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Certificate */}
              <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-slate-700 mb-2">ADEMÁS PODRÁS RECLAMAR <span className="text-purple-600">TU CERTIFICADO PERSONALIZADO CON TU NOMBRE</span></h3>
                      <p className="text-slate-500 text-sm">Una vez que concluyas el curso completo podrás descargar tu certificado personalizado con tu nombre, sin ningún costo extra.</p>
                  </div>
                  <div className="md:w-1/2">
                      <img src="https://picsum.photos/seed/certificate/400/250" alt="Certificado" className="w-full rounded-lg shadow-md border-4 border-slate-100" />
                  </div>
              </div>

              {/* Guarantee */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                   <div className="w-32 h-32 flex-shrink-0">
                       <div className="w-full h-full bg-purple-600 rounded-full flex items-center justify-center text-white border-4 border-purple-300 shadow-xl">
                           <span className="text-3xl font-bold">7D</span>
                       </div>
                   </div>
                   <div>
                       <h3 className="text-xl font-bold text-purple-600 uppercase mb-2 flex items-center gap-2">
                           <ShieldCheck className="w-6 h-6" />
                           Política y Garantía de Satisfacción
                       </h3>
                       <p className="text-slate-600 text-sm font-bold mb-2">¡No tienes nada que perder!</p>
                       <p className="text-slate-500 text-sm leading-relaxed">
                           Tienes 7 días a partir de la compra para probar nuestro curso "Accesorios en resina para emprender". Si dentro de ese período nuestro curso no cumple y/o supera tus expectativas te reembolsamos el 100% de tu dinero SIN hacer ninguna pregunta. Te lo garantiza Hotmart® La empresa y plataforma tecnológica que soporta toda nuestra operación y donde vas a realizar el pago.
                       </p>
                   </div>
              </div>
          </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
           <SectionTitle>PREGUNTAS FRECUENTES</SectionTitle>
           
           <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center font-semibold text-slate-700"
                      >
                          <span className="flex items-center gap-2">
                              <span className="text-purple-600">?</span> {faq.question}
                          </span>
                          <ChevronDown className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                      </button>
                      {openFaq === idx && (
                          <div className="p-4 bg-white text-slate-600 text-sm border-t border-slate-100">
                              {faq.answer}
                          </div>
                      )}
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-purple-900 text-purple-200 py-8 text-center text-sm">
          <div className="max-w-4xl mx-auto px-4">
              <p>Copyright 2025 ©Academia Digital Dye | Powered by Keira Solórzano</p>
          </div>
      </footer>
      
      {/* Sticky Mobile CTA (Optional, commonly found on these pages) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
          <Button className="text-sm py-3">INSCRIBIRME AHORA - $30 USD</Button>
      </div>

    </div>
  );
};

export default App;