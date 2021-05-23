import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Funnell', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Daniel Funnell',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'grey-profile.jpg',
  paragraphOne:
    'After deciding to challenge myself to build a new website for my business I have discovered a passion for web development',
  paragraphTwo:
    'This has grown from building a static website to building full-stack applications and has allowed me to continually learn new skills. This only adds to my excitement and determination to succeed and grow in this field and bring across a host of transferable skills.',
  paragraphThree:
    "Below you'll find projects that I have completed that showcase my skills and devotion to web development.",
  resume: 'https://drive.google.com/file/d/1gbvl42AXCY081_PBOuQ4Uaj5jRPwJRUT/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'premier-drive-snippet.png',
    title: 'Premier Drive',
    info:
      'A custom-themed WordPress website for my driving school. It includes Woocommerce, Advanced custom fields plugins and custom post types for my testimonials section.',
    info2:
      'I have also created a JavaScript driven questionnaire to allow customers to find the most suitable intensive driving course for themselves.',
    url: 'https://premierdrive.co.uk/',
    repo: 'https://github.com/Danielfunnell/premierdrive', // if no repo, the button will not show up
    tags: [
      'Wordpress',
      'Custom-theme',
      'WooCommerce',
      'Php',
      'Bootstrap',
      'JavaScript',
      'SASS',
      'Laravel-Mix',
    ],
  },
  {
    id: nanoid(),
    img: 'ontrack-snippet.png',
    title: 'On-track db',
    info:
      "A full-stack application. Allows instructors to log in and update their student's progress and next lesson details. Gives students the ability to securely log in and view their profile and driving progress.",
    info2:
      'Features include a message centre for instructors and students to message each other. I have also created a forgotten password system with emailed tokens to reset.',
    url: 'https://www.ontrackdb.co.uk/',
    repo: 'https://github.com/Danielfunnell/ontrackdb', // if no repo, the button will not show up
    tags: ['Php', 'MySQL', 'JavaScript', 'Bootstrap', 'SASS', 'Ajax', 'Laravel-Mix'],
  },
  {
    id: nanoid(),
    img: 'image-outlet-snippet',
    title: 'Image Outlet',
    info:
      'My React application allowing users to search for images. This project fetches images using the Pixabay API',
    info2:
      'Users can click on individual images to get more details such as likes, downloads and creator.',
    url: 'https://imageoutlet.netlify.app/',
    repo: 'https://github.com/Danielfunnell/image-outlet', // if no repo, the button will not show up
    tags: ['React', 'React-Router', 'Material Ui', 'JavaScript', 'API'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'danielfunnell@yahoo.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-funnell-6a891072/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Danielfunnell',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
