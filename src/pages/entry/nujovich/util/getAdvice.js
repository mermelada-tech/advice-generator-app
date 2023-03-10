export const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice', { method: 'GET' })
  const resp = await response.json()
  return resp.slip.advice
}
