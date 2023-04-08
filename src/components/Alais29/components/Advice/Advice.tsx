import Card from '../Card/Card'
import CardButton from '../CardButton/CardButton'
import style from './Advice.module.css'

interface IAdvice {
  advice: { id: string, advice: string }
  onBtnClick: () => void
  isLoading: boolean
}

const Advice = ({ advice, onBtnClick, isLoading}: IAdvice) => {
  return (
    <Card>
      <h1 className={style['advice-id']}>Advice #{advice.id}</h1>
      <div className={style['advice-divider']} />
      <p className={style['advice-quote']}>&quot;{advice.advice}&quot;</p>
      <CardButton onClick={onBtnClick} disabled={isLoading} />
    </Card>
  )
}

export default Advice