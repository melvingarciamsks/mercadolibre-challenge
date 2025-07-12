import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import ProductDetail from '../components/ProductDetail'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  useDocumentTitle(product?.title)

  useEffect(() => {
    fetch(`http://localhost:4000/api/items/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data?.item))
  }, [id])

  if (!product) return <p>Cargando producto...</p>

//width={200}
  return (
    <>
        <SearchBar />
        <ProductDetail product={product} />
    </>
  )
}
