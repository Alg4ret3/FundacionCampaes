export const FooterLinks = () => (
  <ul className="space-y-4">
    {['Inicio', 'Sobre Nosotros', 'Actividades', 'Contacto'].map(link => (
      <li key={link}>
        <a
          href={`#${link.toLowerCase().replace(' ', '-')}`}
          className="text-gray-500 hover:text-primario text-sm transition-all duration-300 flex items-center group relative overflow-hidden"
        >

          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primario transition-all duration-500 group-hover:w-full"></span>
          {link}
        </a>
      </li>
    ))}
  </ul>
);
