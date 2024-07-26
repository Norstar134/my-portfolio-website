//https://portfolio-tailwind.preview.uideck.com/demos/personal/
//https://tailwindcss.com/docs/responsive-design

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section id="home" className="flex flex-col md:w-screen bg-white">
      <div className="w-0">
          <span className="ml-32 mt-16 absolute top-5 -left-32 -z-0">
            <svg width="48" height="95" viewBox="0 0 48 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="0.5" cy="47.5" r="47.5" fill="url(#paint0_radial_6:121"></circle>
              <defs>
                <radialGradient id="paint0_radial_6:121" cx="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.5) rotate(90) scale(95)">
                  <stop stopColor="white" />
                  <stop offset="0.569" stopColor="#F0F4FD" />
                  <stop offset="0.993" stopColor="#D9E0F0" />
                </radialGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="grid-cols-2 pl-36">
          <div>
            <div className="flex">
              <div className="pt-40">
                <h1 className="text-blue-500 pt-10 break-normal font-bold">Hi! I'm<br />
                  <span className="text-3xl text-black"> Deanna Woodhouse-Hawkins</span>
                </h1>
                <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
                <p className="text-lg pt-10 text-slate-500">And recent graduate of the Open University, studying Computing and IT!</p>
                <div className="pt-10 flex-col">
                  <ul className="flex flex-wrap text-sm font-medium text-center pb-10 items-start flex-grow">
                    <li className="me-10 pl-5">
                      <a href="#contact" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full">Contact Me </a>
                    </li>
                    <li>
                      <a href="#" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full">Download CV</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="relative z-10 pr-0">
                  <img src="https://www.pngall.com/wp-content/uploads/4/Thinking-Woman-PNG-Picture.png" alt="image of me(eventually)" className="pl-48"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0">
          <span className="justify-end mt-4 md:bottom-0 md:right-0 pb-52 absolute">
            <svg width="491" height="490" viewBox="0 0 491 490" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="356.5" cy="356.5" r="356.5" fill="blue" />
            </svg>
          </span>
        </div>
      </section>

      <section id="about" className="flex flex-col w-screen bg-white p-10 pl-20 h-96">
        <div className="pt-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="pl-24 pr-24">
              <span className="text-3xl text-blue-600 font-bold">ABOUT ME</span>
              <h2 className="text-2xl text-black font-semibold pt-10">Phrase Here</h2>
              <p className="text-lg pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
            </div>
            <div className="pl-24 pr-24">
              <h3 className="text-3xl text-blue-600 font-bold">Connect With Me</h3>
              <p className="text-lg pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
              
              <div className="pt-5">
                <a type="button" data-twe-ripple-init data-twe-ripple-color="light"
                href="https://www.linkedin.com/in/deanna-woodhouse-hawkins-9674a31a1/" target="_blank"
                className="mb-2 inline-block rounded-full bg-[#0077b5] hover:bg-[#0048b5] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </a>
                
                <a type="button" data-twe-ripple-init data-twe-ripple-color="light"
                href="https://github.com/Norstar134" target="_blank"
                className="mb-2 inline-block rounded-full bg-[#333] hover:bg-[#616161] p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="flex-col w-screen bg-white p-10 pl-20 h-96">
        <div className="pt-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="pl-24 pr-24">
              <span className="text-3xl text-blue-600 font-bold">FRONT END SKILLS</span>
              <ul className="text-xl pl-10 list-disc">
                <li className="pt-5">
                  Typescript
                </li>
                <li className="pt-2">
                  HTML
                </li>
                <li className="pt-2">
                  CSS
                </li>
                <li className="pt-2">
                  Javascript
                </li>
                <li className="pt-2">
                  ReactJS
                </li>
                <li className="pt-2">
                  NextJS
                </li>
              </ul>
            </div>
            <div className="pl-24 pr-24">
              <span className="text-3xl text-blue-600 font-bold">BACK END SKILLS</span>
              <ul className="text-xl pl-10 list-disc">
                <li className="pt-5">
                  Python
                </li>
                <li className="pt-2">
                  Java
                </li>
                <li className="pt-2">
                  Firebase
                </li>
                <li className="pt-2">
                  Postgres
                </li>
                <li className="pt-2">
                  NodeJS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="flex-col w-screen bg-white p-10 pl-20 h-96">
        <div className="pt-16">
          <div className="pl-24 pr-24">
            <div>
              <span className="text-3xl text-blue-600 font-bold">Projects</span>
              <div className="pt-10 grid grid-cols-3 gap-2">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
                </a>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
                </a>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex-col w-screen bg-white p-10 pl-20">
        <div className="pt-16">
          <div className="pl-24 pr-24">
            <span className="text-3xl text-blue-600 font-bold">Contact Me</span>
          </div>
        </div>
      </section>
    </main>
  );
}
