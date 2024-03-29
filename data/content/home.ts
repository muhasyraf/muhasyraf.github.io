type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};

export const Skills: Skill[] = [
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "Tailwind CSS",
    icon: "/static/icons/skills/tailwind.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Laravel",
    icon: "/static/icons/skills/laravel.svg",
  },
  {
    title: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

export const Testimonials: Testimonial[] = [
  {
    quote:
      "I've worked with many developers over the years, and Asyraf is one of the best I've come across. He's a great communicator, a talented developer, and a pleasure to work with. I highly recommend him!",
    name: "Dylan Lea",
    job: "Founder of Build Faster",
  },
  {
    quote:
      "Asyraf is a great developer. He's fast, reliable, and has a great eye for design. I highly recommend him!",
    name: "Josh W Comeau",
    job: "CTO of Kite Tail",
  },
  {
    quote:
      "His work is always top-notch, and he's a pleasure to work with. I highly recommend him!",
    name: "Shareef Jackson",
    job: "VP of Engineering at Tynker",
  },
];
