import Image from 'next/image';
import cx from 'classnames';

interface TableRowProps {
  title: string;
  type: 'Mobile' | 'Desktop';
  image: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4';
  nominal: number;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
}
export default function TableRow({
  title,
  type,
  image,
  nominal,
  price,
  status,
}: TableRowProps) {
  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });

  return (
    <tr data-category="pending" className="align-middle">
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
        <p className="fw-medium color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <a
          href="../member/transactions-detail.html"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </a>
      </td>
    </tr>
  );
}
