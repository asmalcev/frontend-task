import React from 'react'
import Closable from '../Closable/Closable'

import './Panel.css'

export default function Panel(props) {
  const { data } = props

  return (
    <div className="info-panel">
      <div>
        <h2>{data.title}</h2>
        <p className="grey-text">Адрес:</p>
        <p>{data.adress}</p>
        <p className="grey-text">Категория объекта:</p>
        <p>{data.category}</p>
        <Closable
          title="Квартиры"
          content={
            <p>
              <span className="grey-text">Количество:</span> {data.countOfApartaments}
              <br/>
              <button className="link-btn">Перейти</button>
            </p>
          }
        />
        <Closable
          title="Этажи"
          content={
            <p>
              <span className="grey-text">Количество:</span> {data.countOfFloors}
              <br/>
              <button className="link-btn">Перейти</button>
            </p>
          }
        />
      </div>
    </div>
  )
}