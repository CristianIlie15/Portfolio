import React from 'react'
import keyboard from './Filler/keyboard.webp'

function Filler() {
  return (
    <div
      className="w-full min-h-[160px] md:min-h-[290px] lg:min-h-[360px] relative overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${keyboard})` }}
    >
    </div>
  )
}

export default Filler
