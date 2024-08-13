import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Button/> */}
<Header/>
  </StrictMode>,
)
