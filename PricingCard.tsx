import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  showTitle?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ showTitle = true }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto border-4 border-dashed border-slate-200 relative overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-0 right-0 bg-red-500 text-white font-bold px-4 py-2 rounded-bl-xl z-10">
        50% DE DESCUENTO
      </div>

      {showTitle && (
        <div className="text-center mb-8">
           <p className="text-slate-500 mb-2">¿Cuánto vale para ti aprender todo esto?</p>
           <h3 className="text-2xl font-bold text-slate-800">¡ACCEDE HOY MISMO! <span className="text-red-500">50% DE DESCUENTO</span></h3>
           <p className="text-xs text-slate-400 mt-2 uppercase">Recuerda que tienes acceso de por vida a todo el curso completo y a sus beneficios</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Mockup Image */}
        <div className="w-full md:w-1/2">
            <img 
                src="https://picsum.photos/seed/mockup1/500/400" 
                alt="Curso Mockup" 
                className="w-full h-auto object-contain rounded-lg"
            />
        </div>

        {/* Pricing Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="mb-4">
               <img src="https://picsum.photos/seed/logo_small/200/60" alt="Logo" className="h-12 mx-auto md:mx-0 object-contain mb-2" />
               <div className="inline-block bg-white border border-slate-200 rounded-full px-4 py-1 text-xs text-slate-500 mb-2">
                   -50% Hoy Únicamente por
               </div>
               <p className="text-red-500 text-xl font-bold line-through">antes a $60.00</p>
               <p className="text-brand-green font-extrabold text-6xl my-2 text-[#4ade80]">$30usd</p>
               <p className="font-bold text-slate-700">Precio en Dólares</p>
               <p className="text-red-600 font-bold uppercase">Único pago sin mensualidades</p>
            </div>

            <Button className="mb-4 text-sm md:text-lg animate-pulse">
                INSCRIBIRME CON EL 50% DE DESCUENTO
            </Button>
            
            <div className="flex justify-center gap-2 mb-6 opacity-60">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="mastercard" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="visa" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="paypal" className="h-4" />
            </div>
        </div>
      </div>

      {/* Feature List */}
      <div className="mt-8 space-y-2 text-sm text-slate-700">
        {[
          "ACCESO AL CURSO COMPLETO de accesorios en resina para emprender ( clases en video )",
          "BONO #1: CREA TU NEGOCIO EN RESINA",
          "BONO #2: ACCESORIO PARA TU CELULAR (POP SOCKET)",
          "BONO #3: PERSONALIZA TUS PIEZAS (IMPRESIÓN DE TEXTOS Y FOTOGRAFÍAS)",
          "BONO #4: APRENDE A SECAR FLORES NATURALES",
          "BONO #5: ENCAPSULA RECUERDOS ESPECIALES (DIENTES DE MASCOTAS)",
          "BONO #6: UTILIZA SOMBRAS COMO PIGMENTO",
          "BONO #7: CREA FIGURAS NAVIDEÑAS",
          "CERTIFICADO",
          "ACCESO AL CURSO PARA SIEMPRE",
          "SOPORTE POR WHATSAPP"
        ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>{item}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;