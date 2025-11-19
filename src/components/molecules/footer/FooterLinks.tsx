export const FooterLinks = () => (
  <ul className="space-y-3">
    {['Inicio', 'Sobre Nosotros', 'Actividades', 'Contacto'].map(link => (
      <li key={link}>
        <a
          href={`#${link.toLowerCase()}`}
          className="text-white/80 hover:text-primario text-sm transition-all duration-300 inline-flex items-center group"
        >
          <span className="w-1 h-1 rounded-full bg-primario mr-2 group-hover:mr-3 transition-all"></span>
          {link}
        </a>
      </li>
    ))}
  </ul>
);
