import { motion } from 'framer-motion'
import { slideIn } from '../../utils/motion'
import EarthCanvas from '../EarthCanvas'
import { send } from '@emailjs/browser'
import { ChangeEvent, useRef, useState } from 'react'
import StarsCanvas from '../StarsCanvas'
import Button from '../Button'

const Contact = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const formRef = useRef<HTMLFormElement>(null!)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent) => {
        const { target } = e
        const { name, value } = target as HTMLInputElement

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        setLoading(true)

        send(
            'service_8wr47cj',
            'template_vx3y50z',
            {
                from_name: form.name,
                to_name: 'Niv Shtibel',
                from_email: form.email,
                to_email: 'sujata@jsmastery.pro',
                message: form.message,
            },
            '7AsLir4APmIG9WcFz'
        ).then(
            () => {
                setLoading(false)
                alert('Thank you. I will get back to you as soon as possible.')

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error: Error) => {
                setLoading(false)
                console.error(error)

                alert('Ahh, something went wrong. Please try again.')
            }
        )
    }

    return (
        <div className="relative z-0">
            <section
                id="technologies"
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
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Get in touch
                    </p>
                    <h3 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        Contact.
                    </h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <Button onClick={handleSubmit}>
                            {loading ? 'Sending...' : 'Send'}
                        </Button>
                    </form>
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
                    <EarthCanvas />
                </motion.div>
            </section>
        </div>
    )
}

export default Contact
