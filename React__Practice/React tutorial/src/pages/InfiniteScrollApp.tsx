import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Product {
  id: number;
  title: string;
}

const InfiniteScrollApp = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`);
      const data = await response.json();
      
      if (data.products.length === 0) {
        setHasMore(false);
        return;
      }

      setItems((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center text-white mb-4">Infinite Scroll Project</h3>
      
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center text-white">Loading...</h4>}
        endMessage={<p className="text-center text-white">No more products!</p>}
      >
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card bg-dark text-white p-3 border-secondary">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollApp;