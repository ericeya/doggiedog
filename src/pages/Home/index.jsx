import { useState, useEffect } from 'react'
import './style.css'
import { DefaultGallery } from '../../components/Gallery'
import API from '../../utils/API'

export default function Home({imageList}) {
  console.log(imageList)

  return (
      <div className="container mx-auto">
        <div className='slogan-container flex justify-center my-3'>
        <div className='lilita-one-regular text-[2rem]  text-[#D48C70] drop-shadow-md hover:text-[#F08C70] duration-200 ease-in-out'>For the dog lovers and for all the doggies and puppies we adore!</div>
        </div>
        <div className='feed-container flex justify-center mt-5'>
          {/* <DefaultGallery imageList={imageList}/> */}
        {imageList ? (
          <>
          <DefaultGallery imageList={imageList}/>

        </>): 
        (<>
          <p>Loading ...</p>
        </>)}
        </div>

    </div>
  )
}
