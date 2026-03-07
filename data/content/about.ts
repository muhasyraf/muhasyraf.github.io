type Contact = {
  platform: string;
  username: string;
  link: string;
  icon: string;
};

type ProfileSummary = {
  content: string;
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
    content: `I'm <span class="font-bold">Asyraf</span>, a 23-year-old
  Information Systems graduate from UIN Syarif Hidayatullah Jakarta. I'm
  passionate about <span class="font-bold">full-stack development</span> and
  <span class="font-bold">DevOps</span>, building web applications that are
  user-friendly, responsive, and scalable.`,
  },
  {
    content: `I have expertise in both <span class="font-bold">front-end</span>
  and <span class="font-bold">back-end development</span>, as well
  as database management and deployment. Some of the tools and
  frameworks that I use are Laravel, Next.js, React, Golang, ExpressJS, MySQL,
  MongoDB, TailwindCSS, Git, and many more.`,
  },
  {
    content: `On the <span class="font-bold">DevOps</span> side, I handle
  deployment automation with <span class="font-bold">CI/CD pipelines</span>,
  <span class="font-bold">Docker</span>, and
  <span class="font-bold">Kubernetes</span>. I'm always eager to learn more —
  my next area of focus is <span class="font-bold">DevSecOps</span> and
  everything related to security in the development lifecycle.`,
  },
];

export const Experience: Experience[] = [
  {
    companyName: "NBS",
    position: "Software Engineer",
    employmentType: "Contract",
    image: "/static/icons/about/logo-nbs.png",
    imagestyle: {
      "border-radius": "0.5rem",
      "background-color": "rgb(255 255 255)",
    },
    link: "https://nbs.co.id/",
    duration: "June 2025 - Current",
  },
  {
    companyName: "NBS",
    position: "Software Engineer",
    employmentType: "Freelance",
    image: "/static/icons/about/logo-nbs.png",
    imagestyle: {
      "border-radius": "0.5rem",
      "background-color": "rgb(255 255 255)",
    },
    link: "https://nbs.co.id/",
    duration: "February 2025 - May 2025",
  },
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
    duration: "July 2024 - January 2025",
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
