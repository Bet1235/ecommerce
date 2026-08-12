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

  const isOutOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    dispatch(addToCart({ product }));
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        {product.discountPercentage > 0 && (
          <span className="product-card__badge">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
        <img
        className="product-card__image"
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

        <div className="product-card__rating"
        aria-label={`Rated ${product.rating} out of 5`}>
          <span aria-hidden="true">★</span>
          <span>{product.rating.toFixed(1)}</span>
        </div>

        <div className="product-card__prices">
          <span className="product-card__price">
            {formatPrice(discountedPrice)}
          </span>

          {product.discountPercentage > 0 && (
            <span className="product-card__old-price">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

    {isOutOfStock ? (
          <p className="product-card__stock product-card__stock--out">
            Out of stock
          </p>
        ) : quantity > 0 ? (
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
        ) : (
          <button
            type="button"
            className="product-card__button"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;   