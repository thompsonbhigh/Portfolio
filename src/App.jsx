import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Credits, About1, About2, About3, About4, About5 } from './pages';

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
                    <Route path="/about1" element={<About1 />} />
                    <Route path="/about2" element={<About2 />} />
                    <Route path="/about3" element={<About3 />} />
                    <Route path="/about4" element={<About4 />} />
                    <Route path="/about5" element={<About5 />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App