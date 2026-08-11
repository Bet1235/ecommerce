import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart, decrementQuantity, incrementQuantity, selectItemQuantity } from "../../features/cart/cartSlice";
import type { Product } from "../../types/product";
import { formatPrice, getDiscountedPrice } from "../../utils/price";
import QuantityStepper from "../QuantityStepper/QuantityStepper";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({product} : ProductCardProps)=> {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(selectItemQuantity(product.id));
  const hasDiscount =  product.discountPercentage > 0;
  const discountedPrice = getDiscountedPrice(product.price, product.discountPercentage);
  const outOfStock = product.stock === 0;

  return (
    <article className="product-card">
      <div className="product-card_image-wrap">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-card_image"
        loading="lazy"/>
        {hasDiscount && (
          <span className="product-card_badge">-{Math.round(product.discountPercentage)}%</span>
        )}
        {outOfStock && <span className="product-card_stock-badge">Out of Stock</span>}
        </div>
      <div className="product-card_body">
        <p className="product-card_category">{product.category}</p>
        <h3 className="product-card_title">{product.title}</h3>

        <div className="product-card_price-row">
          <span className="product-card_price">{formatPrice(discountedPrice)}</span>
          {hasDiscount && <span className="product-card_price-original">{formatPrice(product.price)}</span>}
        </div>

        <div className="product-card_rating" aria-label={`Rating: €{product.rating} out of 5`}>
          * {product.rating.toFixed(1)}
        </div>

        <div className="product-card_action">
          {quantity === 0 ? (
            <button type="button"
            className="product-card_add-btn"
            onClick={() => dispatch(addToCart({product}))}
            disabled={outOfStock}>
              {outOfStock ? "Unavailable" : "Add to Cart"}
            </button>
          ) : (
            <QuantityStepper
            quantity={quantity}
            max={product.stock}
            onIncrement={() => dispatch(incrementQuantity(product.id))}
            onDecrement={() => dispatch(decrementQuantity(product.id))}/>
          )}
        </div>
      </div>
    </article>
  );
};
export default ProductCard;