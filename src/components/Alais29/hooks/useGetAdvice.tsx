import { useCallback, useEffect, useState } from "react"
import { getAdvice } from "../services/getAdvice"
import { IAdvice } from "../interfaces"

export const useGetAdvice = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [advice, setAdvice] = useState<IAdvice | null>(null)
  
  const getNewAdvice = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await getAdvice()
      setAdvice(data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setAdvice(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getNewAdvice()
  }, [])

  return {
    isLoading,
    error,
    advice,
    getNewAdvice
  }
}