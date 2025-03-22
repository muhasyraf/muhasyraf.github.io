type Contact = {
  platform: string;
  username: string;
  link: string;
  icon: string;
};

type ProfileSummary = {
  content: {
    text: string;
    highlights?: string[];
  }[];
};

type Experience = {
  companyName: string;
  position: string;
  employmentType: string;
  image: string;
  imagestyle?: object;
  link: string;
  duration: string;
};

export const Contact: Contact[] = [
  {
    platform: "Email",
    username: "faizkamil39@gmail.com",
    link: "mailto:faizkamil39@gmail.com",
    icon: "/static/icons/about/email.svg",
  },
  {
    platform: "Github",
    username: "muhasyraf",
    link: "https://github.com/muhasyraf",
    icon: "/static/icons/about/github.svg",
  },
  {
    platform: "GitLab",
    username: "muhasyraf",
    link: "https://gitlab.com/muhasyraf",
    icon: "/static/icons/about/gitlab.svg",
  },
  {
    platform: "LinkedIn",
    username: "Muhammad Asyraf Faiz Kamil",
    link: "https://www.linkedin.com/in/muhammad-asyraf-faiz-kamil-749192222/",
    icon: "/static/icons/about/linkedin.svg",
  },
  {
    platform: "Instagram",
    username: "faizkamil1",
    link: "https://www.instagram.com/faizkamil1/",
    icon: "/static/icons/about/instagram.svg",
  },
];

export const ProfileSummary: ProfileSummary[] = [
  {
    content: [
      { text: "I'm " },
      { text: "Asyraf", highlights: ["font-bold"] },
      {
        text: ", a 21-year-old Information Systems student at UIN Syarif Hidayatullah Jakarta. I'm passionate about ",
      },
      { text: "full-stack development", highlights: ["font-bold"] },
      {
        text: " and creating web applications that are user-friendly, responsive, and scalable.",
      },
    ],
  },
  {
    content: [
      { text: "I have expertise in both " },
      { text: "front-end", highlights: ["font-bold"] },
      { text: " and " },
      { text: "back-end development", highlights: ["font-bold"] },
      {
        text: ", as well as database management and deployment. Some of the tools and frameworks that I use are Laravel, Next.js, React, ExpressJS, MySQL, MongoDB, TailwindCSS, Git, and many more.",
      },
    ],
  },
  {
    content: [
      {
        text: "I'm always curious and eager to learn more and challenge myself in the field of technology. I'm particularly interested in ",
      },
      { text: "cloud computing", highlights: ["font-bold"] },
      { text: " and " },
      { text: "blockchain", highlights: ["font-bold"] },
      {
        text: ", and I'm currently studying and experimenting with these topics.",
      },
    ],
  },
];

export const Experience: Experience[] = [
  {
    companyName: "NBS",
    position: "Software Engineer",
    employmentType: "Internship",
    image: "/static/icons/about/logo-nbs.png",
    imagestyle: {
      "border-radius": "0.5rem",
      "background-color": "rgb(255 255 255)",
    },
    link: "https://nbs.co.id/",
    duration: "July 2024 - Current",
  },
  {
    companyName: "Meta Mata",
    position: "Full-stack Developer",
    employmentType: "Internship",
    image: "/static/icons/about/logo-metamata.png",
    imagestyle: {
      "border-radius": "0.5rem",
      "background-color": "rgb(255 255 255)",
      "padding-left": "0.25rem",
      "padding-right": "0.25rem",
    },
    link: "https://metamata.id/",
    duration: "November 2023 - March 2024",
  },
  {
    companyName: "Badan Pusat Statistik",
    position: "Web Developer",
    employmentType: "Internship",
    image: "/static/icons/about/logobps.svg",
    link: "https://bps.go.id/",
    duration: "July 2023 - August 2023",
  },
];
