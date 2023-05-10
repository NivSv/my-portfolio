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
            'Facilitated the maintenance of high-quality standards for automation tools and software by coordinating the review, testing, and deployment process in adherence to best practices, resulting in a 40% reduction in bugs and issues.',
            'Collaborated with team members, contributing to team goals and demonstrating a willingness to help others, resulting in a more cohesive and productive team environment.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: '2021 - Present',
        points: [
            `Developed a Shopify application that integrates with users' shops, tracks end-customer activity, and implements a messaging flow using the Meta API to communicate with customers. The application also provides analytics on customer data and displays the created flows in a dashboard panel.`,
            'Utilizing Node.js (Nest.js), React, Docker, Kafka, Redis, and AWS.',
            'Experience working in an Agile environment, collaborating closely with cross-functional teams and actively participating in daily stand-ups, sprint planning, and retrospectives.',
            'Led the effort to convert to the Nest framework, reducing deployment time and making the system more scalable.',
            'Directed the team in creating unit tests that enhanced code quality and increased confidence in code changes, leading to a 25% decrease in regression bugs and a reduction in the time spent on manual testing.',
            'Improved onboarding time and minimized code refactoring by implementing a clean code architecture, enhancing efficiency and productivity.',
        ],
    },
]
