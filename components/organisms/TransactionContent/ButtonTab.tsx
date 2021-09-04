import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  isActive: boolean;
}
export default function ButtonTab({ title, isActive }: ButtonTabProps) {
  const tabClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': isActive,
  });
  return (
    <a data-filter="*" href="#" className={tabClass}>
      {title}
    </a>
  );
}
