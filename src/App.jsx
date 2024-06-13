
import './App.css'
import GaleriaPersonaje from './assets/Components/GaleriaPersonaje'
import Navbar from './assets/Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='container-fluid py-5'>
        <GaleriaPersonaje />
      </div>
    </>
  )
}

export default App
