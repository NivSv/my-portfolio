import oversight from '../assets/companies/oversight.png'
import checkpoint from '../assets/companies/checkpoint.png'
import magshimim from '../assets/companies/magshimim.png'

export interface IExperience {
    title: string
    company_name: string
    icon: string
    iconBgColor: string
    date: string
    points: string[]
}

export const experiences: IExperience[] = [
    {
        title: 'National Cyber Education Program',
        company_name: 'Magshmim',
        icon: magshimim,
        iconBgColor: '#f0f0f0',
        date: '2015 - 2018',
        points: [
            'Taught various programming languages, including the basics of different data structures, recursion, complexity, code conventions, client-server configuration, sockets, TCP/UDP, DNS, OSI model, encryption methods, dynamic memory, pointers, and assembly.',
            'Provided a comprehensive curriculum that covered both fundamental and advanced topics in programming.',
            'Encouraged hands-on learning and provided practical exercises and projects to reinforce learning.',
            'Encouraged collaboration and teamwork among students to foster a supportive and engaging learning environment.',
            'Emphasized the importance of good coding practices and conventions to ensure code quality and maintainability.',
        ],
    },
    {
        title: 'Developer(Student)',
        company_name: 'Check Point Software Technologies',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: '2020 - 2021',
        points: [
            'Developed a C++ program to detect a failure in industrial machinery before errors occurred, reducing the reliance on technical assistance and improving equipment availability.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: '2021 - Present',
        points: [
            `Developed an application targeted for e-commerce shop owners. The application provides a set of tools for the user such as a dashboard that provides analytics about visitors, a sophisticated messaging engine, and a configurable WhatsApp chatbot.`,
            'Tech stack used: Node.js (Nest.js), React, Docker, Kafka, Redis, and AWS.',
        ],
    },
]
