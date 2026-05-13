import { IconLink } from "../../atoms/icons/SocialIconLink";
import { FaFacebookF, FaInstagram, FaWhatsapp, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const SocialLinks = () => {
  const socials = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/share/1ADNfwFbQK/?mibextid=wwXIfr",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/caminosdepazyesperanza?igsh=MXU1cmFnYmh2bGJtcw%3D%3D&utm_source=qr",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/573185094789",
    },
    {
      icon: SiGmail,
      label: "Gmail",
      href: "mailto:funpazyesperanza@gmail.com",
    },
  ];

  return (
    <div className="flex gap-4">
      {socials.map(({ icon, label, href }) => (
        <IconLink
          key={label}
          Icon={icon}
          href={href}
          label={label}
          color="text-gray-500 group-hover:text-white transition-colors duration-500"
          fondo="border border-divider bg-surface hover:bg-primario transition-all duration-500 group"
        />
      ))}
    </div>
  );
};
