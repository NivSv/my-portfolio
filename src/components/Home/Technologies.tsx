import { motion } from 'framer-motion'
import { technologies } from '../../data/technologies.constant'
import { textVariant } from '../../utils/motion'
import BallCanvas from '../BallCanvas'

const Technologies = () => {
    return (
        <section id="technologies" className="container mt-44 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <h1 className="text-secondary text-7xl inline font-bold">
                    Technologies.
                </h1>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.image} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technologies
