import React from 'react'
import './ResultCard.scss'
import { formatPrice } from '../utils/formatPrice';

const ResultCard = React.memo(function ResultCard ({ item, onClick }) {

  console.log(`Render: ${item.title}`)

  return (
    <article className="card" onClick={() => onClick(item.id)}>
      <img className="card__img" src={item.picture} alt={item.title} />

      <div className="card__info">
        <h2 className="card__title">{item.title}</h2>

        <span className="card__seller">Por {item.seller}</span>

        {item.price?.regular_amount && <p className="card__price-regular">{formatPrice(item.price?.regular_amount)}</p>}
        <p className="card__price">{formatPrice(item.price?.amount)}</p>

        {item.installments && (
          <p className="card__installments">
            {item.installments}
          </p>
        )}

        {item.free_shipping && <p className="card__shipping">Envío gratis</p>}
      </div>
    </article>
  )
})

export default ResultCard