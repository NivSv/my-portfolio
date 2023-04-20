import react from '../assets/tech/reactjs.png'
import docker from '../assets/tech/docker.png'
import nodejs from '../assets/tech/nodejs.png'
import redis from '../assets/tech/redis.png'
import kafka from '../assets/tech/kafka.png'

export interface ITechnologies {
    name: string
    image: string
}

export const technologies: ITechnologies[] = [
    {
        name: 'React',
        image: react,
    },
    {
        name: 'Docker',
        image: docker,
    },
    {
        name: 'Node.js',
        image: nodejs,
    },
    {
        name: 'Redis',
        image: redis,
    },
    {
        name: 'Kafka',
        image: kafka,
    },
]
