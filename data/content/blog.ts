import { KebabCase, KebabArray } from "@/utils/utils";

type Blog = {
  title: string;
  img?: string;
  date: Date;
  body: {
    title: string;
    content: string;
  }[];
};

const Blog: Blog[] = [
  {
    title: "Hello, World! Welcome to My Personal Website!",
    date: new Date("2024-01-07"),
    body: [
      {
        title: "Greetings, fellow humans!",
        content: "My name is Asyraf and I am a 21-year-old information systems student. I am super thrilled to welcome you to my personal website, where I will share my awesome projects and writings with you.",
      },
      {
        title: "Why Did I Create This Personal Website?",
        content: "Ever since I was a kid, I have been fascinated by technology and how it can create amazing things. I love to code, design, build web apps, and anything else that sparks my curiosity. I wanted to have a platform where I can showcase my work and skills, as well as express my thoughts and opinions on various topics. I also wanted to challenge myself to learn new technologies and tools, and to improve my web development skills. Plus, having a personal website is cool, right? 😎",
      },
      {
        title: "What Is the Content of My Personal Website?",
        content: "On this website, you will find two main sections: projects and blog. In the projects section, you will see some of the projects that I have created or contributed to, in the blog section, you will read some of my writings about various things.",
      },
      {
        title: "How Did I Create My Personal Website?",
        content: "This website was created with React, NextJS 14, TailwindCSS v3, and several supporting packages. I chose these technologies because they are modern, fast, and easy to use. They also have great documentation and community support. I also used some APIs and libraries to add some features and functionalities.",
      },
      {
        title: "Thanks for Coming!",
        content: "Thank you for visiting my personal website and reading my first post. I hope you enjoyed it and learned something from it. I will be updating this website regularly with new projects and posts, so stay tuned for more. If you have any feedback, questions, or suggestions, feel free to contact me through the contact form or the social media links on the footer. I would love to hear from you and connect with you. Have a great day and happy coding! 🙌",
      },
    ],
  },
];

const AllKebabTitles = Blog.map((blog) => {
  return KebabCase(blog.title);
});

export { Blog, AllKebabTitles };
