import { motion } from 'framer-motion'
import { slideIn } from '../../../../utils/motion'
import RobotCanvas from '../../../../components/RobotCanvas'
import StarsCanvas from '../../../../components/StarsCanvas'
import ContactForm from './components/ContactForm'

const Contact = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    return (
        <div className="relative z-0">
            <section
                id="contact"
                className="container mt-44 mx-auto flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
            >
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={slideIn({
                        direction: 'left',
                        type: 'tween',
                        delay: 0.2,
                        duration: 1,
                    })}
                    className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                >
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-6">
                        Contact me
                    </p>
                    <ContactForm />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={slideIn({
                        direction: 'right',
                        type: 'tween',
                        delay: 0.2,
                        duration: 1,
                    })}
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                >
                    <RobotCanvas />
                </motion.div>
            </section>
            <StarsCanvas />
        </div>
    )
}

export default Contact
