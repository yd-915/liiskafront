import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './liis.png';
const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10 bg-black">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4 bg-black-600">
        <header className="flex items-center justify-between space-x-3 bg-black-600">
        
          <button className="md:hidden" onClick={toggleMenu}>
            {!showMenu ? (
              <MenuIcon className="w-8 h-8" />
            ) : (
              <XIcon className="w-8 h-8" />
            )}
          </button>
          <div
            className={[
              'items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3',
              showMenu
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-black top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <a className="px-5 py-2 rounded hover:bg-white-600 text-yellow-600">Guides</a>
              <a className="px-5 py-2 rounded hover:bg-white-600 text-yellow-600">Pricing</a>
            
            </nav>
            <Link
              href={
                sessionStatus === 'authenticated' ? '/account' : '/auth/login'
              }
              className="w-full px-5 py-2 text-center text-white bg-orange-600 rounded shadow hover:bg-blue-500"
            >
              {sessionStatus === 'authenticated' ? 'Go to Dashboard' : 'Login'}
            </Link>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <h1 className="text-6xl font-extrabold text-center">
          <Image alt="" src={Logo}></Image>
          </h1>
          <p className="mt-5 text-center text-yellow-600">
            Your ultimate p2p space
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <a className="px-10 py-3 text-center text-white bg-yellow-600 rounded shadow hover:bg-blue-500">
            Get Started
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
