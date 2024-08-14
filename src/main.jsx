import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import Herosection from './components/Herosection';
import Root from './root/Root';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Root/>
  </StrictMode>,
)
