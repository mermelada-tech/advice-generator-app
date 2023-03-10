import React, { useEffect, useState } from 'react'
import { getAdvice } from '../services/advice'

export function useAdvice() {
  const [advice, setAdvice] = useState(null)
  const [loading, setLoading] = useState(true)

  const getNewAdvice = async () => {
    setLoading(true)
    const newAdvice = await getAdvice()
    setAdvice(newAdvice)
    setLoading(false)
  }

  useEffect(() => {
    getNewAdvice()
  }, [])

  return { loading, advice, getNewAdvice }
}
