import Link from 'next/link';
import Image from 'next/image';
import Input from '../../atoms/Input';

export default function SignUpForm() {
  return (
    <div className="container mx-auto">
      <form action="">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" height={60} width={60} alt="logo" />
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">
          Daftar dan bergabung dengan kami
        </p>
        <div className="pt-50">
          <Input
            label="Full Name"
            type="text"
            name="name"
            id="name"
            ariaDesc="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="pt-30">
          <Input
            label="Email Address"
            type="email"
            name="email"
            id="email"
            ariaDesc="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="pt-30">
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            ariaDesc="password"
            placeholder="Your password"
          />
        </div>
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <Link href="/sign-up-photo">
            <a
              className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
              role="button"
            >
              Continue
            </a>
          </Link>
          <Link href="/sign-in">
            <a
              className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
              role="button"
            >
              Sign In
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}
