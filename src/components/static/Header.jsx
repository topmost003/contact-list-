
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around bg-[#61459C] text-white h-[50px] items-center font-bold '>
    
     <Link to= "/" className='hover:text-black  focus:text-amber-600'>Welcome</Link>
    <Link to = "contact"  className='hover:text-black  focus:text-amber-600'>Contact</Link>
    <Link to = "appreciation"  className='hover:text-black focus:text-amber-600'>Appreciation</Link>

      
    </div>


  )
}

export default Header
