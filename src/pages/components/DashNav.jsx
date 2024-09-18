import React from 'react'
import Navbar from '../../components/Navbar'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'

function DashNav() {
  return (
    <>
      <header className=' bg-black w-full px-20 md:backdrop-blur-[5px]'>
        <nav className='flex relative justify-between items-center px-6 py-3'>
          <div>
            <Link to="/"><img src={logo} width={30} height={300} alt="" /></Link>
          </div>
          <div>
            <ul className='flex gap-10  text-white text-[1.2rem]'>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/products">
                <li>Products</li>
              </Link>
              <li>Orders</li>
              <Link to="/discounts">
                <li>Discounts</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

    </>
  )
}

export default DashNav