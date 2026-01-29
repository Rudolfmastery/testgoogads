import { Project, Module, Bonus, FaqItem, Benefit } from './types';

export const PROJECTS: Project[] = [
  { id: 1, name: "Llaveros", image: "https://picsum.photos/seed/resina1/200/200" },
  { id: 2, name: "Placas para mascotas", image: "https://picsum.photos/seed/resina2/200/200" },
  { id: 3, name: "Posa vasos", image: "https://picsum.photos/seed/resina3/200/200" },
  { id: 4, name: "Bandejas", image: "https://picsum.photos/seed/resina4/200/200" },
  { id: 5, name: "Aretes y collares", image: "https://picsum.photos/seed/resina5/200/200" },
  { id: 6, name: "Cofre", image: "https://picsum.photos/seed/resina6/200/200" },
  { id: 7, name: "Make up - Mostradores", image: "https://picsum.photos/seed/resina7/200/200" },
  { id: 8, name: "Marca páginas", image: "https://picsum.photos/seed/resina8/200/200" },
  { id: 9, name: "Pirámide", image: "https://picsum.photos/seed/resina9/200/200" },
  { id: 10, name: "Cuadernos", image: "https://picsum.photos/seed/resina10/200/200" },
  { id: 11, name: "Lapiceros", image: "https://picsum.photos/seed/resina11/200/200" },
  { id: 12, name: "Cenicero", image: "https://picsum.photos/seed/resina12/200/200" },
];

export const MODULES: Module[] = [
  { id: 1, title: "Introducción al mundo de los accesorios en resina" },
  { id: 2, title: "Teoría" },
  { id: 3, title: "Preguntas frecuentes" },
  { id: 4, title: "Materiales y herramientas" },
  { id: 5, title: "Medidas y porcentajes" },
  { id: 6, title: "Aspectos importantes antes de comenzar la práctica" },
  { id: 7, title: "Módulo práctico: técnicas en la resina" },
  { id: 8, title: "Módulo práctico: efectos en la resina" },
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "PERSONALIZA TUS PIEZAS EN RESINA",
    description: "En esta clase te enseñaremos cómo puedes diseñar diferentes textos en el programa de silhouette para que así mismo personalices las piezas de tus clientes.",
    value: "$25,00",
    image: "https://picsum.photos/seed/bonus1/300/200"
  },
  {
    id: 2,
    title: "CÓMO SECAR FLORES NATURALES",
    description: "Te enseñaré diferentes métodos que puedes utilizar para secar flores naturales y así mismo diferenciarte de la competencia.",
    value: "$25,00",
    image: "https://picsum.photos/seed/bonus2/300/200"
  },
  {
    id: 3,
    title: "COMO ENCAPSULAR RECUERDOS ESPECIALES",
    description: "En esta clase te enseñaré cómo puedes encapsular esos recuerdos especiales, como ejemplo encapsularemos los dientes de mis mascotas en un hermoso collar usando resina UV.",
    value: "$25,00",
    image: "https://picsum.photos/seed/bonus3/300/200"
  },
  {
    id: 4,
    title: "CÓMO UTILIZAR SOMBRAS DE OJOS COMO PIGMENTO",
    description: "¿Tienes sombras de ojos que no volviste a utilizar o algunos colores no te gustan? En esta clase te explicaré cómo puedes usar las sombras de ojos para crear piezas hermosas y originales.",
    value: "$25,00",
    image: "https://picsum.photos/seed/bonus4/300/200"
  },
  {
    id: 5,
    title: "CREA FIGURAS NAVIDEÑAS CON RESINA PARA DECORAR ÁRBOL DE NAVIDAD",
    description: "¿Te gustaría decorar tu casa y tu árbol de navidad con piezas originales? En esta clase vamos a realizar diferentes piezas en resina con formas navideñas.",
    value: "$25,00",
    image: "https://picsum.photos/seed/bonus5/300/200"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿El curso es presencial?",
    answer: "No. El curso es 100% virtual y está compuesto por videos pregrabados que puedes ver desde cualquier dispositivo, cuando tú quieras."
  },
  {
    question: "¿Tendré soporte para resolver mis dudas?",
    answer: "Sí, contarás con acceso a un grupo privado de soporte y también podrás dejar tus dudas debajo de cada video en la plataforma."
  },
  {
    question: "¿Hasta cuándo puedo ingresar al programa?",
    answer: "El acceso es de por vida. Puedes ingresar las veces que quieras y a la hora que prefieras."
  },
  {
    question: "¿Cuál es la fecha de inicio?",
    answer: "¡Inicias inmediatamente! En cuanto realizas tu inscripción, recibes los datos de acceso a tu correo electrónico."
  },
  {
    question: "¿Cuál es el precio en mi moneda local?",
    answer: "La plataforma de pago convertirá automáticamente el precio de dólares a tu moneda local al momento de pagar."
  },
  {
    question: "¿Cuánto dura el contenido del curso?",
    answer: "El curso tiene más de 12 horas de contenido en video, pero tú decides el ritmo al que quieres avanzar."
  },
  {
    question: "¿Recibiré un certificado al finalizar?",
    answer: "Sí, al completar todas las lecciones podrás descargar tu certificado personalizado automáticamente."
  },
  {
    question: "¿Tendré que pagar algo adicional?",
    answer: "No, el pago es único y te da acceso a todo el contenido, actualizaciones futuras y bonos sin costos extra."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito, débito, PayPal y pagos en efectivo en algunos países (Oxxo, Baloto, Sencillito, etc)."
  },
  {
    question: "es segura esta pagina?",
    answer: "Totalmente. Utilizamos Hotmart, la plataforma de productos digitales más grande y segura de Latinoamérica para procesar los pagos."
  }
];

export const BENEFITS: Benefit[] = [
  { text: "Generarás altos ingresos emprendiendo tu propio negocio desarrollando tu propia marca de accesorios en resina." },
  { text: "Crearás accesorios en resina de calidad que están en tendencia que te permitirán destacarte." },
  { text: "Conocerás los materiales de calidad y que estén a tu alcance con bajo presupuesto." },
  { text: "Aprenderás a comercializar y vender tus productos a través de las redes sociales." }
];