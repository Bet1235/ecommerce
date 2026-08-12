import { useState } from "react";
import { useGetProductsQuery } from "../../../features/products/productsApi";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./Bestseller.css";

const INITIAL_LIMIT = 8;
const MORE_LIMIT = 20;

const Bestsellers = () => {
  const [showMore, setShowMore] = useState(false);

  const { data, isLoading, isError, refetch } = useGetProductsQuery({
    limit: showMore ? MORE_LIMIT : INITIAL_LIMIT,
    skip: 0,
  });

  const products = data?.products ?? [];

  return (
    <section className="bestsellers" id="products">
      <div className="container">
        <div className="bestsellers__header">
          <p className="bestsellers__eyebrow">
            Featured Products
          </p>

          <h2>Bestsellers</h2>

          <p className="bestsellers__description">
            Discover our most popular products.
          </p>
        </div>

        {isLoading && (
          <div className="bestsellers__state">
            <p>Loading products...</p>
          </div>
        )}

        {isError && (
          <div className="bestsellers__state">
            <p>Unable to load products.</p>

            <button
              type="button"
              onClick={refetch}
              className="bestsellers__retry"
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <div className="bestsellers__grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {!showMore && (
              <div className="bestsellers__action">
                <button
                  type="button"
                  className="bestsellers__view-more"
                  onClick={() => setShowMore(true)}
                >
                  View More Products
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Bestsellers;