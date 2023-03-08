import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'

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
        </section>
    )
}

export default Projects
