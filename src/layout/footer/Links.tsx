import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface allLinksProps {
  href: string;
  icon: IconType;
  hoverColor: string;
  label: string;
  title?: string;
}

const links: Array<allLinksProps> = [
  {
    href: "https://www.linkedin.com/in/antonious-nasr/",
    label: "LinkedIn Profile",
    icon: FaLinkedin,
    hoverColor: "hover:text-text-light-color dark:hover:text-[#0077B5]",
  },
  {
    href: "https://github.com/ANT0NI0US",
    label: "GitHub Profile",
    icon: FaGithub,
    hoverColor: "hover:text-text-light-color dark:hover:text-black",
  },
  {
    href: "http://wa.me/+201285551479",
    title: "+201285551479",
    label: "WhatsApp",
    icon: FaWhatsapp,
    hoverColor: "hover:text-text-light-color dark:hover:text-[#25D366]",
  },
];

export default function Links() {
  return (
    <div className="flexCenter gap-2">
      {links.map(
        ({ href, label, icon: Icon, title, hoverColor }: allLinksProps) => (
          <a
            key={href}
            href={href}
            title={title ? title : href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon
              className={`text-accent-light-color dark:text-primary-color text-3xl transition-all delay-200 duration-300 ${hoverColor}`}
            />
          </a>
        ),
      )}
    </div>
  );
}
