export const projects = [
  {
    title: 'Synthax AB',
    description:
      'I did a project for Synthax AB, where I created their logo, web design, and website. It was a great opportunity for me to learn new skills and technologies, such as Next.js and TypeScript. I also got to try implementing light and dark mode for thefirst time.',
    image: '/synthax-project-page.png',
    tags: ['Javascript', 'React', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Art by Ahlman',
    description:
      'I&apos;m working on a webshop for my paintings, which is still ongoing. It&apos;s a fullstack project and one of my biggest so far. It&apos;s been a great learning experience for me, and I&apos;m excited to create a platform where art lovers can browse and purchase my work online.',
    image: '/artbyahlman-project-page.png',
    tags: ['Javascript', 'React', 'Redux', 'MongoDB', 'Node.js', 'GCP', 'Express.js'],
  },
  {
    title: 'To-do List',
    description:
      'One of the projects we had during Technigo was that in one week do a To-do list. Its a basic project and if I had more time I would have made it more clear on which filter your on',
    image: '/todo-project-page.png',
    tags: ['Javascript', 'React', 'Redux'],
  },
  {
    title: 'Chatbot',
    description:
      'One of the projects we had during Technigo was that in one week do a To-do list. Its a basic project and if I had more time I would have made it more clear on which filter your on',
    image: '/chatbot-project-page.png',
    tags: ['Javascript'],
  },
  {
    title: 'Maze',
    description:
      'React project made with Redux to practice using thunks and working with an API together with Redux. We were provided with an labyrinth game API that once you sent a post request with a username to, you got a description and two options where to go next in response, and when you sent another post request with the direction you chose you got another response etc.',
    image: '/maze-project-page.png',
    tags: ['Javascript', 'React', 'Redux'],
  },
  {
    title: 'Whos there?',
    description: 'One of my first javascript projects during my education at Technigo',
    image: '/game-project-page.png',
    tags: ['Javascript'],
  },
  {
    title: 'Quiz',
    description:
      'This was a group project that entailed a great deal of mob programming and individual trouble-shooting. We used React hooks, props and styled components along with Redux state management to build the quiz.',
    image: '/quiz-project-page.png',
    tags: ['Javascript', 'React', 'Redux'],
  },
];

const tags = projects.reduce<string[]>((acc, project) => {
  return [...acc, ...project.tags];
}, []);
export const allTags = [...new Set(tags)];
