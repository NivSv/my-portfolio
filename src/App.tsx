import SocialMediaBar from './components/SocialMediaBar'
import EmailBar from './components/EmailBar'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
    return (
        <div className="font-Assistant">
            <NavBar />
            <SocialMediaBar />
            <EmailBar />
            <Home />
        </div>
    )
}

export default App
