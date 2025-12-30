export default function ProductCard({ products, onEdit }) {
  return (
    <div className="row g-4">
      {products.map((p) => (
        <div key={p.id} className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">
                <strong className="text-success">₹{p.price}</strong>
              </p>
              <p className="card-text text-muted mb-3">
                <span className="badge bg-purple text-white">
                  {p.category}
                </span>
              </p>
              <button
                onClick={() => onEdit(p)}
                className="btn btn-primary mt-auto"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
