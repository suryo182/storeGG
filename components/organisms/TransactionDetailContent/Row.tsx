interface RowProps {
  title: string;
  value: string | number;
  className?: string;
}
export default function Row({ title, value, className }: Partial<RowProps>) {
  return (
    <p className={`text-lg color-palette-1 mb-20 ${className}`}>
      {title} <span className="purchase-details">{value}</span>
    </p>
  );
}
