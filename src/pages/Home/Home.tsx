import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

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
