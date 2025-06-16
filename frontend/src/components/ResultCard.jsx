import { useNavigate } from 'react-router-dom'
import './ResultCard.scss'
import { formatPrice } from '../utils/formatPrice';

export default function ResultCard ({ item }) {
  const navigate = useNavigate()

  return (
    <article className="card" onClick={() => navigate(`/items/${item.id}`)}>
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
}
