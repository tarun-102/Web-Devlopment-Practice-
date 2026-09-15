import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function Pagination2() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const productsPerPage = 8;

  const totalPages = 13;

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);

        const skip =
          (currentPage - 1) * productsPerPage;

        const response = await fetch(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: ApiResponse =
          await response.json();

        setProducts(data.products);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-vh-100 bg-white py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">

          <h2 className="fw-bold">
            Products
          </h2>

          <p className="text-secondary">
            Pagination with API
          </p>

        </div>

        
        {loading ? (
          <div className="text-center py-5">

            <div
              className="spinner-border text-primary"
              role="status"
            />

            <p className="text-secondary mt-2">
              Loading products...
            </p>

          </div>
        ) : (
          <>
            
            <div className="row g-4">

              {products.map((product) => (
                <div
                  className="col-12 col-sm-6 col-lg-3"
                  key={product.id}
                >
                  <div className="card h-100 shadow-sm">

                    
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "contain",
                        padding: "15px",
                      }}
                    />

                    
                    <div className="card-body">

                      <span className="badge bg-light text-dark border mb-2">
                        {product.category}
                      </span>

                      <h5 className="fw-bold">
                        {product.title}
                      </h5>

                      <p className="text-secondary small">
                        {product.description.slice(0, 70)}
                        ...
                      </p>

                      <h5 className="text-primary fw-bold">
                        ${product.price}
                      </h5>

                    </div>

                  </div>
                </div>
              ))}

            </div>

            
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5">

              <button
                className="btn btn-outline-secondary"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  className={`btn ${
                    currentPage === page
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    setCurrentPage(page)
                  }
                >
                  {page}
                </button>
              ))}

              <button
                className="btn btn-outline-secondary"
                onClick={nextPage}
                disabled={
                  currentPage === totalPages
                }
              >
                Next
              </button>

            </div>

          
            <p className="text-center text-muted mt-3">
              Page {currentPage} of {totalPages}
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Pagination2; 