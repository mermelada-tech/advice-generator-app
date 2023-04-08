import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={style['lds-ellipsis']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Loader