import AboutMe from './AboutMe'
import Contact from './Contact'
import Experience from './Experience'
import Hero from './Hero'
import Projects from './Projects'
import Technologies from './Technologies'

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
