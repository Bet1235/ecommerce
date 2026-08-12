import { useMemo, useState } from "react";
import EmptyState from "../../components/EmptyState/EmptyState";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetCategoriesQuery, useGetProductsQuery, useSearchProductsQuery } from "../../features/products/productsApi";
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  const isSearching = search.trim().length > 0;
  const { data: allData, isLoading, isError} = useGetProductsQuery(
    {limit:100},
    {skip: isSearching},
  );
  const {data: searchData, isFetching : isSearchFetching} = useSearchProductsQuery(search, {
    skip: !isSearching,
  });
  const {data: categories} = useGetCategoriesQuery();

  const products = isSearching ? searchData?.products : allData?.products;
  const loading = isSearching ? isSearchFetching : isLoading;

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (category === 'all') return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero_inner">
          <p className="hero_eyebrow">New Arrivals</p>
          <h1 className="hero_title">Shop Luxury</h1>
          <p className="hero_subtitle">
            Choose from the cataloge and checkout your cart across the site.
          </p>
          <div className="hero_search">
            <input type="search"
            placeholder="Search Here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search Products"/>
          </div>
        </div>
      </section>
    
    <section className="container">
      {categories && categories.length > 0 && (
        <div className="filter-bar" role="tablist" aria-label="Filter by category">
          <button type="button"
          className={`filter-chip €{category === 'all' ? 'filter-chip--active' : ''}`}
          onClick={() => setCategory('all')}> All </button>
          {categories.map((c) => (
            <button key={c}
            type="button"
            className={`filter-chip ${category === c ? 'filter-chip--active' : ''}`}
            onClick={() => setCategory(c)} >
              {c.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="product-grid" aria-busy="true">
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="product-skeleton"></div>
          ))}
            </div>
      )}

      {isError && (
        <EmptyState
        title="Product not loading"
        message="Cannot Reach the Catalogue, Check your Connection"/>
      )}

      {!loading && !isError && filteredProducts.length === 0 && (
        <EmptyState
        title="No Product Found"
        message={isSearching ? `No match for "${search}". Try a different name.` : 'Product not in this category'}/>
      )}

      {!loading && !isError && filteredProducts.length > 0 && (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      )}
    </section>
    </div>
  );
};
export default Home;