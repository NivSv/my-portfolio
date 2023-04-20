import SocialMediaBar from './components/SocialMediaBar'
import EmailBar from './components/EmailBar'
import NavBar from './components/NavBar'
import Home from './pages/Home/Home'
import { Footer } from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="font-Assistant">
            <NavBar />
            <SocialMediaBar />
            <EmailBar />
            <Home />
            <Footer />
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default App
