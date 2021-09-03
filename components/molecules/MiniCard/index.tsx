import Image from 'next/image';

interface MiniCardProps {
  id: string;
  name: string;
  value: string;
  type: string;
  htmlFor: string;
  mainTitle: string;
  secondaryTitle?: string;
  description: string;
}
export default function MiniCard({
  id,
  name,
  value,
  type,
  htmlFor,
  mainTitle,
  secondaryTitle,
  description,
}: Partial<MiniCardProps>) {
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={htmlFor}
    >
      <input className="d-none" type={type} id={id} name={name} value={value} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">{mainTitle}</span>
            {secondaryTitle}
          </p>
          <Image
            id="icon-check"
            src="/icon/check-logo.svg"
            width={20}
            height={20}
            alt="check-logo"
          />
        </div>
        <p className="text-lg color-palette-1 m-0">{description}</p>
      </div>
    </label>
  );
}
