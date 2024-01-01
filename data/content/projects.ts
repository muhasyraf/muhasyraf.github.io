import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "BarokahBiz: Full-fledged Enterprise Web App",
    desc: "Desc here ...",
    img: "/static/projects/yei-learn.png",
    github: "https://github.com/muhasyraf/easyterprise",
    tags: ["PHP", "Laravel", "Bootstrap 5", "MariaDB"],
  },
  {
    id: 1,
    title: "Miltactoe: Tic Tac Toe Game at its Peak",
    desc: "Desc here ...",
    img: "/static/projects/buildfaster.png",
    github: "https://github.com/muhasyraf/odin-miltactoe",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Sistem Informasi Monitoring dan Evaluasi, Badan Pusat Statistik",
    desc: "Sistem terintegrasi untuk memonitor dan mengevaluasi kinerja pegawai dan realisasi anggaran di BPS.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/muhasyraf/bps-simonev",
    tags: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MariaDB"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export const allKebabTitles = projects.map((project) => {
  return kebabCase(project.title);
});

export default projects;
