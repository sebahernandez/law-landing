export type IconName =
  | 'users'
  | 'shield'
  | 'gavel'
  | 'handshake'
  | 'file-text'
  | 'message-circle'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'clock'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'plus'
  | 'minus'
  | 'star'
  | 'menu'
  | 'x'
  | 'chevron-down'
  | 'scale'
  | 'user';

export interface Link {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  caption: string;
}

export interface PracticeArea {
  icon: IconName;
  title: string;
  body: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  caseType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactItem {
  icon: IconName;
  text: string;
}

export interface FooterColumn {
  title: string;
  links: Link[];
}

export const brand = 'Serrano Abogados';
export const phone = '+56 9 1234 5678';

export const header = {
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Áreas de práctica', href: '#areas' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies Link[],
  contactLabel: 'Contáctanos',
  contactHref: '#contacto',
  phone,
  phoneHref: 'tel:+56912345678',
};

export const hero = {
  eyebrow: 'Abogado independiente · Familia, penal y civil',
  title: 'Tu versión de los hechos merece una defensa sólida',
  lead: 'Representación legal personal y directa en asuntos de familia, defensa penal y demandas civiles. Un solo abogado, comprometido con tu caso desde la primera reunión hasta la sentencia final.',
  primaryCta: { label: 'Agenda una consulta gratuita', href: '#contacto' },
  secondaryCta: { label: 'Ver áreas de práctica', href: '#areas' },
  imageLabel: 'Retrato del abogado — imagen pendiente',
};

export const marquee = {
  items: [
    'Derecho de familia',
    'Defensa penal',
    'Litigios civiles',
    'Divorcio y custodia',
    'Daños y perjuicios',
    'Disputas contractuales',
  ],
};

export const about = {
  eyebrow: 'Sobre el estudio',
  title: 'Asesoría legal clara, sin sorpresas ocultas',
  cta: { label: 'Conoce al abogado', href: '#contacto' },
  paragraphs: [
    'Soy abogado independiente con más de quince años de experiencia en tribunales. Llevo cada caso personalmente: sin asociados junior, sin derivaciones, sin sorpresas. Cuando llamas, hablas con el abogado que realmente estará a tu lado en la audiencia.',
    'Mi práctica se centra en derecho de familia, defensa penal y demandas civiles. Explico cada paso en lenguaje claro, te doy probabilidades honestas y fijo honorarios transparentes desde el inicio, para que tomes decisiones con confianza en un momento difícil.',
  ],
  stats: [
    { value: 15, suffix: '+', caption: 'Años de ejercicio' },
    { value: 600, suffix: '+', caption: 'Casos atendidos' },
    { value: 92, suffix: '%', caption: 'Resultados favorables' },
  ] satisfies Stat[],
};

export const practiceAreas = {
  eyebrow: 'Áreas de práctica',
  title: 'Orientación especializada cuando lo que está en juego es personal',
  lead: 'Tres áreas principales, un abogado que las conoce a fondo.',
  cards: [
    {
      icon: 'users',
      title: 'Derecho de familia',
      body: 'Divorcio, cuidado personal y régimen de visitas, pensión de alimentos, adopción y medidas de protección por violencia intrafamiliar.',
    },
    {
      icon: 'shield',
      title: 'Defensa penal',
      body: 'Delitos y faltas, conducción en estado de ebriedad, drogas, lesiones y robo. Defensa desde la detención hasta el juicio y la apelación.',
    },
    {
      icon: 'gavel',
      title: 'Demandas civiles',
      body: 'Incumplimiento de contrato, cobro de deudas, conflictos de propiedad, indemnización por daños y disputas entre arrendador y arrendatario.',
    },
    {
      icon: 'handshake',
      title: 'Mediación y acuerdos',
      body: 'Acuerdos negociados, capitulaciones matrimoniales y convenios de separación que evitan juicios costosos.',
    },
    {
      icon: 'file-text',
      title: 'Representación judicial',
      body: 'Representación completa en audiencias y juicios, además de redacción de documentos y presentaciones ante tribunales.',
    },
    {
      icon: 'message-circle',
      title: 'Asesoría legal',
      body: 'Orientación clara sobre tus opciones antes de actuar. Conoce tus derechos y tus posibilidades reales.',
    },
  ] satisfies PracticeArea[],
};

export const process = {
  eyebrow: 'Cómo trabajamos',
  title: 'Un camino claro desde la primera llamada hasta la resolución',
  side: 'Siempre sabrás qué viene después, cuánto cuesta y qué esperar. Sin jerga legal ni semanas de espera por una respuesta.',
  steps: [
    {
      number: '01',
      title: 'Consulta gratuita',
      body: 'Revisamos tu situación en una llamada o reunión de 30 minutos y te decimos con honestidad si tienes un caso.',
    },
    {
      number: '02',
      title: 'Estrategia y honorarios',
      body: 'Recibes un plan escrito, un cronograma y un honorario fijo o claramente estimado antes de iniciar cualquier trabajo.',
    },
    {
      number: '03',
      title: 'Preparación',
      body: 'Reúno pruebas, presento escritos y negocio con la contraparte, manteniéndote informado cada semana.',
    },
    {
      number: '04',
      title: 'Audiencia y resolución',
      body: 'Te represento en tribunales o mediación y sigo luchando hasta que el asunto quede cerrado.',
    },
  ] satisfies ProcessStep[],
};

export const testimonials = {
  eyebrow: 'Historias de clientes',
  title: 'Personas que recuperaron el control de su vida',
  cards: [
    {
      quote:
        '“Consiguió el cuidado personal de mis hijos en un caso que todos daban por perdido. Me explicó cada paso y nunca me hizo sentir como un número.”',
      name: 'Mariana R.',
      caseType: 'Familia · Custodia',
    },
    {
      quote:
        '“Los cargos se retiraron antes del juicio. Encontró irregularidades en la detención que otros dos abogados pasaron por alto. Le debo mi carrera.”',
      name: 'David L.',
      caseType: 'Defensa penal',
    },
    {
      quote:
        '“Un contratista se llevó mi anticipo y desapareció. En cuatro meses tenía sentencia y mi dinero de vuelta. Honorarios claros, sin sorpresas.”',
      name: 'Elena & Marcos T.',
      caseType: 'Demanda civil · Contrato',
    },
  ] satisfies Testimonial[],
};

export const faq = {
  eyebrow: 'Preguntas frecuentes',
  title: 'Respuestas antes de que preguntes',
  intro: '¿Aún tienes dudas? La primera consulta es gratuita y sin compromiso.',
  items: [
    {
      question: '¿Cuánto cuesta la primera consulta?',
      answer:
        'Nada. Los primeros 30 minutos son gratuitos, de forma presencial, por teléfono o videollamada.',
    },
    {
      question: '¿Cómo se cobran los servicios?',
      answer:
        'Trabajo con honorarios fijos o claramente estimados, acordados por escrito antes de iniciar cualquier gestión.',
    },
    {
      question: '¿Atiendes casos urgentes como detenciones o medidas de protección?',
      answer: 'Sí. Las urgencias se atienden 24/7 y respondo el mismo día.',
    },
    {
      question: '¿Llevarás mi caso personalmente?',
      answer:
        'Sí. Llevo cada caso personalmente, desde la primera reunión hasta la sentencia final.',
    },
  ] satisfies FaqItem[],
};

export const contact = {
  eyebrow: 'Consulta gratuita',
  title: 'Cuéntame qué pasó. Yo te diré qué podemos hacer.',
  lead: 'Respuesta el mismo día para asuntos urgentes. Tu información es confidencial y está protegida por el secreto profesional.',
  items: [
    { icon: 'phone', text: '+56 9 1234 5678' },
    { icon: 'mail', text: 'contacto@serranoabogados.cl' },
    { icon: 'map-pin', text: 'Av. Tribunales 412, Oficina 210' },
    { icon: 'clock', text: 'Lunes a viernes, 9:00 a 18:00 · Urgencias 24/7' },
  ] satisfies ContactItem[],
  form: {
    title: 'Solicita tu consulta gratuita',
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Juan Pérez' },
      contact: { label: 'Teléfono o correo', placeholder: '+56 9 0000 0000' },
      type: {
        label: 'Tipo de asunto',
        placeholder: 'Familia · Penal · Demanda civil',
        options: ['Familia', 'Penal', 'Demanda civil'],
      },
      message: {
        label: 'Describe brevemente tu situación',
        placeholder: '¿Qué pasó y cuándo?',
      },
    },
    submit: 'Enviar solicitud',
    disclaimer: 'El envío de este formulario no constituye una relación abogado-cliente.',
  },
};

export const footer = {
  description:
    'Abogado independiente en derecho de familia, defensa penal y litigios civiles. Habilitado para ejercer ante todos los tribunales del país.',
  columns: [
    {
      title: 'Áreas de práctica',
      links: [
        { label: 'Derecho de familia', href: '#areas' },
        { label: 'Defensa penal', href: '#areas' },
        { label: 'Demandas civiles', href: '#areas' },
        { label: 'Mediación', href: '#areas' },
      ],
    },
    {
      title: 'Estudio',
      links: [
        { label: 'Sobre mí', href: '#sobre-mi' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Testimonios', href: '#testimonios' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Política de privacidad', href: '#' },
        { label: 'Términos de uso', href: '#' },
        { label: 'Aviso legal', href: '#' },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: '© 2026 Serrano Abogados. Todos los derechos reservados.',
  disclaimer:
    'Publicidad de servicios legales. Resultados anteriores no garantizan un resultado similar.',
};
