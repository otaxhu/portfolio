/* Images */
import goImg from "./assets/Go.svg";
import cImg from "./assets/C_Programming.svg";
import tsImg from "./assets/TS.svg";
import jsImg from "./assets/JS.svg";
import expressImg from "./assets/Expressjs.png";
import mysqlImg from "./assets/MySQL.png";
import postgresImg from "./assets/PostgreSQL.svg";
import gitImg from "./assets/Git.svg";

const languages = [
  {
    name: "Go",
    imgSrc: goImg,
  },
  {
    name: "C",
    imgSrc: cImg,
  },
  {
    name: "TypeScript",
    imgSrc: tsImg,
  },
  {
    name: "JavaScript",
    imgSrc: jsImg,
  },
  {
    name: "Express.js",
    imgSrc: expressImg,
  },
  {
    name: "MySQL",
    imgSrc: mysqlImg,
  },
  {
    name: "PostgreSQL",
    imgSrc: postgresImg,
  },
  {
    name: "Git",
    imgSrc: gitImg,
  },
];

const projects = [
  {
    title: "go-cssmodules",
    repoLink: "https://github.com/otaxhu/go-cssmodules",
    description: "CSS Modules parser and processor, written in Go.",
  },
  {
    title: "esp-uuid",
    repoLink: "https://github.com/otaxhu/esp-uuid",
    description: "Library to generate and manipulate UUIDs for the esp32 chips, written in C.",
  },
  {
    title: "go-ref",
    repoLink: "https://github.com/otaxhu/go-ref",
    description: "Library to work with reactivity, inspired by Vue 3 reactivity, written in Go.",
  },
  {
    title: "esp-cchi-router",
    repoLink: "https://github.com/otaxhu/esp-cchi-router",
    description: "HTTP router and Middleware library for the esp32 chips, written in C.",
  },
  {
    title: "api-rest-typescript",
    repoLink: "https://github.com/otaxhu/api-rest-typescript",
    description: "Implementation of a RESTful web service, written in TypeScript using the Express.js framework",
  },
  {
    title: "esp-ws-client",
    repoLink: "https://github.com/otaxhu/esp-ws-client",
    description: "Implementation of a WebSocket client and server for the esp32 chips, written in C.",
  },
  {
    title: "esp-dht-driver",
    repoLink: "https://github.com/otaxhu/esp-dht-driver",
    description: "Library/Driver for controlling a DHT sensor from a esp32 chip, written in C.",
  },
];

export default function App() {
  return (
    <>
      <div className="w-full mx-auto xl:w-[1024px]">
        <nav className="navbar px-2 md:px-10 sticky top-0 bg-black z-10">
          <div className="flex-1">
            <a className="btn btn-ghost rounded" href="https://otaxhu.github.io/portfolio">
              <h2 className="text-base sm:text-lg">Oscar Pernia's Portfolio</h2>
            </a>
          </div>
          <div className="flex-none">
            <ul className="flex gap-1 font-medium">
              <li><a href="#projects" className="btn btn-ghost p-2 rounded-full"><span className="border-b border-primary-content">Projects</span></a></li>
              <li><a href="#contact" className="btn btn-ghost p-2 rounded-full"><span className="border-b border-primary-content">Contact</span></a></li>
            </ul>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-content px-8 md:flex-row flex-col my-8 gap-12">
            <picture className="w-52 h-52 rounded-full overflow-hidden ring ring-primary-content ring-offset-2 ring-offset-transparent fit">
              <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Profile Photo" className="w-full" />
            </picture>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <h1 className="text-lg">Oscar Pernia, Backend Web Developer.</h1>
              <p className="text-sm">Proficient backend web developer and software engineer. Student at Academia Platzi and self-taught developer</p>
            </div>
          </div>
        </div>
        <div className="px-16 flex flex-col items-center gap-4">
          <div className="divider divider-neutral h-fit">
            <span className="text-xl font-semibold bg-primary bg-opacity-50 p-2 rounded">Skills and tools</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {languages.map((lang) => (
              <div className="bg-white flex flex-col gap-2 justify-around items-center p-4 w-28 h-28 rounded">
                <img className="w-3/4" src={lang.imgSrc} alt={lang.name} />
                <span className="text-[#101010]">{lang.name}</span>
              </div>
            ))}
          </div>
          <div className="divider divider-neutral h-fit">
            <span className="text-xl font-semibold bg-primary bg-opacity-50 p-2 rounded" id="projects">Projects</span>
          </div>
          <div className="grid grid-cols-[repeat(1,minmax(0,20rem))] lg:grid-cols-[repeat(4,minmax(0,15rem))] gap-8">
            {projects.map((proj) => (
              <div className="card card-compact rounded bg-secondary border transition border-transparent hover:border-secondary-content">
                <div className="card-body">
                  <h4 className="card-title">{proj.title}</h4>
                  <p>{proj.description}</p>
                  <div className="flex">
                    <a href={proj.repoLink} target="_blank" className="rounded-full transition hover:bg-[#0d0d0d] bg-black py-1 px-2 text-xs flex gap-2 items-center"><i className="bi-github text-base"></i><span>Visit repository</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="divider divider-neutral h-fit">
            <span className="text-xl font-semibold bg-primary bg-opacity-50 p-2 rounded" id="contact">Contact</span>
          </div>
          <div className="card">
            <div className="card-body bg-white text-[#101010] gap-8 mb-16 rounded">
              <h4 className="card-title max-w-80">If you are interested in my profile and you'd like to concrete an interview, please send a message.</h4>
              <ul className="flex gap-4">
                <li className="text-lg">
                  <a href="https://linkedin.com/in/" className="transition bg-[#0077b5] hover:bg-[#005795] p-2 rounded-full text-white"><i className="bi-linkedin"></i></a>
                </li>
                <li className="text-lg">
                  <a href="" className="p-2 bg-[#101010] rounded-full border border-transparent hover:border-black hover:bg-transparent text-white hover:text-black transition"><i className="bi-envelope-at-fill"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
