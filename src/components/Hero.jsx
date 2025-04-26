import React from 'react'
import picture from "../assets/react.svg"

export const Hero = () => {
  return (
    <section className='flex gap-6 w-full justify-center items-center px-5 py-10'>
      <div className='flex flex-col gap-6'>
        <h2 className='subtitle'>Hi! I'm Alex Batistta</h2>
        <h1 className='title'>Frontend Developer</h1>
        <button className='button'>Download CV</button>
      </div>
      <img src={picture}></img>
    </section>
  )
}
