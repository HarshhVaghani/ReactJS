function Pagination({ currentPage, totalPages, onPageChange }) {
  const goTo = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // Build page number buttons, always show first, last, and neighbours of current
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="page-btn nav-btn"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo; Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? "page-active" : ""}`}
          onClick={() => goTo(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="page-btn nav-btn"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &rsaquo;
      </button>
    </div>
  );
}

export default Pagination;
