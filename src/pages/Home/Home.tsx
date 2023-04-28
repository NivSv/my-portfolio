import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
