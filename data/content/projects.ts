import { KebabCase, KebabArray } from "@/utils/utils";
import { Project } from "types";

const Projects: Project[] = [
  {
    id: 0,
    title: "BarokahBiz: Full-fledged Enterprise Web App",
    desc: "Enterprise web app for managing business operations, including sales, purchases, inventory, and accounting",
    img: "/static/projects/barokahbiz.png",
    github: "https://github.com/muhasyraf/easyterprise",
    tags: ["PHP", "Laravel", "Bootstrap 5", "MariaDB"],
  },
  {
    id: 1,
    title: "SIMONEV - Badan Pusat Statistik",
    desc: "Sistem Informasi Monitoring dan Evaluasi. An Integrated system for monitoring and evaluating the budget realization and achievement of company employee performance",
    img: "/static/projects/simonev.png",
    github: "https://github.com/muhasyraf/bps-simonev",
    tags: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MariaDB"],
  },
  {
    id: 2,
    title: "My Personal Website",
    desc: "A website to showcase my portfolio and my writings.",
    img: "/static/projects/personal.png",
    link: "https://muhasyraf.github.io",
    github: "https://github.com/muhasyraf/muhasyraf.github.io",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: 3,
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
