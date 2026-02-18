import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './assets/pages/home'
function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}
export default App
