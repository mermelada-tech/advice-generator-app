import './fonts.css'
import style from './AdviceGenerator.module.css'
import Loader from './components/Loader/Loader'
import { useGetAdvice } from './hooks/useGetAdvice'
import Error from './components/Error/Error'
import Advice from './components/Advice/Advice'

const AdviceGenerator = () => {
  const {isLoading, error, advice, getNewAdvice} = useGetAdvice()

  return (
    <main className={style['main-container']}>
      {error &&
        <Error
          onBtnClick={getNewAdvice}
          isLoading={isLoading}
          text='There was an error getting the advice, please try again'
        />}
      {isLoading && !advice && <Loader />}
      {advice &&
        <Advice
          advice={advice}
          onBtnClick={getNewAdvice}
          isLoading={isLoading}
        />}
    </main>
  )
}

export default AdviceGenerator