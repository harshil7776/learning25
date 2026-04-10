import { useEffect, useState } from 'react'
// import './App.css'
// import "./assets/CSS/formtask1.css"
import { Bounce, ToastContainer, Zoom } from 'react-toastify'
import { ThemeContext} from './Components/ThemeContext'
import AppRoutes from './router/AppRoutes'

function App() {

  const [theme, settheme] = useState(()=>{
    return localStorage.getItem("theme")  || "light"
  });

  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])

  return (
    <div style={{ backgroundColor: theme == "light" ? "white" : "black", color: theme == "light" ? "black" : "white" }}>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />

        <AppRoutes></AppRoutes>
        
      </ThemeContext.Provider>
    </div>
  )
}
export default App