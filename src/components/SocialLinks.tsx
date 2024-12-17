import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:contact@example.com',
    label: 'Email'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}