import style from './CardButton.module.css'

interface ICardButton {
  onClick: () => void
  disabled: boolean
  text?: string
}

const CardButton = ({onClick, disabled, text = 'Get Advice'}: ICardButton) => {
  return (
    <button
      type='button'
      className={style['card-btn']}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? 'Loading...' : text }
    </button>
  )
}

export default CardButton