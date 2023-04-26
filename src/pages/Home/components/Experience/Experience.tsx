import { textVariant } from '../../../../utils/motion'
import { motion } from 'framer-motion'
import { experiences, IExperience } from '../../../../data/experiences.constant'
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
                boxShadow: '0 10px 30px -10px rgb(2 12 27 / 70%)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #112240' }}
            date={props.experience.date}
            iconStyle={{
                background: props.experience.iconBgColor,
                // boxShadow:
                //     '0 0 0 4px #59E3C5, inset 0 2px 0 rgba(0, 0, 0, 0.08),0 3px 0 4px rgba(0, 0, 0, 0.05)',
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={props.experience.icon}
                        alt={props.experience.company_name}
                        className="w-[90%] h-[90%] object-contain"
                    />
                </div>
            }
            //     box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08),
            // 0 3px 0 4px rgba(0, 0, 0, 0.05);
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
                        className="text-secondary text-[14px] pl-1 tracking-wider"
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
        <section id="work" className="container mt-44 mx-auto">
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
                    {experiences
                        .slice(0)
                        .reverse()
                        .map((experience, index) => (
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
