import Link from 'next/link';
import { IconLogo } from '../../assets/logo/IconLogo';

const Header = (): JSX.Element => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm">
      <IconLogo />
      <div className="flex w-[250px] justify-between ml-auto">
        <span className="text-app-blue">
          <Link href="">Create post</Link>
        </span>
        <nav>
          <ul className="flex gap-5">
            <li className="text-white">
              <Link href="/login">Login</Link>
            </li>
            <li className="text-white">
              <Link href="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
