import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './SearchBar.scss'
import logo from '../assets/logo_large_25years@2x.png'
import iconSearch from '../assets/ic_Search@2x.png.png'
import WelcomeTooltip from './WelcomeTooltip'

export default function SearchBox({ initialValue = ''}) {
  const [query, setQuery] = useState(initialValue)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/items?search=${encodeURIComponent(query)}`)
  }

  return (
    <header className="searchbar">
      <div className="searchbar__container">
        
        <img src={logo} alt="MercadoLibre" className="searchbar__logo" />
        <form className="searchbar__form" onSubmit={handleSubmit}>

            <input
              className="searchbar__input"
              type="text"
              placeholder="Buscar productos, marcas y más…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />

            <button type="submit" className="searchbar__button">
              <img src={iconSearch} alt="Buscar" />
            </button>

        </form>
        {/* Tooltip fuera del botón, relativo al grupo */}
        <WelcomeTooltip />
      </div>
    </header>
  )
}
