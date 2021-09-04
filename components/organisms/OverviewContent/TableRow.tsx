import Image from 'next/image';

interface TableRowProps {
  title: string;
  type: 'Mobile' | 'Desktop';
  item: number;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
  image: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4';
}

export default function TableRow({
  title,
  type,
  item,
  price,
  status,
  image,
}: TableRowProps) {
  return (
    <tr className="align-middle">
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
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className="float-start icon-status pending" />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
