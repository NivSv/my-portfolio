import oversight from '../assets/companies/oversight.png'
import checkpoint from '../assets/companies/checkpoint.png'

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
        title: 'IT Support',
        company_name: 'Check Point Software Technologies',
        icon: checkpoint,
        iconBgColor: '#0fa3f4',
        date: '2021 - 2022',
        points: [
            'Providing IT support to employees.',
            'Managing and maintaining the company’s IT infrastructure.',
            'Working with Windows, Linux, and Mac OS.',
            'Working with Active Directory, DNS, DHCP, VPN and more.',
            'Working with Check Point firewalls.',
            'Verifies the integrity of certain equipment using C++.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight',
        icon: oversight,
        iconBgColor: '#0fa3f4',
        date: '2022 - Present',
        points: [
            'Developing a new products from scratch.',
            'Working with message queues, microservices, and more.',
            'Working with React, Redux, Typescript, Node.js, Express, MongoDB, AWS, Docker, and more.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
]
