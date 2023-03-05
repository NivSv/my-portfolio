import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'

const AboutMe = () => {
    return (
        <section id="about" className="mt-44">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <h1 className="text-secondary text-4xl sm:text-7xl inline font-bold">
                    About Me.
                </h1>
            </motion.div>
        </section>
    )
}

export default AboutMe
