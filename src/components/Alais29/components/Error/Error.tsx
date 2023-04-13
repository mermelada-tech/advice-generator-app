import Card from '../Card/Card'
import CardButton from '../CardButton/CardButton'
import style from './Error.module.css'

interface ICardButton {
  onBtnClick: () => void
  isLoading: boolean
  text: string
}

const Error = ({ onBtnClick, isLoading, text }: ICardButton) => {
  return (
    <Card>
      <h1 className={style['error-message']}>{text}</h1>
      <CardButton onClick={onBtnClick} disabled={isLoading} />
    </Card>
  )
}

export default Error