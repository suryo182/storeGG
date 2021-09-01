import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  title: string;
  type: string;
  thumbnail:
    | 'Thumbnail-1'
    | 'Thumbnail-2'
    | 'Thumbnail-3'
    | 'Thumbnail-4'
    | 'Thumbnail-5';
}
export default function GameItem({ title, type, thumbnail }: GameItemProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/controller.svg"
                  width={54}
                  height={36}
                  alt="controller"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{type}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
