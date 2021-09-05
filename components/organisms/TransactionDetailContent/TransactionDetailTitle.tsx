import { ReactNode } from 'react';

interface TransactionDetailTitleProps {
  children: ReactNode;
  type: 'Desktop' | 'Mobile';
  status: 'Pending' | 'Success' | 'Failed';
}
export default function TransactionDetailTitle({
  children,
  type,
  status,
}: TransactionDetailTitleProps) {
  return (
    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
      <div className="game-checkout d-flex flex-row align-items-center">
        <div className="pe-4">
          <div className="cropped">
            <img
              src="/img/Thumbnail-3.png"
              width="200"
              height="130"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">{children}</p>
          <p className="color-palette-2 m-0">Category: {type}</p>
        </div>
      </div>
      <div>
        <p className="fw-medium text-center label pending m-0 rounded-pill">
          {status}
        </p>
      </div>
    </div>
  );
}
