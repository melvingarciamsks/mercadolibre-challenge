import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductDetail.scss';
import { formatPrice } from '../utils/formatPrice';

const ProductDetail = ({ product }) => {

  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(product.pictures[0]);
  const priceFormat = formatPrice(product.price.amount);

  const formatCondition = (pCondition) => {
    if (pCondition == 'new'){
        return 'Nuevo'
    }
    return pCondition
  }

  return (
    <>
        {/* Navegación superior */}
        <div className="top">
            <div className="top__breadcrumb">
            <button onClick={() => navigate(-1)} className="top__back">Volver al listado</button>
            <span className="top__categories">Electrónica &gt; Audio &gt; Auriculares</span>
            </div>
            <div className="top__pub-id">Publicación #{product.id}</div>
        </div>
        <div className="detail">
            {/* Contenido principal */}
            <div className="detail__body">
                {/* Galería de imágenes */}
                <div className="detail__gallery">
                    <div className="detail__thumbs">
                        {product.pictures.map((pic, i) => (
                            <img
                                key={i}
                                src={pic}
                                className={`detail__thumb ${pic === selectedImage ? 'detail__thumb--active' : ''}`}
                                onClick={() => setSelectedImage(pic)}
                                alt={`Miniatura ${i}`}
                            />
                        ))}
                    </div>
                    <div className="detail__main-image">
                        <img src={selectedImage} alt="Producto seleccionado" />
                    </div>
                </div>
                {/* Datos del producto */}
                <div className="detail__info">
                    <p className="detail__condition">{formatCondition(product.condition)} | {product.sold_quantity || 0}+ vendidos</p>
                    <h1 className="detail__title">{product.title}</h1>
                    <p className="detail__seller">Vendido por {product.seller}</p>
                    <p className="detail__price">{priceFormat}</p>
                    <p className="detail__installments">{product.installments}</p>
                    {product.free_shipping && <p className="detail__shipping">Envio Gratis</p>}
                    <p className="detail__color">Color: {product.color || 'No especificado'}</p>
                </div>
            </div>
            {/* Descripción del producto */}
            <div className="detail__description">
                <h2 className="detail__description__title" >Descripción</h2>
                <p className="detail__description__detail">{product.description}</p>
            </div>
        </div>
     </>
  );
};

export default ProductDetail;
