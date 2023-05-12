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
        title: 'Automation Developer',
        company_name: 'Check Point Software Technologies',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: '2020 - 2021',
        points: [
            'Developed a C++ program to detect a failure in industrial machinery before errors occurred, reducing the reliance on technical assistance and improving equipment availability.',
            `Facilitated the maintenance of high-quality standards for automation tools and software by coordinating the review, testing, and deployment process in adherence to best practices, resulting in a 40% reduction in bugs and issues.`,
            `Collaborated with team members, contributing to team goals and demonstrating a willingness to help others, resulting in a more cohesive and productive team environment.`,
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: '2021 - Present',
        points: [
            `Developed an application targeted for e-commerce shop owners using Node.js (Nest.js), and React. The application provides a set of tools for the user such as a dashboard that provides analytics about visitors, a sophisticated messaging engine, and a configurable WhatsApp chatbot.`,
            `Containerized the services using Docker and integrated Jenkins for automated deployment, which enhanced the efficiency and reliability of the software development workflow.`,
            `Pushed and implemented a team-wide unit testing effort which enhanced code coverage and increased confidence in code changes, leading to a 25% decrease in regression bugs and a reduction in the time spent on manual testing.`,
            'Led an effort to rewrite our codebase with an opinionated framework such as the NestJS framework, increasing development velocity across multiple departments.',
            `Implemented and configured Kafka as a messaging system for internal communication between services, resulting in efficient data handling and streamlined communication. This led to better performance, and increased productivity, which resulted in higher customer satisfaction.`,
        ],
    },
]
