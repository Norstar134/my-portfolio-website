'use client'
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {

  const [showMenu, setShowMenu] = useState(false);
    return(
        <header className="sticky flex flex-row items-center justify-between sm:justify-around mx-auto p-4 bg-white top-0 flew-grow shadow z-20 w-auto">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="\portfolioLogo.png" className="h-10" alt="Deanna Woodhouse-Hawkins Logo" />
          </Link>
          <nav className="hidden sm:flex justify-between items-center gap-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                </li>
                <li>
                  <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="lg:hidden md:hidden flex flex-col gap-1 z-50 relative">
            <button onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden font-bold text-xl hover:text-gray-500 duration-300">
              {showMenu ? <span className="material-icons">close</span>:<span className="material-icons">menu</span>}
            </button>
            {showMenu && (
              <>
              <ul className="absolute bg-white top-8 -left-20 shadow-sm border-2 hover:bg-slate-400">
                <li>
                  <a href="#home" className="block py-5 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowMenu(false)}>Home</a>
                </li>
                <li>
                  <a href="#about" className="block py-5 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowMenu(false)}>About</a>
                </li>
                <li>
                  <a href="#skills" className="block py-5 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowMenu(false)}>Skills</a> 
                </li>
                <li>
                  <a href="#projects" className="block py-5 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowMenu(false)}>Projects</a>
                </li>
                <li>
                  <a href="#contact" className="block py-5 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => setShowMenu(false)}>Contact</a>
                </li>
              </ul>
              </>
            )}
          </nav>
        </header>
    )
}

export default Header;