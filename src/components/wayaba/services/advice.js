const API_URL = 'https://api.adviceslip.com/advice'
export const getAdvice = async () => {
  const response = await fetch(API_URL, {
    method: 'GET'
  })
  const resp = await response.json()
  return resp.slip.advice
}
