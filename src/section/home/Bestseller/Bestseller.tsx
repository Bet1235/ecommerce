import { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import "./Bestsellers.css";

const INITIAL_PRODUCT_COUNT = 8;
const FULL_PRODUCT_COUNT = 20;

const Bestsellers = () => {
  const [showMore, setShowMore] = useState(false);

  const { data, isLoading, isError, refetch } =
    useGetProductsQuery({
      limit: showMore
        ? FULL_PRODUCT_COUNT
        : INITIAL_PRODUCT_COUNT,
    });

  if (isLoading) {
    return (
      <section className="bestsellers">
        <div className="container">
          <div className="bestsellers__heading">
            <p className="section-eyebrow">Featured Products</p>
            <h2>Bestsellers</h2>
          </div>

          <div className="product-grid product-grid--skeleton">
            {Array.from({ length: INITIAL_PRODUCT_COUNT }).map(
              (_, index) => (
                <div
                  className="product-skeleton"
                  key={index}
                />
              ),
            )}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bestsellers">
        <div className="container">
          <EmptyState
            title="Products unavailable"
            message="We couldn't load the products. Please try again."
          />

          <button
            type="button"
            className="bestsellers__retry"
            onClick={refetch}
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  const products = data?.products ?? [];

  return (
    <section className="bestsellers">
      <div className="container">
        <div className="bestsellers__heading">
          <p className="section-eyebrow">
            Featured Products
          </p>

          <h2>Bestsellers</h2>

          <p>
            Discover our most popular products.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No products found"
            message="There are no products available right now."
          />
        )}

        <div className="bestsellers__action">
          {!showMore && (
            <button
              type="button"
              className="bestsellers__view-more"
              onClick={() => setShowMore(true)}
            >
              View More Products
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;