import { UserProvider } from "./context/UserContext";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PropertyProvider } from "./context/PropertyContext.jsx";

createRoot(document.getElementById('root')).render(
<PropertyProvider>
  <UserProvider>
    <App />
  </UserProvider>
</PropertyProvider>,

  // <StrictMode>
  //   <App />
  // </StrictMode>,
)







