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
    content: `I'm <span class="font-bold">Asyraf</span>, a 21-year-old
  Information Systems student at UIN Syarif Hidayatullah Jakarta. I'm
  passionate about <span class="font-bold">full-stack development</span> and creating
  web applications that are user-friendly, responsive, and scalable.`,
  },
  {
    content: `I have expertise in both <span class="font-bold">front-end</span>
  and <span class="font-bold">back-end development</span>, as well
  as database management and deployment. Some of the tools and
  frameworks that I use are Laravel, Next.js, React, ExpressJS, MySQL,
  MongoDB, TailwindCSS, Git, and many more.`,
  },
  {
    content: `I’m always curious and eager to learn more and challenge myself in the
  field of technology. I’m particularly interested in
  <span class="font-bold">cloud computing</span> and
  <span class="font-bold">blockchain</span>, and I’m currently
  studying and experimenting with these topics.`,
  },
];

export const Experience: Experience[] = [
  {
    companyName: "Metamata.id",
    position: "Full-stack Developer Intern",
    image: "/static/icons/about/logo-metamata.png",
    imagestyle: {
      "border-radius": "0.5rem",
      "background-color": "rgb(255 255 255",
      "padding-left": "0.25rem",
      "padding-right": "0.25rem",
    },
    link: "https://metamata.id/",
    duration: "November 2023 - Current",
  },
  {
    companyName: "Badan Pusat Statistik",
    position: "Web Developer Intern",
    image: "/static/icons/about/logobps.svg",
    link: "https://bps.go.id/",
    duration: "July 2023 - August 2023",
  },
];
