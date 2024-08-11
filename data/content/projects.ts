import { KebabCase, KebabArray } from "@/utils/utils";
import { Project } from "types";

let id = 0;

const Projects: Project[] = [
  {
    id: id++,
    title: "TBIG Mobile CMS",
    desc: "A content management system for managing corporate mobile app content",
    img: "/static/projects/tbigmobile-cms.png",
    tags: [
      "Laravel",
      "Microsoft SQL Server",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    id: id++,
    title: "Metamata: Event Ecosystem Platform",
    desc: "A platform for managing events, including ticketing, registration, and event management",
    img: "/static/projects/metamata.png",
    link: "https://metamata.id",
    tags: ["Laravel", "React", "Inertia.js", "MySQL", "Bootstrap"],
  },
  {
    id: id++,
    title: "M Bloc Design Week Website",
    desc: "A website for M Bloc Design Week event, including event information, schedule, and registration",
    img: "/static/projects/mbdw.png",
    link: "https://mblocdesignweek.id",
    tags: [
      "Astro",
      "Cloudflare Worker",
      "Hono",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: id++,
    title: "BarokahBiz: Enterprise Web App",
    desc: "Enterprise web app for managing business operations, including sales, purchases, inventory, and accounting",
    img: "/static/projects/barokahbiz.png",
    github: "https://github.com/muhasyraf/easyterprise",
    tags: ["Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    id: id++,
    title: "SIMONEV - Badan Pusat Statistik",
    desc: "Sistem Informasi Monitoring dan Evaluasi. An Integrated system for monitoring and evaluating the budget realization and achievement of company employee performance",
    img: "/static/projects/simonev.png",
    github: "https://github.com/muhasyraf/bps-simonev",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
  },
  {
    id: id++,
    title: "Samudralaya: Marine Life Conservation Platform (Bohim App)",
    desc: "A platform for marine life conservation, including campaign, report, and education",
    img: "/static/projects/bohimapp.png",
    github: "https://github.com/muhasyraf/bohim-app",
    tags: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: id++,
    title: "My Personal Website",
    desc: "A website to showcase my portfolio and my writings.",
    img: "/static/projects/personal.png",
    link: "https://muhasyraf.github.io",
    github: "https://github.com/muhasyraf/muhasyraf.github.io",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: id++,
    title: "Miltactoe: Tic Tac Toe Game at its Peak",
    desc: "Tic tac toe game with a twist. Play against your friend and try to win!",
    img: "/static/projects/miltactoe.png",
    link: "https://asyraf.live/kamil-tac-toe",
    github: "https://github.com/muhasyraf/odin-miltactoe",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
];

const AllTags = [];

Projects.forEach((project) => {
  project.tags.forEach((tag) => !AllTags.includes(tag) && AllTags.push(tag));
});

const AllKebabTags = AllTags.map((tag) => KebabCase(tag));

const AllKebabTitles = Projects.map((project) => {
  return KebabCase(project.title);
});

export { Projects, AllTags, AllKebabTags, AllKebabTitles };
