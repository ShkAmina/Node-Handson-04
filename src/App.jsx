
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
    return (
        <div>
            <BrowserRouter>
            <Link to='/'></Link>
            <Link to='/register'></Link>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App