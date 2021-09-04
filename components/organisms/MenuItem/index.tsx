import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItemProps {
  name: string;
  href: string;
  logo:
    | 'overview'
    | 'card'
    | 'logout'
    | 'message'
    | 'reward'
    | 'setting'
    | 'transaction';
  isActive?: boolean;
}
export default function MenuItem({
  name,
  logo,
  isActive,
  href,
}: Partial<MenuItemProps>) {
  const menuItemClass = cx({
    item: true,
    active: isActive,
    'mb-30': true,
  });

  return (
    <div className={menuItemClass}>
      <div className="me-3">
        <Image
          src={`/icon/${logo}-logo.svg`}
          height={25}
          width={25}
          alt={`${logo}-logo`}
        />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{name}</a>
        </Link>
      </p>
    </div>
  );
}
