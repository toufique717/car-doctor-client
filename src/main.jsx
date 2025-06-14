import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
   
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { EmailAuthProvider } from 'firebase/auth/web-extension';
import Authprovider from './provider/Authprovider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

         <Authprovider>
          <RouterProvider router={router} />
         </Authprovider>
      
  </StrictMode>,
)
