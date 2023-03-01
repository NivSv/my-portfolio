import Button from '../Button'

const Welcome = () => {
    return (
        <section className="mt-32 ">
            <p className="text-callToAction mb-2">Hi, my name is</p>
            <p className="text-secondary text-6xl mb-2">Niv Shtibel.</p>
            <p className="text-primary text-6xl mb-2">
                I build things for the web.
            </p>
            <div className="text-primary break-words w-[600px] mb-6">
                I’m a full-stack developer specializing in the backend.
                Currently, I’m focused on building shopify apps, web products at{' '}
                <a
                    href="https://oversight.co.il/"
                    className="inline text-callToAction hover:"
                >
                    Oversight
                </a>
                .
            </div>
            <Button className="w-36 h-12">Get in touch</Button>
        </section>
    )
}

export default Welcome
