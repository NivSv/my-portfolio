import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant } from '@/utils/motion'
import me from '@/assets/2.png'

const AboutMe = () => {
    return (
        <section id="about" className="mt-44 container mx-auto">
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
            <div className="flex flex-col items-center md:justify-center md:flex-row gap-24 mt-10 overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn({
                        direction: 'left',
                        type: 'spring',
                        delay: 0,
                        duration: 0.5,
                    })}
                    className="mx-3 md:w-[40%]"
                >
                    <p className="text-primary break-words text-lg md:text-2xl">
                        Senior Backend Engineer with 6 years of experience
                        specializing in high-performance architectures and web
                        security. A Magshimim National Cyber Program graduate
                        with a career-long focus on bridging the gap between
                        deep security research and scalable, production-grade
                        backend engineering.
                    </p>
                    <p className="text-primary break-words  text-lg md:text-2xl pt-4">
                        Currently a Security Backend Engineer at{' '}
                        <a
                            href="https://www.reflectiz.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-callToAction inline-block underline-link"
                        >
                            Reflectiz
                        </a>{' '}
                        , where I lead the development of core web-scanning
                        engines and heavy-load services using Node.js. I
                        specialize in the low-level mechanics of browser
                        internals (Chromium) and the engineering of resilient,
                        adversarial-resistant systems.
                    </p>

                    <div className="mt-8 space-y-4">
                        <h3 className="text-secondary text-2xl font-bold mb-4">
                            Core Expertise
                        </h3>

                        <div className="space-y-3">
                            <div>
                                <h4 className="text-secondary text-lg font-semibold mb-2">
                                    Languages
                                </h4>
                                <p className="text-primary text-base md:text-lg">
                                    <span className="font-bold">
                                        Node.js (Expert)
                                    </span>
                                    , TypeScript, Vanilla Javascript, Go, Rust,
                                    Python, C++ (Manual Memory
                                    Management/Pointers)
                                </p>
                            </div>

                            <div>
                                <h4 className="text-secondary text-lg font-semibold mb-2">
                                    Frameworks & Architecture
                                </h4>
                                <p className="text-primary text-base md:text-lg">
                                    NestJS, Pub/Sub (Kafka/RabbitMQ), Redis, ORM
                                    (Prisma), GraphQL, gRPC, Monorepo
                                    (Turborepo, Nx), ESLint
                                </p>
                            </div>

                            <div>
                                <h4 className="text-secondary text-lg font-semibold mb-2">
                                    DevOps & Cloud
                                </h4>
                                <p className="text-primary text-base md:text-lg">
                                    GCP, AWS, Kubernetes (K8s), Helm, Terraform,
                                    Docker, GitHub Actions, Jenkins, Cloudflare,
                                    Proxmox
                                </p>
                            </div>

                            <div>
                                <h4 className="text-secondary text-lg font-semibold mb-2">
                                    Databases
                                </h4>
                                <p className="text-primary text-base md:text-lg">
                                    SQL (MySQL, SQL Server), NoSQL (MongoDB,
                                    Elasticsearch)
                                </p>
                            </div>

                            <div>
                                <h4 className="text-secondary text-lg font-semibold mb-2">
                                    Security & Identity
                                </h4>
                                <p className="text-primary text-base md:text-lg">
                                    WireShark, Burp Suite, Kali Linux, NMap,
                                    SSL/TLS, Sysinternals, VPN
                                    (WireGuard/OpenVPN), SAML 2.0 (SP/IdP-Init),
                                    OAuth2, OIDC, JWT, WAF
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={slideIn({
                        direction: 'right',
                        type: 'spring',
                        delay: 0,
                        duration: 0.5,
                    })}
                    className="mb-4"
                >
                    <div className="w-[200px] md:w-[300px]">
                        <img src={me} alt="as"></img>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutMe
