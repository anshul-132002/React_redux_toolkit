
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import  Navbar  from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/product" element={<Products></Products>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
