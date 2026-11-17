export type NavLink = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type ValueItem = {
  icon: 'heart-scan' | 'users' | 'book-open'
  title: string
  description: string
}

export type Requirement = {
  number: string
  title: string
  description: string
}

export type EditorialCard = {
  id: string
  eyebrow: string
  title: string
  description?: string
  linkLabel: string
  href: string
  variant: 'light' | 'image'
  imageAlt?: string
}

const CONTACT_EMAIL = 'mappygc@hotmail.com'

export const contactEmail = CONTACT_EMAIL

export const donationHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Quiero donar a AMAC',
)}`

export const paypalRequestHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Solicitar enlace de PayPal',
)}`

export const volunteerHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Quiero ser voluntario en AMAC',
)}`

export const contactHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Información sobre AMAC',
)}`

export const newsletterHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Quiero recibir el boletín de AMAC',
)}`

export const rescueStoriesHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Quiero conocer las historias de rescates de AMAC',
)}`

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#mision' },
  { label: 'Boletín', href: '#boletin' },
  { label: 'Historias de rescates', href: '#historias' },
  { label: 'Voluntariado', href: '#voluntariado' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroContent = {
  badge: 'Comprometidos con el rescate de animales en Guasave, Sinaloa.',
  title: 'Cada huella merece una mano amiga.',
  titleAccent: 'mano amiga.',
  description:
    'Rescatamos, rehabilitamos y encontramos familias responsables para animales de la calle en situación de abandono.',
  primaryAction: {
    label: 'Conoce nuestra misión',
    href: '#mision',
  },
  secondaryAction: {
    label: 'Sé voluntario',
    href: '#voluntariado',
  },
}

export const missionContent = {
  eyebrow: 'Misión',
  title: 'Por qué existimos',
  paragraphs: [
    'La Asociación Mano Amiga para Animales de la Calle, A.C. (AMAC) nació con una convicción simple: ningún animal debería vivir en las calles sin protección, sin cuidado, sin amor.',
    'Nuestra misión es rescatar, rehabilitar y reubicar a perros y gatos en situación de calle, promoviendo una cultura de tenencia responsable y el bienestar animal en toda la comunidad.',
  ],
  link: {
    label: 'Conoce más →',
    href: '#valores',
  },
}

export const stats: Stat[] = [
  { value: '+500', label: 'Animales rescatados' },
  { value: '+350', label: 'Adopciones exitosas' },
  { value: '12', label: 'Años de trabajo' },
  { value: '+80', label: 'Voluntarios activos' },
]

export const valuesContent = {
  eyebrow: 'Valores',
  title: 'Lo que nos guía',
  items: [
    {
      icon: 'heart-scan',
      title: 'Compasión',
      description: 'Cada animal es tratado con dignidad y cuidado genuino.',
    },
    {
      icon: 'users',
      title: 'Comunidad',
      description: 'Voluntarios, familias y aliados construyendo juntos.',
    },
    {
      icon: 'book-open',
      title: 'Educación',
      description: 'Promovemos la tenencia responsable como cambio social.',
    },
  ] satisfies ValueItem[],
}

export const adoptionContent = {
  eyebrow: 'Adopción',
  title: 'Encuentra a tu compañero',
  imageAlt: 'Perro border collie sonriente',
  caption:
    'Todos estos animales están disponibles para adopción responsable.',
  requirementsTitle: 'Requisitos para adoptar',
  requirements: [
    {
      number: '01',
      title: 'Identificación oficial',
      description: 'INE o pasaporte vigente del solicitante principal.',
    },
    {
      number: '02',
      title: 'Comprobante de domicilio',
      description:
        'Documento reciente que acredite tu lugar de residencia.',
    },
    {
      number: '03',
      title: 'Llenar solicitud de adopción',
      description:
        'Llenar la hoja que se le proporcionará con los datos correspondientes.',
    },
    {
      number: '04',
      title: 'Aceptar la esterilización de la mascota',
      description:
        'La esterilización es una medida preventiva que mejora la calidad de vida de las mascotas.',
    },
    {
      number: '05',
      title: 'Donativo por adopción (opcional)',
      description:
        'Donativo simbólico que cubre esterilización, vacunas y desparasitación del animal.',
    },
  ] satisfies Requirement[],
}

export const editorialContent = {
  eyebrow: 'Para conocer y compartir',
  title: 'Información con propósito',
  description:
    'Aprende a prevenir riesgos y conoce las historias que nos recuerdan por qué cada rescate importa.',
  cards: [
    {
      id: 'boletin',
      eyebrow: 'Boletín AMAC',
      title: 'Cuidar también es estar informado',
      description:
        'Alertas, prevención y bienestar explicados de forma clara para toda la comunidad.',
      linkLabel: 'Leer el boletín →',
      href: newsletterHref,
      variant: 'light',
    },
    {
      id: 'historias',
      eyebrow: 'Historias de rescates',
      title: 'Del rescate a una nueva vida',
      linkLabel: 'Conocer sus historias →',
      href: rescueStoriesHref,
      variant: 'image',
      imageAlt: 'Perro rescatado descansando en un hogar temporal',
    },
  ] satisfies EditorialCard[],
}

export const volunteerContent = {
  eyebrow: 'Voluntariado',
  title: 'Súmate al cambio',
  chip: 'Hogares temporales al límite',
  lead: 'AMAC no cuenta con un refugio físico.',
  paragraph:
    'Los animales rescatados son acogidos por personas voluntarias y, actualmente, todos los hogares temporales están ocupados.',
  secondaryParagraph:
    'Puedes ayudar con paseos, eventos, difusión o abriendo temporalmente las puertas de tu hogar. Cada forma de voluntariado nos permite seguir rescatando.',
  actionLabel: 'Quiero ser voluntario',
  imageAlt: 'Perro rescatado acompañado en un hogar temporal',
}

export const donationContent = {
  eyebrow: 'Donaciones',
  title: 'Tu ayuda se convierte en cuidado',
  description:
    'Cada aportación ayuda a cubrir alimento, consultas, medicamentos, vacunas y esterilizaciones.',
  methodEyebrow: 'Donar con',
  methodTitle: 'PayPal',
  methodDescription:
    'Solicita nuestro enlace oficial y realiza una aportación única o recurrente de forma segura desde PayPal.',
  actionLabel: 'Solicitar enlace de PayPal',
  actionHref: paypalRequestHref,
  notice:
    'Por seguridad, verifica que el enlace haya sido compartido por los canales oficiales de AMAC antes de realizar tu aportación.',
}

export const contactContent = {
  eyebrow: 'Contacto',
  title: '¿Tienes alguna pregunta?',
  description: 'Escríbenos a',
  actionLabel: 'Ver información de contacto',
}

export const footerContent = {
  legal:
    'Asociación Mano Amiga para Animales de la Calle, A.C.',
  copyright: '© 2026 · Todos los derechos reservados',
}
