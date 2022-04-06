import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { ToastContainer } from 'react-toastify'
import { Footer, Header } from './components'

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
