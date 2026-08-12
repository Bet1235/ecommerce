import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart, decrementQuantity, incrementQuantity, selectItemQuantity } from "../../features/cart/cartSlice";
import type { Product } from "../../types/product";
import { formatPrice, getDiscountedPrice } from "../../utils/price";
import QuantityStepper from "../QuantityStepper/QuantityStepper";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(
    selectItemQuantity(product.id)
  );

  const discountedPrice = getDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">
          {product.category}
        </span>

        <h3 className="product-card__title">
          {product.title}
        </h3>

        <div className="product-card__rating">
          <span aria-hidden="true">★</span>
          <span>{product.rating.toFixed(1)}</span>
        </div>

        <p className="product-card__price">
          {formatPrice(discountedPrice)}
        </p>

        {quantity === 0 ? (
          <button
            type="button"
            className="product-card__button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Unavailable" : "Add to cart"}
          </button>
        ) : (
          <QuantityStepper
            quantity={quantity}
            max={product.stock}
            onIncrement={() =>
              dispatch(incrementQuantity(product.id))
            }
            onDecrement={() =>
              dispatch(decrementQuantity(product.id))
            }
          />
        )}
      </div>
    </article>
  );
};
export default ProductCard;