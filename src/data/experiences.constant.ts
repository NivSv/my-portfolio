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
        title: 'Automation',
        company_name: 'Check Point Software Technologies',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: '2021 - 2022',
        points: [
            'Developed and implemented automated systems to streamline processes and increase efficiency.',
            'Created a program using C++ to verify the integrity of certain equipment.',
            'Collaborated with cross-functional teams to identify and resolve technical issues.',
            'Provided technical support to end-users, including troubleshooting and problem-solving.',
            'Ensured that all hardware was operating at its optimum level by applying the latest updates and patches.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: '2022 - Present',
        points: [
            'Developing a new products from scratch.',
            'Working with message queues, microservices, and more.',
            'Working with React, Redux, Typescript, Node.js, Express, MongoDB, AWS, Docker, and more.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
]
