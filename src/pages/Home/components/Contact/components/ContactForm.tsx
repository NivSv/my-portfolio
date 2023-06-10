import tw from 'tailwind-styled-components'
import Button from '../../../../../components/Button/Button'
import socialMedias from '../../../../../data/social_medias'
import { ChangeEvent, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { send } from '@emailjs/browser'
import { z, ZodError } from 'zod'

const Form = tw.form`
    bg-[#233554]
    p-3
    w-[350px]
    md:w-[600px]
    flex
    flex-col
    border
    border-transparent
    rounded-3xl
    shadow-md
    gap-4
    text-white
    focus:outline-none
`

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ZodError | null>(null)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const submitFormSchema = z.object({
        name: z.string().min(2, {
            message: 'Name is too short must contain at least 2 character(s)',
        }),
        email: z.string().email({ message: 'Invalid email' }),
        message: z.string().min(10, {
            message:
                'Message is too short! must contain at least 10 character(s)',
        }),
    })

    const handleChange = (e: ChangeEvent) => {
        const { target } = e
        const { name, value } = target as HTMLInputElement
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        setError(null)
        setLoading(true)
        const result = submitFormSchema.safeParse(form)
        if (!result.success) {
            setError(result.error)
            setLoading(false)
            return
        }
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
                toast.success(
                    'Thank you. I will get back to you as soon as possible.'
                )
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error: Error) => {
                setLoading(false)
                toast.error('Ahh, something went wrong. Please try again.')
                console.error(error)
            }
        )
    }

    const openUrlBlank = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <Form>
            <label className="flex flex-col">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    placeholder="Name"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
            </label>
            <label className="flex flex-col">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    placeholder="Email"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
            </label>
            <label className="flex flex-col">
                <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    placeholder="Message"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
            </label>
            <div className="flex justify-between">
                <div className="flex gap-3 justify-center items-center">
                    {socialMedias.map((socialMedia, index) => (
                        <div
                            key={index}
                            onClick={() => openUrlBlank(socialMedia.url)}
                            onKeyDown={() => openUrlBlank(socialMedia.url)}
                            role="button"
                            tabIndex={index}
                            title={socialMedia.name}
                            className="group hover:translate-y-[-4px] transition-all duration-400"
                        >
                            {
                                <socialMedia.icon
                                    size={25}
                                    className="fill-primary group-hover:fill-callToAction"
                                />
                            }
                        </div>
                    ))}
                </div>
                <Button onClick={handleSubmit}>
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </div>
            {error && (
                <div className="text-red-600">{error.issues[0].message}</div>
            )}
        </Form>
    )
}
