import { useState } from 'react'
import './styles/style.css'

const GeneradorColor = () => {
  const [color, setColor] = useState('#000')
  const [manejoSetInterval, setManejoSetInterval] = useState(0)

  const getColor = () => Math.floor(Math.random() * 256)

  const getHex = (red, green, blue) => {
    return (
      '#' +
      [red, green, blue]
        .map((c) => {
          const hex = c.toString(16)
          return hex.length === 1 ? '0' + hex : hex
        })
        .join('')
    )
  }

  const generadorHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor()
    }
    return setColor(getHex(rgb.r, rgb.g, rgb.b))
  }

  const mouseIn = () => {
    return setManejoSetInterval(setInterval(generadorHex, 500))
  }

  const mouseOut = () => {
    return clearInterval(manejoSetInterval)
  }

  return (
    <div>
      <div
        className='gianina-gen-color'
        style={{ backgroundColor: color }}
        onMouseOver={mouseIn}
        onMouseLeave={mouseOut}
      ></div>
      <p className='gianina-color-p'>Color: {color}</p>
    </div>
  )
}

export default GeneradorColor
