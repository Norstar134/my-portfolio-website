//https://tailwindcss.com/docs/responsive-design
//https://www.w3schools.com/colors/colors_picker.asp
//https://tailwindcss.com/docs/dark-mode

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <section id="home" className="flex flex-col md:h-auto sm:justify-between items-center sm:flex-row z-10">
        <div className="w-0">
          <span className="ml-32 mt-16 absolute md:top-5 md:-left-32 -z-0 scale-50 md:scale-100 -top-2 -left-36 md:opacity-100 opacity-60">
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
        <div className="w-full md:w-1/3 text-left md:pt-0 pt-10">
          <h1 className="text-blue-500 pt-10 break-normal font-bold">Hi! I'm<br />
          <span className="text-3xl text-black"> Deanna Woodhouse-Hawkins</span>
          </h1>
          <h2 className="text-2xl font-semibold">Junior Full Stack Developer</h2>
          <p className="text-lg pt-10 text-slate-500">And recent graduate of the Open University, studying Computing and IT!</p>
          <div className="pt-10 flex-col">
            <ul className="flex flex-wrap text-sm font-medium text-center pb-10 items-start flex-grow">
              <li className="me-10 pl-5">
                <a href="#contact" className="bg-[#80ccff] hover:bg-[#00ace6] text-white font-bold py-4 px-7 rounded-full">Contact Me </a>
              </li>
              <li>
                <a href="./portfolioLogo.png" className="bg-[#80ccff] hover:bg-[#00ace6] text-white font-bold py-4 px-7 rounded-full" download>Download CV</a>
              </li>
            </ul>
          </div>
        </div>
{/* image will change*/}
        <div className="w-full sm:w2/3 text-right float-right mt-8 sm:mt-0 md:pl-20 md:pt-2 md:pb-0">
          <img src="https://www.pngall.com/wp-content/uploads/4/Thinking-Woman-PNG-Picture.png" alt="image of me(eventually)" className="relative z-10 flex-shrink-0 resize-none h-auto md:pl-48"></img>
        </div>

        <div className="w-0">
          <span className="justify-end mt-4 bottom-5 -right-14 md:bottom-72 md:right-16 absolute scale-75 md:scale-125">
            <svg width="491" height="490" viewBox="0 0 491 490" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="356.5" cy="356.5" r="356.5" fill="#80ccff" />
            </svg>
          </span>
        </div>
      </section>

      <section id="about" className="mt-8 sm:mt-10 flex justify-center z-10">
        <div className="pt-16 md:pl-0 pl-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="">
              <span className="text-3xl text-[#80ccff] font-bold">ABOUT ME</span>
              <h2 className="text-2xl text-black font-semibold pt-10">Continuing Innovation Through Learning New Tech!</h2>
              <p className="md:text-lg pt-5 md:pr-44">I have always been interested in tech since I was little and it only got worse when I turned 11. I wanted to know how the video games
                I played were created and, when my secondary school started to teach Computing and IT as a GCSE, I took the chance, which furthered my love for programming.
                Currently, I’m volunteering as a web developer at a game studio called Wee Tattie Studio and working on a large project, which is furthering my understanding in the backend.
              </p><br />
              <p className="md:text-lg pt-5 md:pr-44">On a personal note, I’m an avid gamer and writer in my spare time. I also love to bake and cook to the point my brownies, 
                cookies and Korean fried chicken have become famous within my family and friends.</p>
            </div>
            <div className="">
              <h3 className="text-3xl text-[#80ccff] font-bold">CONNECT WITH ME</h3>
              <p className="md:text-lg pt-10 md:pr-44">If you wish to contact me, please fill in the contact form
              <a href="#contact" className="text-blue-500 hover:text-blue-300 hover:underline"> here</a>, which also lists my email address. However, if you want to have a general chat, please use my links below, which take you to my LinkedIn and Github profiles.
              </p>
              
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

      <section id="skills" className="mt-8 sm:mt-10 flex justify-center">
        <div className="md:pt-16 md:pl-0 pl-5 pt-20">
          <div className="grid grid-cols-2 md:gap-32 gap-5">
            <div>
              <span className="md:text-3xl text-[#80ccff] font-bold text-2xl">FRONT END SKILLS</span>
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
            <div className="">
              <span className="md:text-3xl text-[#80ccff] font-bold text-2xl">BACK END SKILLS</span>
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
          <div className="grid grid-cols-2 md:gap-32 gap-5 md:pt-10 pt-5">
          <div>
              <span className="md:text-3xl text-[#80ccff] font-bold text-2xl">MISC. SKILLS</span>
              <ul className="text-xl pl-10 list-disc">
                <li className="pt-5">
                  Machine Learning (Python)
                </li>
                <li className="pt-2">
                  Tensorflow
                </li>
                <li className="pt-2">
                  Keras
                </li>
                <li className="pt-2">
                  Github
                </li>
              </ul>
            </div>
            <div>
              <span className="md:text-3xl text-[#80ccff] font-bold text-2xl">SOFT SKILLS</span>
              <ul className="text-xl pl-10 list-disc">
                <li className="pt-5">
                  Team player
                </li>
                <li className="pt-2">
                  Deliver results
                </li>
                <li className="pt-2">
                  Reliable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-8 sm:mt-10 flex justify-center">
        <div className="md:pt-16 pt-20">
          <div>
            <div>
              {/*projects*/}
              <span className="text-3xl text-[#80ccff] font-bold">PROJECTS</span>
              <div className="pt-10 grid grid-cols-2 md:gap-2 gap-4 md:pl-0 pl-5 md:pr-0 pr-5">
                <a href="https://github.com/Norstar134/my-portfolio-website" target="_blank" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Portfolio Website</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This portfolio website is a personal project of mine, allowing me to flex and expand my knowledge the web tech stacks I know.</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills used: Typescript, React, Tailwind CSS and Next.js</p>
                  </div>
                </a>
                <a href="/timeloggingApp" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img className="object-contain w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/timelogging.PNG" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Time Logging Application for Wee Tattie Studio</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is the biggest project I've worked on so far and is helping me expand my tech stack. The aim of this project is to allow
                      developers to record their hours to be compensated in the future once the studio gets funding.
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills used: Typescript, React, Tailwind CSS, Next.js and Firebase.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="flex-col">
        <div className="py-8 md:py-16 px-4 mx-auto max-w-screen-md">
            <span className="text-3xl text-[#80ccff] font-bold">CONTACT ME</span>
            <form className="space-y-8 pt-10" name="contact" method="POST" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field">
              <input name="bot-field" className="hidden" />
              <div>
                <label htmlFor="name" className="block mb-2 text-base font-medium md:text-lg text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="name" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let me know what you want to talk about" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-base font-medium md:text-lg text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@email.com" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-base font-medium md:text-lg text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="text-sm text-center bg-[#80ccff] hover:bg-[#00ace6] text-white font-bold py-4 px-7 rounded-full">Send message</button>
            </form>
          </div>
      </section>

      </div>
    </main>
  );
}
