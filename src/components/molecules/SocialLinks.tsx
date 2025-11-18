import { IconLink } from "../atoms/SocialIconLink";
import { FaFacebookF, FaInstagram, FaWhatsapp, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const SocialLinks = () => {
  const socials = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/share/1ADNfwFbQK/?mibextid=wwXIfr",
      color: "text-white", // icono blanco
      fondo: "bg-oscuro",

    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/caminosdepazyesperanza?igsh=MXU1cmFnYmh2bGJtcw%3D%3D&utm_source=qr",
      color: "text-white",
      fondo: "bg-oscuro",

    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/573185094789",
      color: "text-white",
      fondo: "bg-oscuro",

    },
    {
      icon: SiGmail,
      label: "Gmail",
      href: "mailto:funpazyesperanza@gmail.com",
      color: "text-white",
      fondo: "bg-oscuro",

    },
  ];

  return (
    <div className="flex justify-around w-full">
      {socials.map(({ icon, label, href, color, fondo }) => (
        <IconLink
          key={label}
          Icon={icon}
          href={href}
          label={label}
          color={color}
          fondo={fondo}
        />
      ))}
    </div>
  );
};
