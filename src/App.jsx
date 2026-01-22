import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Credits } from './pages';

const App = () => {
    return (
        <main className='bg-transparent'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App