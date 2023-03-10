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
        title: 'Sense Apps - RTL',
        description:
            'align your shopify website layout from right to left with one app!',
        technologies: [
            'Nest.JS',
            'React',
            'GraphQL',
            'Tailwind CSS',
            'MongoDB',
            'TurboRepo',
            'Redis',
            'Vite',
        ],
        github: '',
        demo: 'https://apps.shopify.com/sense-rtl',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
    {
        title: 'Sense Apps - Whatsapp',
        description: 'My personal portfolio website.',
        technologies: [
            'React',
            'Typescript',
            'Framer Motion',
            'Three JS',
            'Tailwind CSS',
        ],
        github: '',
        demo: '',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
    {
        title: 'Step By Step',
        description: 'React Native app and admin panel for a personal trainer.',
        technologies: [
            '.Net(4.8)',
            'React',
            'TypeScript',
            'Redux',
            'Tailwind CSS',
            'SQL(MariaDB)',
            'Entity Framework',
            'Vite',
            'React Native',
        ],
        github: '',
        demo: 'https://play.google.com/store/apps/details?id=com.oversight.il.sbs_app',
        image: 'https://i.ibb.co/0nZ3Z3S/Portfolio.png',
    },
]
