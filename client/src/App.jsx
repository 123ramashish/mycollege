import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Footer from './components/Footer'
import Header from './components/Header'
import Signup from './pages/Signup'
import Student from './pages/Student'
import Faculty from './pages/Faculty'
import Admin from './pages/Admin'
function App() {

  return (
    <>
     
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

 
    </>
  )
}

export default App
