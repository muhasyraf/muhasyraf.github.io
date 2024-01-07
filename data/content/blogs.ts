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

const Blogs: Blog[] = [
  {
    title: "How to Create a Simple REST API with NodeJS and Express",
    img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1302192/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    date: new Date("2023-09-03"),
    body: [
      {
        title: "Introduction",
        content: `In this tutorial, we will learn how to create a simple REST API with NodeJS and Express. We will also learn how to connect to a database and perform CRUD operations.`,
      },
      {
        title: "Prerequisites",
        content: `Before we start, make sure you have installed NodeJS in your machine. You can download NodeJS from <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">here</a>.`,
      },
      {
        title: "Project Setup",
        content: `First, create a new directory and initialize a new NodeJS project. You can do this by running the following commands in your terminal.`,
      },
      {
        title: "Install Dependencies",
        content: `Next, install the following dependencies.`,
      },
    ],
  },
  {
    title: "How to create dynamic routes in NextJS",
    img: "https://nextjs.org/static/images/learn/dynamic-routes/page-path-external-data.png",
    date: new Date("2023-12-03"),
    body: [
      {
        title: "Introduction",
        content: `In this tutorial, we will learn how to create dynamic routes in NextJS.`,
      },
      {
        title: "Prerequisites",
        content: `Before we start, make sure you have installed NodeJS in your machine. You can download NodeJS from <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">here</a>.`,
      },
      {
        title: "Project Setup",
        content: `First, create a new directory and initialize a new NodeJS project. You can do this by running the following commands in your terminal.`,
      },
      {
        title: "Install Dependencies",
        content: `Next, install the following dependencies.`,
      },
    ],
  },
  {
    title: "My Personal Blog",
    date: new Date("2024-01-01"),
    body: [
      {
        title: "Let's get started!",
        content: `Hi there! Welcome to my personal blog. I'm glad you're here. In this blog, I will share with you my projects portfolio, as well as some tutorials and guides on how to build some of the projects I have done.`,
      },
      {
        title: "How i built this blog?",
        content: `I built this blog using NextJS, a React framework for building static and server-side rendered applications. I also used TailwindCSS for styling and GitHub pages for hosting.`,
      },
      {
        title: "How to navigate this blog?",
        content: `You can navigate this blog using the navigation bar at the top of the page. You can see specific tech stack tags that contains all projects that are built with it.`,
      },
      {
        title: "Hope you enjoy!",
        content: `I hope you enjoy reading my blog. If yo u have any questions or suggestions, feel free to contact me through my social media accounts that i provided below.`,
      },
    ],
  },
  {
    title: "Lorem Ipsum dolor sit amet",
    date: new Date("2023-12-29"),
    body: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum`,
      },
      {
        title: "Aenean commodo ligula eget dolor. Aenean massa.",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.\nQuisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.`,
      },
      {
        title: "Aenan consequat massa quis enim. Donec pede justo.",
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum`,
      },
    ],
  },
];

const AllKebabTitles = Blogs.map((blog) => {
  return KebabCase(blog.title);
});

export { Blogs, AllKebabTitles };
