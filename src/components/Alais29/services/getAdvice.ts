import { IAdvice } from "../interfaces"

export const getAdvice = async (): Promise<IAdvice> => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const json = await response.json()
    return json.slip
  } catch (error) {
    throw new Error(error)
  }
}