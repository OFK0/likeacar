import { Link } from '@/i18n/routing';
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto container py-8 lg:py-32">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-24" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © {new Date().getFullYear()}&nbsp;
            <Link href="/" className="hover:underline">
              LikeAcar
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900" target="_blank">
              <svg
                className="w-20 h-20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-gray-900 ms-5" target="_blank">
              <svg
                className="w-20 h-20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
              <span className="sr-only">X page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
