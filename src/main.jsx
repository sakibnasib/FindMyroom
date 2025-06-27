import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="w-11/12 mx-auto ">
     <AuthProvider>
<RouterProvider router={router}/>
    </AuthProvider>
   
   </div>
  </StrictMode>,
)
