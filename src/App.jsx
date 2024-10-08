import React from 'react'
import Register from './pages/Register'
import "./style.scss"
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import ChatFetcher from './components/ChatFetcher'
import SelfAnalyzation from './components/SelfAnalyzation'

const App = () => {
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='chatfetcher' element={<ChatFetcher />} />
          <Route path='selfAnalization' element={<SelfAnalyzation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App