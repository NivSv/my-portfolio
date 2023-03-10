import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import { IProject, ProjectsData } from '../../data/projects.constant'

interface IMainProjectProps {
    project: IProject
    key: number
    leftSide: boolean
}

const MainProject = ({ project, key, leftSide }: IMainProjectProps) => {
    return (
        <div key={`project-${key}`} className="flex justify-center mt-16">
            <img
                src={project.image}
                alt={`Project ${project.title}`}
                title={`Project ${project.title}`}
            />
            <div className="flex flex-col items-end gap-2">
                <p className="text-md text-callToAction">Featured Project</p>
                <p className="text-3xl text-primaryLight font-bold">
                    {project.title}
                </p>
                <div className="text-primary border-solid bg-slate-800 border-slate-800 w-[400px] text-center rounded-md border-4 shadow-lg">
                    {project.description}
                </div>
                <div className="flex gap-2 text-primary">
                    {project.technologies.map((technology, index) => (
                        <p key={index}>{technology}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="container mt-44 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    Projects.
                </h1>
            </motion.div>
            {ProjectsData.map((project, index) => {
                return (
                    <MainProject
                        project={project}
                        key={index}
                        leftSide={index % 2 === 0}
                    />
                )
            })}
        </section>
    )
}

export default Projects
