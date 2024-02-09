
import { UilMapMarker,UilSearch } from '@iconscout/react-unicons'
const Inputs = () => {
  return (
    <div className=' flex flex-row justify-center my-6 p-2 '>
        
        <div className=' flex flex-row w-3/4 items-center justify-center space-x-4 p-2 ' >
           <input 
               type='text'
                placeholder='search for city...'
                className=' text-xl font-light p-2 w-full shadow-xl focus:outline-none  
                 capitalize placeholder:lowercase 
                    h-8   rounded-lg
                
                '
           
           />

        <UilSearch   size={25} className=" text-white cursor-pointer transition ease-out hover:scale-125"/>
          <UilMapMarker size={25} className=" text-white cursor-pointer transition ease-out hover:scale-125"/>

        
           
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        //   onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
        //   onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>



    </div>
  )
}

export default Inputs