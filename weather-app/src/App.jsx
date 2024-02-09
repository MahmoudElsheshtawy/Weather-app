
import './App.css'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Timeandlocation from './components/Timeandlocation'
import TopButton from './components/TopButton'
import Inputs from './components/inputs'
// import Search from './components/search/Search'
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
function App() {


  return (
    <div className='mx-auto max-w-screen-md mt-4 px32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 '>
     {/* <Search/> */}

    <TopButton/>
    <Inputs/>
    <Timeandlocation/>
    <TemperatureAndDetails/>

     {/* <UilReact/> */}
    </div>
  )
}

export default App
