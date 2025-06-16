import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchResultsPage from './pages/SearchResultsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<SearchResultsPage />} />
      <Route path="/items/:id" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
