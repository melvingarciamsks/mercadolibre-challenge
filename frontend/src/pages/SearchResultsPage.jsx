import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import ResultCard from '../components/ResultCard'
import Pagination from '../components/Pagination'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function SearchResultsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search).get('search') || ''
  const [items, setItems] = useState([])
  const [page,  setPage]  = useState(1)
  useDocumentTitle(query + ' | MercadoLibre')

  useEffect(() => {
    
    fetch(`http://localhost:4000/api/items?search=${query}&page=${page}&limit=10`)
      .then(res => res.json())
      .then(data => setItems(data || []))//.items
    
  }, [query, page])

  const handleItemClick = useCallback((id) => {
    navigate(`/items/${id}`)
  }, [navigate])

  return (
    <>
      <SearchBar initialValue={query} />
      <main className="results-page">
        {items?.items?.map(item => (
            <ResultCard key={item.id} item={item} onClick={handleItemClick} />
        ))}
      </main>

      <Pagination current={page} onChange={setPage} totalPages={items?.paging?.pages}  />
      
    </>
  )
}
