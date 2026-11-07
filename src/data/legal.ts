/**
 * Legal documents shown as modal dialogs from the footer.
 *
 * PROVISIONAL COPY: this is a draft for an independent lawyer practicing in Chile.
 * It is not legal advice and must be reviewed and approved by the client before publishing.
 * Contact details come from `content.ts` so they stay consistent with the contact section.
 */
import { brand, contact, footer, phone } from './content';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  id: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}

const contactText = (icon: string) => contact.items.find((item) => item.icon === icon)?.text ?? '';
const email = contactText('mail');
const address = contactText('map-pin');
const updated = '7 de noviembre de 2026';

export const privacyPolicy: LegalDocument = {
  id: 'politica-de-privacidad',
  title: 'Política de privacidad',
  updated,
  sections: [
    {
      heading: 'Responsable del tratamiento',
      paragraphs: [
        `${brand}, con domicilio en ${address}, es responsable del tratamiento de los datos personales que entregas a través de este sitio. Puedes contactarnos en ${email} o al ${phone}.`,
      ],
    },
    {
      heading: 'Datos que recopilamos',
      paragraphs: [
        'Solo tratamos los datos que nos entregas voluntariamente en el formulario de contacto: nombre, teléfono o correo electrónico, área de consulta y la descripción de tu caso.',
        'Este sitio no utiliza cookies de seguimiento ni herramientas de publicidad.',
      ],
    },
    {
      heading: 'Finalidad',
      paragraphs: [
        'Usamos tus datos únicamente para responder tu consulta, evaluar tu caso y coordinar una reunión. No los usamos para enviar publicidad ni los cedemos a terceros, salvo obligación legal.',
      ],
    },
    {
      heading: 'Base legal',
      paragraphs: [
        'El tratamiento se basa en tu consentimiento, otorgado al enviar el formulario, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada y sus modificaciones. La información de tu caso está además protegida por el secreto profesional del abogado.',
      ],
    },
    {
      heading: 'Conservación',
      paragraphs: [
        'Conservamos tus datos mientras sean necesarios para atender tu consulta. Si no se inicia una relación profesional, los eliminamos en un plazo razonable o antes, si así lo solicitas.',
      ],
    },
    {
      heading: 'Tus derechos',
      paragraphs: [
        `Puedes solicitar en cualquier momento el acceso, la rectificación, la cancelación o la oposición al tratamiento de tus datos escribiendo a ${email}. Responderemos dentro de los plazos que establece la ley.`,
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  id: 'terminos-de-uso',
  title: 'Términos de uso',
  updated,
  sections: [
    {
      heading: 'Aceptación',
      paragraphs: [
        `Al navegar por este sitio aceptas estos términos de uso. Si no estás de acuerdo con ellos, te pedimos no utilizar el sitio.`,
      ],
    },
    {
      heading: 'Carácter informativo',
      paragraphs: [
        'El contenido de este sitio es general e informativo. No constituye asesoría legal ni reemplaza el análisis de un abogado sobre las circunstancias concretas de tu caso.',
      ],
    },
    {
      heading: 'Sin relación abogado-cliente',
      paragraphs: [
        'El uso del sitio o el envío del formulario de contacto no crea una relación abogado-cliente. Esta relación solo comienza cuando ambas partes acuerdan expresamente los servicios y los honorarios.',
      ],
    },
    {
      heading: 'Propiedad intelectual',
      paragraphs: [
        `Los textos, el diseño y los elementos gráficos de este sitio pertenecen a ${brand} o a sus respectivos autores. No pueden reproducirse con fines comerciales sin autorización previa y por escrito.`,
      ],
    },
    {
      heading: 'Responsabilidad',
      paragraphs: [
        'Procuramos que la información esté actualizada y sea correcta, pero no garantizamos que esté libre de errores. No somos responsables de decisiones tomadas únicamente sobre la base del contenido del sitio.',
      ],
    },
    {
      heading: 'Legislación aplicable',
      paragraphs: [
        'Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a los tribunales ordinarios de justicia de Chile.',
      ],
    },
  ],
};

export const legalNotice: LegalDocument = {
  id: 'aviso-legal',
  title: 'Aviso legal',
  updated,
  sections: [
    {
      heading: 'Titular del sitio',
      paragraphs: [
        `Este sitio pertenece a ${brand}, con domicilio en ${address}. Correo: ${email}. Teléfono: ${phone}.`,
      ],
    },
    {
      heading: 'Ejercicio profesional',
      paragraphs: [
        'Los servicios son prestados por un abogado independiente, habilitado para ejercer la profesión ante todos los tribunales del país y sujeto a las normas de ética profesional vigentes.',
      ],
    },
    {
      heading: 'Publicidad de servicios legales',
      paragraphs: [
        'Este sitio constituye publicidad de servicios legales. Los casos, testimonios y cifras que se muestran son referenciales.',
      ],
    },
    {
      heading: 'Sin garantía de resultados',
      paragraphs: [
        'Los resultados obtenidos en casos anteriores no garantizan un resultado similar. Cada asunto depende de sus hechos, de la prueba disponible y de la decisión de los tribunales.',
      ],
    },
    {
      heading: 'Desarrollo del sitio',
      paragraphs: [
        `${footer.credit.prefix} ${footer.credit.label} (${footer.credit.href}).`,
      ],
    },
  ],
};

export const legalDocuments: LegalDocument[] = [privacyPolicy, termsOfUse, legalNotice];
