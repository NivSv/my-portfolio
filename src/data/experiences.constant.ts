import oversight from '../assets/companies/oversight.png'
import checkpoint from '../assets/companies/checkpoint.png'
import magshimim from '../assets/companies/magshimim.png'
import reflectiz from '../assets/companies/reflectiz.webp'

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
        title: 'Senior Security Backend Developer',
        company_name: 'Reflectiz',
        icon: reflectiz,
        iconBgColor: '#f0f0f0',
        date: 'Jul 2023 - Present',
        points: [
            "Leading development of the core web-scanning engines and heavy-load services, the most critical components of Reflectiz's security platform that remotely monitors websites for security, privacy, and compliance risks.",
            'Engineering resilient, adversarial-resistant systems using Node.js to handle high-throughput scanning operations for Fortune 500 enterprises.',
            'Specializing in the low-level mechanics of browser internals (Chromium), implementing sophisticated JavaScript injection mechanisms to mock browser APIs, intercept network calls, and add execution hooks.',
            'Architecting scalable microservices with Pub/Sub patterns (Kafka/RabbitMQ) and Redis for distributed caching and session management across heavy-load services.',
            'Developing production-grade backend solutions that bridge deep security research with scalable architecture, applying advanced understanding of browser internals to detect vulnerabilities traditional solutions miss.',
            'Building NestJS-based services with GraphQL/gRPC APIs, implementing ORM patterns with Prisma, and deploying on GCP/AWS with Kubernetes (K8s), Helm, and Terraform.',
            'Setting up comprehensive monitoring and observability using Grafana dashboards, tracking system performance, security scan analytics, and ensuring reliability of adversarial-resistant systems.',
        ],
    },
    {
        title: 'Fullstack Developer',
        company_name: 'Oversight (SenseApps)',
        icon: oversight,
        iconBgColor: '#f0f0f0',
        date: 'Mar 2021 - Jun 2023',
        points: [
            `Developed an e-commerce management web application targeted at shop owners providing detailed and comprehensive tools such as full dashboard analytics, and a configurable WhatsApp chatbot using Node.js (Nest.js) and React.js.`,
            `Containerized services for automated deployment using Docker and integrated Jenkins, resulting in a 30% improvement in software reliability and faster deployment while enabling a scalable host architecture`,
            `Spearheaded the development of a new codebase architecture, implementing best practices around variable and function naming, DRY principle and comments, reducing employee onboarding time, and improving overall code readability.`,
            'Directed team-wide unit testing for the frontend and backend, increasing code coverage and confidence in code changes, leading to a 25% decrease in regression bugs and reduced time spent on manual testing.',
            `Led an effort to rewrite the codebase with an opinionated framework, NestJS, increasing development velocity across multiple departments and system maintenance through a modular architecture with lightweight microservices.`,
            `Implemented Kafka as an internal messaging system, boosting data handling and communication efficiency, resulting in a 30% improved processing speed and increased customer satisfaction.`,
        ],
    },
    {
        title: 'Automation Developer',
        company_name: 'Check Point Software Technologies',
        icon: checkpoint,
        iconBgColor: '#f0f0f0',
        date: 'Jul 2020 - Mar 2021',
        points: [
            'Developed a C++ program to detect failures in industrial machinery before errors occurred, such as software compatibility issues from OS updates, reducing technical assistance, and improving equipment availability for employees by 15%.',
            `Facilitated the maintenance of high-quality standards for automation tools and software through Azure Event Hubs and Log Analytics for bug detection in adherence to best practices, resulting in a 40% reduction in code issues.`,
            `Constructed team goals through requirements gathering, short-term and long-term planning, project management, and mentorship in collaboration with others, resulting in a more cohesive and productive team environment.`,
        ],
    },
    {
        title: 'National Cyber Education Program',
        company_name: 'Magshmim',
        icon: magshimim,
        iconBgColor: '#f0f0f0',
        date: 'Nov 2015 - Nov 2018',
        points: [
            'Taught various programming languages, including the basics of different data structures, recursion, complexity, code conventions, client-server configuration, sockets, TCP/UDP, DNS, OSI model, encryption methods, dynamic memory, pointers, and assembly.',
            'Provided a comprehensive curriculum that covered both fundamental and advanced topics in programming.',
            'Encouraged hands-on learning and provided practical exercises and projects to reinforce learning.',
            'Encouraged collaboration and teamwork among students to foster a supportive and engaging learning environment.',
            'Emphasized the importance of good coding practices and conventions to ensure code quality and maintainability.',
        ],
    },
]
