export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary"
      >
        Prev
      </button>

      <span className="fw-semibold">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}
