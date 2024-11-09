import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser}=useAuthContext();
  return (
    <div className=' p-4 h-screen flex justify-center items-center '>
     <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <LoginPage /> } />
      <Route path='/signup' element={authUser ? <Navigate to='/' />  : <SignUpPage />} />
     </Routes>
     <Toaster />
    </div>
  )
}

export default App