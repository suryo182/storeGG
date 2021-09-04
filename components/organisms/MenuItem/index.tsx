import Image from 'next/image';
import cx from 'classnames';

interface MenuItemProps {
  name: string;
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
        <a href="/" className="text-lg text-decoration-none">
          {name}
        </a>
      </p>
    </div>
  );
}
