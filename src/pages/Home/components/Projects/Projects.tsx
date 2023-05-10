import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../../../utils/motion'
import { IProject, ProjectsData } from '../../../../data/projects.constant'
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai'

interface IMainProjectProps {
    project: IProject
    key: number
    leftSide: boolean
}

const MainProject = ({ project, key, leftSide }: IMainProjectProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn({
                delay: 0.2 * key,
                direction: leftSide ? 'left' : 'right',
                duration: 0.5,
                type: 'spring',
            })}
            key={`project-${key}`}
            className="flex flex-col md:flex-row gap-10 justify-center mt-28"
        >
            <div className="flex flex-col items-center gap-2">
                <p className="text-md text-callToAction">Featured Project</p>
                <p className="text-3xl text-primaryLight font-bold">
                    {project.title}
                </p>
                <div className="text-primary border-solid bg-[#233554] p-2 border-[#233554] w-[400px] text-center rounded-md border-4 shadow-lg">
                    {project.description}
                </div>
                <div className="flex gap-2 flex-wrap text-primary max-w-sm">
                    {project.technologies.map((technology, index) => (
                        <p key={index}>{technology}</p>
                    ))}
                </div>
                <div className="flex">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            title="Demo Link"
                        >
                            <AiOutlineLink
                                size={40}
                                className="fill-primaryLight hover:translate-y-[-4px] transition-all duration-400 hover:fill-callToAction"
                            />
                        </a>
                    )}
                    {project.github && (
                        <a
                            className="hover:"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            title="Demo Link"
                        >
                            <AiOutlineGithub
                                size={40}
                                className="fill-primaryLight hover:translate-y-[-4px] transition-all duration-400 hover:fill-callToAction"
                            />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section
            id="projects"
            className="container mt-44 mx-auto overflow-hidden"
        >
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
