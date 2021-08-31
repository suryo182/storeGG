import Image from 'next/image';

interface StepItemProps {
  title: string;
  step: 'step1.svg' | 'step2.svg' | 'step3.svg';
  desc1: string;
  desc2: string;
}

export default function StepItem({ title, step, desc1, desc2 }: StepItemProps) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image src={`/icon/${step}`} width={80} height={80} />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
