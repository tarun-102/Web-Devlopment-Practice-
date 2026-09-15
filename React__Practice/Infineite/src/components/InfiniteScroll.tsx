import { useCallback, useEffect, useRef, useState } from "react";
import { RotateLoader } from "react-spinners";

interface DataResponse {
  id: number;
  download_url: string;
}

function InfiniteScroll() {
  const [data, setData] = useState<DataResponse[]>([]);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  // API function
  const getData = async (pageNumber: number): Promise<DataResponse[]> => {
    try {
      const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: DataResponse[] = await response.json();

      return result;
    } catch (error) {
      console.error("API Error:", error);
      return [];
    }
  };

  // Load more data
  const loadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    const newData = await getData(page);

    setData((prevData) => [...prevData, ...newData]);

    setPage((prevPage) => prevPage + 1);

    setLoading(false);
  }, [page, loading]);

  // First page
  useEffect(() => {
    const loadFirstPage = async () => {
      setLoading(true);

      const firstPageData = await getData(1);

      setData(firstPageData);

      setLoading(false);
    };

    loadFirstPage();
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const loader = loaderRef.current;

    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, [loadMore]);

  return (
    <div className="images">
      {data.map((current) => (
        <div key={current.id}>
          <img
            src={current.download_url}
            alt={`Image ${current.id}`}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}

      {/* Loader */}
      <div
        ref={loaderRef}
        style={{
          textAlign: "center",
          padding: "30px",
        }}
      >
        {loading && (
          <RotateLoader
            loading={true}
            color="blue"
            size={15}
            cssOverride={{
              margin: "20px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default InfiniteScroll;