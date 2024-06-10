import React from 'react'
import cyberMouflons from '../assets/cybermouflons.png'
import gt from '../assets/gt.svg'

function Footer() {
  return (
    <div className="bg-slate-900 text-white w-full min-h-[28px] flex flex-col justify-center items-center">
        <h5 className="text-3xl md:text-4xl marker:text-center my-20 neon-text-pink">Organisers</h5>
        <div className="flex items-center justify-center flex-wrap lg:gap-60">
        <div className="flex items-center my-4">
          <img src={cyberMouflons} className="h-[80px]" alt="cybermouflons-logo"/>
          <p className="md:text-3xl text-2xl ml-3">CyberMouflons</p>
        </div>
          <img src={gt} className="w-[300px] my-4 ml-10" alt="gt-logo"/>
        </div>
        <p className="text-xs text-gray-700 my-10">Made with 🩵 by Koupepi</p>
    </div>
  )
}



export default Footer