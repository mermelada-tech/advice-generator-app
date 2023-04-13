import React from 'react'
import style from './Card.module.css'

interface ICard {
  children: React.ReactNode
}

const Card = ({ children }: ICard) => {
  return (
    <section className={style['card-container']}>
      {children}
    </section> 
  )
}

export default Card