import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './routes/index.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Route/>
</BrowserRouter>
)
