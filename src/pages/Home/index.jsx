import React from 'react'
import './style.css'
import { DefaultGallery } from '../../components/Gallery'

export default function Home() {
  return (
      <div className="container mx-auto">
        <div className='slogan-container flex justify-center my-3'>
        <div className='lilita-one-regular text-[2rem]  text-[#D48C70] drop-shadow-md hover:text-[#F08C70] duration-200 ease-in-out'>For the dog lovers and for all the doggies and puppies we adore!</div>
        </div>
        <div className='feed-container flex justify-center mt-5'>
        {/* <img src="public/doggiedog.png" alt="" width="50%"/> */}
        <DefaultGallery/>
        </div>

    </div>
  )
}
