import './Pagination.scss'


export default function Pagination ({ current, onChange, totalPages = 1 }) {
  const pages = [...Array(totalPages).keys()].map(i => i + 1)

  return (
    <nav className="pager">
      <ul className="pager__list">
        {pages.map(p => (
          <li
            key={p}
            className={`pager__item ${p === current ? 'pager__item--active' : ''}`}
            onClick={() => onChange(p)}
          >
            {p}
          </li>
        ))}
        <li className="pager__item pager__item--next" onClick={() => onChange(Math.min(current + 1, totalPages))}>
          Siguiente &gt;
        </li>
      </ul>
    </nav>
  )
}
