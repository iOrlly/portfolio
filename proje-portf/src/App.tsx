import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './assets/pages/home'
import { Footer } from './assets/components/footer'
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
export default App
