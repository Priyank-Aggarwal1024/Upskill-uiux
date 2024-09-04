import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'

function App() {

  return (
    <>
      <div className="upskill-uiux">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
