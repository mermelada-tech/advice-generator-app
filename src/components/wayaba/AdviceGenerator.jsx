import React from 'react'
import { useAdvice } from './hooks/useAdvice'
import BackImag from './svg/BackImage'
import './AdviceGenerator.css'
import { Spinner } from './Spinner'

export function AdviceGenerator() {
  const { getNewAdvice, loading, advice } = useAdvice()

  return (
    <div className='wayaba-container'>
      <header>
        <h1 className='wayaba-title'>Advice Generator</h1>
        <BackImag />
      </header>
      <main className='wayaba-main'>
        <button
          disabled={loading}
          onClick={() => getNewAdvice()}
          className='wayaba-button'
        >
          Generate new Advice
        </button>

        <div className='wayaba-advice'>{loading ? <Spinner /> : advice}</div>
      </main>
    </div>
  )
}
