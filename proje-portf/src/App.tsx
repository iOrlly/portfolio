import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home.tsx'
import { Footer } from './componentsHome/footer/footer'
function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
          <Footer />
        </BrowserRouter>
    );
}

export default App;
