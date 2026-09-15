import { useCallback, useEffect, useRef, useState } from "react";

interface DAtaResponse {
  id: number;
  download_url: string;
}

function InfiniteScroll_2() {
  const [data, setData] = useState<DAtaResponse[]>([]);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);

  const loaderREf = useRef<HTMLDivElement | null>(null);

  const getdata = async (
    pageNumber: number
  ): Promise<DAtaResponse[]> => {
    try {
      setLoading(true);

      const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: DAtaResponse[] = await response.json();

      return result;
    } catch (error) {
      console.error("API Error:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const loadMore = useCallback(async () => {
    if (loading) return;

    const result = await getdata(page);

    setData((prevData) => [...prevData, ...result]);

    setPage((prevPage) => prevPage + 1);
  }, [page, loading]);

  // First page
  useEffect(() => {
    const loadFirstPage = async () => {
      const result = await getdata(1);

      setData(result);
      setPage(2);
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

    const loader = loaderREf.current;

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
    <div className="min-vh-100 bg-light py-5">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
            React + TypeScript
          </span>

          <h1 className="fw-bold display-5">
            Infinite Scroll
          </h1>

          <p className="text-secondary mb-3">
            Scroll down to automatically load more images
          </p>

          <div className="d-inline-flex align-items-center gap-2 bg-white shadow-sm rounded-pill px-4 py-2">
            <span className="text-secondary">
              Current Page
            </span>

            <span className="badge bg-dark rounded-pill">
              {page}
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="row g-4">
          {data.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={item.id}
            >
              <div className="card border-0 shadow-sm h-100 overflow-hidden">

                <img
                  src={item.download_url}
                  alt={`Image ${item.id}`}
                  className="card-img-top"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">
                      Image
                    </span>

                    <span className="badge bg-light text-dark border">
                      #{item.id}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Loading / Observer */}
        <div
          ref={loaderREf}
          className="text-center py-5"
        >
          {loading ? (
            <>
              <div
                className="spinner-border text-primary mb-3"
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>

              <p className="text-secondary mb-0">
                Loading more images...
              </p>
            </>
          ) : (
            <div className="text-secondary">
              <div className="fs-4 mb-2">↓</div>

              <p className="mb-0">
                Keep scrolling for more
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default InfiniteScroll_2;