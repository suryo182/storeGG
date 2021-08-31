import Link from 'next/link';
import cx from 'classnames';

interface MenuProps {
  title: string;
  href: string;
  isActive?: boolean;
}

export default function Menu({
  title,
  href = '/',
  isActive,
}: Partial<MenuProps>) {
  const navClass = cx({
    'nav-link': true,
    active: isActive,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={navClass} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
