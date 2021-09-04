import Image from 'next/image';

interface TransactionItemProps {
  title: string;
  type: 'Mobile' | 'Desktop';
  nominal: string;
  price: string;
  status: 'Pending' | 'Success' | 'Failed';
  image: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4';
}

export default function TransactionItem({
  title,
  type,
  nominal,
  price,
  status,
  image,
}: TransactionItemProps) {
  return (
    <>
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`/img/${image}.png`} width={80} height={60} alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {type}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{nominal} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className="float-start icon-status pending" />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </>
  );
}
