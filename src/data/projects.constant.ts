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
        title: 'Portfolio',
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
        title: 'Sense Apps - RTL',
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
]
