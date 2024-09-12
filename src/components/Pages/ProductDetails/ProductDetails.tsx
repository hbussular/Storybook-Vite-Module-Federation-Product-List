import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../../interfaces/global";
import './styles.css';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state as Product; 

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back to Home
      </button>

      <div className="product-card">
        <h1 className="product-title">{product.title}</h1>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Availability:</strong> {product.availabilityStatus}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
