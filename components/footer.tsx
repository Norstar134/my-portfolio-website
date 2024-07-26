'use client'
import Link from "next/link";

const Footer: React.FC = () => {
    return(
      <footer className="bg-white m-4 flex flex-col flex-wrap justify-between mx-auto p-4 stick border-t-2">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
          <a href="/" className="hover:underline"> Deanna Woodhouse-Hawkins</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/deanna-woodhouse-hawkins-9674a31a1/" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer;