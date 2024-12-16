import { FiDownload } from 'react-icons/fi';
import { SiVisualstudiocode } from 'react-icons/si';
import {
  FaFigma,
  FaGithub,
  FaJira,
  FaLinkedin,
  FaNpm,
  FaWordpress,
} from 'react-icons/fa';
import { SiEslint } from 'react-icons/si';
import { HiOutlineArrowRight } from 'react-icons/hi';
import background from '@images/cta-new-bg.jpg';
import heroBackground from '@images/hero-background.svg';
import heroImage from '@images/waqas-saeed.webp';

export const homepageCtaData = {
  sectionID: 'download-cv',
  image: {
    src: background,
    alt: 'Background image for "Download my CV" section',
  },
  heading: 'Are you seeking for a new team member? 🕵️',
  content:
    'Seek no more! I truly believe that I will become a good fit for your team and that we can build awesome things together.',
  link: {
    href: '/CV_waqas.pdf',
    text: 'Download CV',
    icon: FiDownload,
    type: 'download',
  }
};

const timelineElements = [
  {
    title: 'Senior Software Engineer',
    subtitle: 'Elemental Concept, London, United Kingdom',
    description: [
      'I built and maintained web applications using Scrum teamwork methods. I worked with an international team, and my clear English communication kept things smooth. I especially enjoyed creating a complex sales app with features specific to different travel brands, making it easier for users. I then used my skills to build an app that captured leads through user-friendly forms. My expertise in React and JavaScript allowed me to tackle these projects confidently.',
    ],
    tiles: [
      'React',
      'Redux',
      'TypeScript',
      'JavaScript',
      'Jest',
      'Next.js',
      'PHP',
      'Node Js',
      'SASS',
      'GIT',
      'Github',
      'Figma',
      'Scrum',
      'Jira',
    ],
    isHighlighted: false,
    badge: '05/2020 - Present',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Senior Software Engineer ',
    subtitle: 'Nextbridge Ltd.',
    description: [
      'I built and maintained web applications using Scrum teamwork methods. I worked with an international team, and my clear English communication kept things smooth. I especially enjoyed creating a complex sales app with features specific to different travel brands, making it easier for users. I then used my skills to build an app that captured leads through user-friendly forms. My expertise in React and JavaScript allowed me to tackle these projects confidently.',
    ],
    tiles: [
      'React',
      'Redux',
      'TypeScript',
      'JavaScript',
      'Jest',
      'Next.js',
      'PHP',
      'Node Js',
      'SASS',
      'GIT',
      'Github',
      'Figma',
      'Scrum',
      'Jira',
    ],
    isHighlighted: false,
    badge: '07/2015 - 11/2020',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Full Stack Developer/ Solution Architect',
    subtitle: 'Brantum Technologies, Islamabad Pakistan',
    description: [
      'As a Full Stack Developer and Solution Architect, I designed and implemented scalable, secure, and user-centric software solutions by leading the end-to-end development process. My expertise spanned front-end development with frameworks like React or Angular, back-end architecture using Node.js or Python, and database design with SQL and NoSQL technologies. I translated complex business requirements into technical solutions, optimized system performance, and ensured seamless cloud integrations using AWS or Azure. Collaborating with cross-functional teams, I provided technical leadership, streamlined development workflows, and delivered robust applications that exceeded client expectations.',
    ],
    tiles: [
      'React',
      'JavaScript',
      'Next.js',
      'HTML',
      'CSS',
      'SASS',
      'WordPress',
      'Woocommerce',
      'PHP',
      'GIT',
      'Github',
      'Figma',
      'Scrum',
      'ClickUp',
      'Team leadership',
    ],
    isHighlighted: false,
    badge: '07/2014 - 07/2015',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'NextBridge Pvt Ltd.',
    description: [
      'As a Full Stack Developer, I contributed to the design, development, and deployment of dynamic web applications, leveraging modern front-end frameworks like Angular and React, alongside back-end technologies such as Node.js and Python. I worked on building scalable RESTful APIs, integrating third-party services, and optimizing database performance using PostgreSQL and MongoDB. By collaborating with cross-functional teams, I ensured seamless project delivery while maintaining high code quality and adhering to Agile development practices. My role focused on creating responsive, user-friendly interfaces and robust server-side logic, resulting in efficient and reliable software solutions tailored to business needs.',
    ],
    tiles: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'WordPress',
      'UX',
      'Graphic design',
      'Management',
      'Team leadership',
      'SASS',
    ],
    isHighlighted: false,
    badge: '02/2015 - 08/2020',
    hightlightedBadge: 'Current',
  },
  {
    title: 'Software Engineer',
    subtitle: 'Fliegen IT Solutions',
    description: [
      'Crafted user-friendly WordPress websites from the ground up. Each project was designed with a focus on clean aesthetics and a smooth user experience. My dedication to detail ensures pixel-perfect websites that deliver a seamless user experience.',
    ],
    tiles: [
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'PHP',
      'Graphic design',
      'UX',
    ],
    isHighlighted: false,
    badge: '04/2014 - 06/2014',
    hightlightedBadge: 'Current',
  },
].map((element, i) => {
  return { ...element, id: i };
});

export const employmentHistoryData = {
  sectionID: 'employment-history',
  heading: 'Employment history',
  elements: timelineElements,
};

const latest3Jobs = timelineElements.filter((job, i) => i < 3 && job);

const toolsList = [
  {
    label: 'Visual Studio Code',
    icon: SiVisualstudiocode,
  },
  {
    label: 'Figma',
    icon: FaFigma,
  },
  {
    label: 'NPM',
    icon: FaNpm,
  },
  {
    label: 'Github',
    icon: FaGithub,
  },
  {
    label: 'Eslint',
    icon: SiEslint,
  },
  {
    label: 'Jira',
    icon: FaJira,
  },
  {
    label: 'WordPress',
    icon: FaWordpress,
  },
].map((element, i) => {
  return { ...element, id: i };
});

export const resumeData = {
  sectionID: 'resume',
  summary: {
    name: 'Waqas Saeed',
    position: 'Full-Stack developer',
    yearsOfExperience: '11',
    yearsOfExperienceLabel: 'Years Experience',
    bio: [
      "Full Stack Developer with comprehensive experience in both front-end and back-end development. Skilled in creating dynamic, user-friendly interfaces and robust, scalable back-end systems, I bring a balanced approach to full-stack development. I thrive in building seamless applications that deliver high performance and great user experiences. Passionate about problem-solving and continuously learning, I'm adaptable to new tools and technologies to drive projects forward.",
    ],
  },
  heading: 'Resume',
  extendedSummary: {
    title: 'More about me',
    bio: [
      "Beyond my work as a developer, I'm someone who thrives on staying active, both physically and mentally. Sports play a big role in my life—I love playing cricket, football, and badminton, and I'm a regular at the gym. Swimming is another way I stay energized, balancing fitness with the calm it brings.",
      "I'm also passionate about keeping up with the world, from local and international news to the latest in technology. I'm always curious about advancements in tech and enjoy exploring new tools, frameworks, and trends that could enhance my skills and work.",
      "Traveling and camping are two more interests that bring excitement and perspective to my life. I enjoy exploring new places, immersing myself in different cultures, and experiencing nature firsthand. Whether it's a weekend camping trip or a journey to a new country, I value the adventure and the chance to unwind in the outdoors.",
    ],
  },
  employmentHistory: {
    jobs: latest3Jobs,
    link: {
      href: '#employment-history',
      text: 'See all',
    },
  },
  skills: {
    title: 'Skills',
    elements: [
      'PHP',
      'Node.js',
      'React',
      'Angular',
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
      'MySQL',
      'Postgresql',
      'Next.js',
      'Redux',
      'GraphQL',
      'REST API',
      'Twilio',
      'WEBRTC',
      'WordPress',
      'Woocommerce',
      'Jest',
      'GIT',
      'Github / Bitbucket / Gitlab',
      'SOLID',
      'OOP',
      'Scrum',
      'Agile',
      'Team Leadership',
      'AWS Services',
    ],
  },
  tools: {
    title: 'Tools I use',
    elements: toolsList,
  },
  languages: {
    title: 'Languages',
    elements: ['English', 'Urdu - Native'],
  },
};

export const socialMediaData = {
  elements: [
    {
      href: 'https://github.com/wsaeed77',
      label: 'Github',
      icon: FaGithub,
    },
    {
      href: 'https://www.linkedin.com/in/waqas-saeed778',
      label: 'LinkedIn',
      icon: FaLinkedin,
    },
  ],
};

export const heroSectionData = {
  title: {
    headline: '👋 Hey, I am',
    subheadline: 'Waqas Saeed',
  },
  subtitle: 'Full-Stack Developer',
  content: 'Always keen to learn and explore new opportunities.',
  link: {
    href: '#download-cv',
    text: 'Hire me',
    icon: HiOutlineArrowRight,
  },
  backgroundImage: heroBackground,
  image: heroImage,
};
