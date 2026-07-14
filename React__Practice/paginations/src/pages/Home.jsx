import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../fetures/products/productSlice";

import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

function Home() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const { currentPage, productsPerPage } = useSelector(
    (state) => state.pagination,
  );
  const lastIndex = currentPage * productsPerPage;
  const firstpaage = lastIndex - productsPerPage;

  const currentProduct = products.slice(firstpaage, lastIndex);
  const totalpages = Math.ceil(products.length / productsPerPage);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center mt-5"> {error} </h1>;
  }

  console.log(products);
  console.log(currentProduct);
  console.log(totalpages);
  return (
    <div className="container mt-5">
      <div className="row">
        {currentProduct.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6  mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
