import { textVariant } from '../../utils/motion'
import { motion } from 'framer-motion'
import { experiences, IExperience } from '../../data/experiences.constant'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

interface IExperienceCardProps {
    experience: IExperience
}

const ExperienceCard = (props: IExperienceCardProps) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#112240',
                color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date={props.experience.date}
            iconStyle={{ background: props.experience.iconBgColor }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={props.experience.icon}
                        alt={props.experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {props.experience.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {props.experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {props.experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <section id="experience" className="container mt-44 mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={textVariant(null)}
                className="flex flex-col gap-2 items-center"
            >
                <p className="text-primary text-3xl uppercase">
                    What i have done so far
                </p>
                <h1 className="text-secondary text-4xl sm:text-7xl font-bold">
                    Work Experience.
                </h1>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experience
