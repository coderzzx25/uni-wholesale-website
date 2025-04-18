import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {
  const socials = [
    {
      name: 'GitHub',
      href: 'https://www.facebook.com/jingsourcing/',
      icon: '/icons/facebook.svg'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jingsourcing/',
      icon: '/icons/instagram.svg'
    },
    {
      name: 'tiktok',
      href: 'https://www.tiktok.com/@jingsourcing',
      icon: '/icons/tiktok.svg'
    },
    {
      name: 'email',
      href: 'mailto:info@jingsourcing.com',
      icon: '/icons/email.svg'
    }
  ];
  return (
    <div className="bg-primary">
      <div className="container h-7 text-primary-foreground flex items-center justify-center md:justify-between font-bold text-xs">
        <span>ONE-STOP CHINA WHOLESALE SOLUTION</span>
        <span>
          <ul className="hidden gap-1 md:flex">
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.href} target="_blank">
                  <Image src={social.icon} alt={social.name} width={16} height={16} />
                </Link>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
