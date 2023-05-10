export interface IProject {
    title: string
    description: string
    technologies: string[]
    github: string | null
    demo: string | null
    image: string
}

export const ProjectsData: IProject[] = [
    {
        title: 'Sense Apps - Whatsapp',
        description: ` Shopify application that integrates with users' shops, tracks end-customer activity, and implements a messaging flow using the Meta API to communicate with customers. 
        The application also provides analytics on customer data and displays the created flows in a dashboard panel.`,
        technologies: [
            'React',
            'Typescript',
            'FramerMotion',
            'Three JS',
            'Tailwind CSS',
        ],
        github: '',
        demo: '',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
    {
        title: 'Users Library',
        description: `Responsive user library app in React, enabling users to view, edit, and delete user data from an API. 
        The app includes field validation, error handling, Redux for state management, TypeScript for code quality, and a search filter for convenient user lookup.`,
        technologies: [
            'React',
            'Redux(toolkit)',
            'Zod',
            'Framer Motion',
            'Vite',
        ],
        github: 'https://github.com/NivSv/Users-Library',
        demo: 'https://nivsv.github.io/Users-Library',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
    {
        title: 'Users API',
        description:
            'This app is a user API with CRUD functionality, filtering, department/user count feature, and error handling. supporting create/delete departments, unit testing, and CI/CD.',
        technologies: [
            'NestJS',
            'Zod',
            'Typescript',
            'pg',
            'Turborepo',
            'Docker',
        ],
        github: 'https://github.com/NivSv/Users-API',
        demo: 'https://users-api-iexe.onrender.com/api',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
]
