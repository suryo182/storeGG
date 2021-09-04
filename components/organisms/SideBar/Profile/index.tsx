import Image from 'next/image';

interface ProfileProps {
  name: string;
  email: string;
}

export default function Profile({ name, email }: ProfileProps) {
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src="/img/avatar-1.png"
        width={90}
        height={90}
        className="img-fluid mb-20"
        alt=""
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{name}</h2>
      <p className="color-palette-2 m-0">{email}</p>
    </div>
  );
}
