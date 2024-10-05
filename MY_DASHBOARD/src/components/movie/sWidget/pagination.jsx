import { useState, useEffect } from "react";

function Pagination() {
  const [page, setPage] = useState(1);

  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-1 m-1 text-center btn-primary"
        onClick={Previous}
      >
        Previous
      </button>
      <button className="px-3 py-1 m-1 text-center btn-primary" onClick={Next}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
