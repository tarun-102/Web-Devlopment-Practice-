import { useEffect, useState } from "react";
import "./App.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  liit: number;
}

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        setLoading(false);
        throw new Error("data not fetch");
      }
      const data: ProductResponse = await response.json();

      setProduct(data.products);
    } catch (error) {
      if (error) {
        setLoading(true);
        return setError("something went wrong");
      }
    }finally {
  setLoading(false);
}
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <h1>{error}</h1>;
  return (
    <>
      {product.map((item) => (
        <div className="card" key={item.id}>
          <div className="card__shine"></div>
          <div className="card__glow"></div>
          <div className="card__content">
            <div className="card__badge">NEW</div>
            <div className="card__image">
              <img src={item.thumbnail} height={"75px"} alt="" />
            </div>
            <div className="card__text">
              <p className="card__title">{item.title}</p>
              <p className="card__description">
                Hover to reveal stunning effects
              </p>
            </div>
            <div className="card__footer">
              <div className="card__price">{item.price}</div>
              <div className="card__button"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
