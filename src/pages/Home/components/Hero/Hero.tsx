import ComputerCanvas from '../../../../components/ComputerCanvas'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="Hero" className="relative h-screen">
            <div
                className={`absolute inset-0 top-[23%]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 md:top-[250px]`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-callToAction" />
                    <div className="w-1 sm:h-80 h-40 hero-gradient" />
                </div>

                <div>
                    <h1
                        className={`font-black text-secondary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
                    >
                        Hi, I&apos;m{' '}
                        <span className="text-callToAction">Niv</span>
                    </h1>
                    <p
                        className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mt-2 text-white-100`}
                    >
                        I’m a full-stack developer.
                        <br />
                        specializing in the Node, React and .Net.
                    </p>
                </div>
            </div>
            {/* <div className="flex items-start justify-center p-0 flex-col mx-[150px]">
                <p className="text-callToAction mb-2">Hi, my name is</p>
                <p className="text-secondary text-6xl mb-2">Niv Shtibel.</p>
                <p className="text-primary text-6xl mb-2">
                    I build things for the web.
                </p>
                <div className="text-primary max-w-[540px] mb-6">
                    I’m a full-stack developer specializing in the backend.
                    Currently, I’m focused on building shopify apps, web
                    products at{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://oversight.co.il/"
                        className="inline text-callToAction hover:"
                    >
                        Oversight
                    </a>
                    .
                </div>
                <Button className="w-36 h-12">Get in touch</Button>
            </div> */}
            <ComputerCanvas />
            <div className="absolute bottom-[10%] md:bottom-[10%] w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
