import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../fetures/pagination/paginationSlice";

function Pagination() {
  const dispatch = useDispatch();

  const { currentPage, productsPerPage } = useSelector(
    (state) => state.pagination
  );

  const { products } = useSelector(
    (state) => state.products
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-5 flex-wrap">
      {pages.map((page) => (
        <button
          key={page}
          className={
            page === currentPage
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;