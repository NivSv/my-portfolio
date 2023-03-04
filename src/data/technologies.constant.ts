import react from '../assets/tech/reactjs.png'
import redux from '../assets/tech/redux.png'
import docker from '../assets/tech/docker.png'
import nodejs from '../assets/tech/nodejs.png'
import tailwind from '../assets/tech/tailwind.png'
import typescript from '../assets/tech/typescript.png'
import git from '../assets/tech/git.png'
import dotnet from '../assets/tech/dotnet.jpg'

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
        name: 'Redux',
        image: redux,
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
        name: 'Tailwind',
        image: tailwind,
    },
    {
        name: 'Typescript',
        image: typescript,
    },
    {
        name: 'Git',
        image: git,
    },
    {
        name: '.NET',
        image: dotnet,
    },
]
