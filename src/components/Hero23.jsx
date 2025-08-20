import React from 'react'
import MainD from "./MainD"
import Hero3 from "./Hero3.jsx";
import { Link } from 'react-router-dom'
import { TourPage } from './Hero23.js';
export default function Hero23() {
  return (

    <div className='flex bg-gradient-to-r from-primary to-secondary'>
      <div className='w-[500px]  h-[700px] m-4  '>
        <MainD />
      </div>
      {TourPage.map((carddetail2) => (

        <div className='flex flex-col' key={carddetail2.id}>
          <div className='w-[900px] h-[300px]  mt-10 '>
          <div className='m-4'>
              <h1 className='text-7xl m-2  font- text-white-600'>{carddetail2.h1}</h1>
              <h1 className='text-8xl  m-2 font-extrabold text-orange-500'>{carddetail2.h2}</h1>
              <p className='text-xl  [color:#DDBF68] '>{carddetail2.p1}</p>

            </div>
          </div>
          <div className='flex '>
                 <Link to={"/hero3/" + carddetail2.id}>

            <div className=' m-4  rounded-md ' >
              <img className="w-96 h-60" src={carddetail2.img1}></img>
             

            </div>
            </Link>
              <Link to={"/hero3/" + carddetail2.id}>

            <div className='w-[80%] h-[80%] m-4 rounded-md '>
              <img className="w-96 h-60" src={carddetail2.img2}></img>

            </div> 
             </Link>
            <Link to={"/hero3/" + carddetail2.id}>
            <div className='w-[80%] h-[80%] m-4 rounded-md '>
              <img className="w-96 h-60" src={carddetail2.img3}></img>

            </div>
            </Link>
             <Link to={"/hero3/" + carddetail2.id}>


            <div className='w-[80%] h-[80%] m-4 rounded-md border'>
              <img className="w-96 h-60" src={carddetail2.img4}></img>

            </div>
            </Link>

          </div>

        </div>


      ))}


    </div>


  )
}
