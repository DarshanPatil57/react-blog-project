
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/auth'
import {login,logout} from './Store/authSlice'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true)
  const dipatch = useDispatch()


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {

      if(userData){
        dipatch(login({userData}))
      }
      else{
        dipatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return !loading ? (
    <div className=' max-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/> 
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
