import React, { useState } from 'react'
import { getAdvice } from '../util/getAdvice'
import '../styles/main.css'

export const AdviceGenerator = ({ advice }) => {
  const [response, setResponse] = useState(advice)

  const onClickButton = async () => {
    const response = await getAdvice()
    setResponse(response)
  }

  return (
        <div className='nujovich-advice-container'>
            <label className='nujovich-label'>{response}</label>
            <button className='nujovich-buton' onClick={() => onClickButton()}>Get advice</button>
        </div>
  )
}