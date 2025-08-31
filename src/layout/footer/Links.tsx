import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface AllLinksProps {
  href: string;
  icon: IconType;
  label: string;
  title?: string;
}

const links: Array<AllLinksProps> = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: FaGithub,
  },
  {
    href: "http://wa.me/+201285551479",
    title: "+201285551479",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

export default function Links() {
  return (
    <div className="flexCenter gap-2">
      {links.map(({ href, label, icon: Icon, title }: AllLinksProps) => (
        <a
          key={href}
          href={href}
          title={title ? title : href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon className="text-accent-light-color hover:text-text-light-color dark:text-accent-dark-color dark:hover:text-text-dark-color text-3xl transition-all delay-200 duration-300" />
        </a>
      ))}
    </div>
  );
}
