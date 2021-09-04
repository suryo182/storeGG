import Image from 'next/image';
import { ReactNode } from 'react';

interface CategoryProps {
  children: ReactNode;
  icon: 'desktop' | 'mobile';
  total: number;
}
export default function Category({ children, icon, total }: CategoryProps) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`/icon/${icon}-type.svg`}
            width={60}
            height={60}
            alt={`${icon}-logo`}
          />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{total}</p>
        </div>
      </div>
    </div>
  );
}
