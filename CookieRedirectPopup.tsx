import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

const CookieRedirectPopup: React.FC = () => {
  const TARGET_URL = "https://go.hotmart.com/V104109480K";

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        
        {/* Header con botón de cerrar "falso" */}
        <div className="flex justify-between items-center p-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <span>Configuración de privacidad</span>
          </div>
          <a href={TARGET_URL} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
            <X size={24} />
          </a>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y mostrarle publicidad relacionada con sus preferencias mediante análisis de sus hábitos de navegación. Para aceptar su uso puede pulsar en el botón "Aceptar todas".
          </p>
          <p className="text-slate-600 text-sm mb-6">
            Puede obtener más información en nuestra{' '}
            <a 
              href={TARGET_URL} 
              className="text-purple-600 font-bold hover:underline cursor-pointer"
            >
              Política de Cookies
            </a>.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col md:flex-row gap-3">
            <a 
              href={TARGET_URL}
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-600 font-semibold text-center hover:bg-slate-50 transition-colors text-sm uppercase"
            >
              Rechazar
            </a>
            <a 
              href={TARGET_URL}
              className="flex-1 px-4 py-3 rounded-lg bg-purple-600 text-white font-bold text-center hover:bg-purple-700 shadow-lg transform active:scale-95 transition-all text-sm uppercase"
            >
              Aceptar todas
            </a>
          </div>
        </div>
        
        {/* Footer pequeño decorativo */}
        <div className="bg-slate-50 p-2 text-center border-t border-slate-100">
             <span className="text-[10px] text-slate-400">Protegido por reCAPTCHA y Google.</span>
        </div>
      </div>
    </div>
  );
};

export default CookieRedirectPopup;