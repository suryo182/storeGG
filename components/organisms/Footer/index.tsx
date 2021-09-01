import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Company
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Press Release
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Terms of Use
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Privacy & Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Refund Policy
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Unlock Rewards
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Live Chatting
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          hi@store.gg
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          team@store.gg
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          Pasific 12, Jakarta Selatan
                        </a>
                      </Link>
                    </li>
                    <li className="mb-6">
                      <Link href="/">
                        <a className="text-lg color-palette-1 text-decoration-none">
                          021 - 1122 - 9090
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
