import { KebabCase, KebabArray } from "@/utils/utils";
import { Project } from "types";

const Projects: Project[] = [
  {
    id: 0,
    title: "BarokahBiz: Full-fledged Enterprise Web App",
    desc: "Sistem enterprise berbasis website untuk mengelola data dan proses bisnis perusahaan.",
    img: "/static/projects/yei-learn.png",
    github: "https://github.com/muhasyraf/easyterprise",
    tags: ["PHP", "Laravel", "Bootstrap 5", "MariaDB"],
  },
  {
    id: 1,
    title: "Miltactoe: Tic Tac Toe Game at its Peak",
    desc: "Game multiplayer Tic Tac Toe yang bisa dimainkan bersama temanmu.",
    img: "/static/projects/buildfaster.png",
    github: "https://github.com/muhasyraf/odin-miltactoe",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Personal Website",
    desc: "Website pribadi untuk menampilkan portofolio dan informasi pribadi.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://muhasyraf.github.io",
    github: "https://github.com/muhasyraf/muhasyraf.github.io",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Sistem Informasi Monitoring dan Evaluasi - Badan Pusat Statistik",
    desc: "Sistem terintegrasi untuk memonitor dan mengevaluasi kinerja pegawai dan realisasi anggaran di BPS.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/muhasyraf/bps-simonev",
    tags: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "MariaDB"],
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
