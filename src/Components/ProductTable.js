export default function ProductTable({ products, onEdit }) {
  return (
    <div className="table-responsive">
      {/* Desktop Table View */}
      <div className="d-none d-md-block">
        <table className="table table-hover table-striped">
          <thead className="table-primary">
            <tr>
              <th className="text-white fw-semibold">Name</th>
              <th className="text-white fw-semibold">Price</th>
              <th className="text-white fw-semibold">Category</th>
              <th className="text-white fw-semibold">Stock</th>
              <th className="text-white fw-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="fw-medium">{p.name}</td>
                <td className="fw-bold text-success">₹{p.price}</td>
                <td>
                  <span className="badge bg-purple text-white">
                    {p.category}
                  </span>
                </td>
                <td>
                  <span className={`badge ${
                    p.stock > 0 ? 'bg-success' : 'bg-danger'
                  }`}>
                    {p.stock}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => onEdit(p)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="d-md-none">
        <div className="row g-3">
          {products.map((p) => (
            <div key={p.id} className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title mb-0">{p.name}</h5>
                    <span className="text-success fw-bold fs-5">₹{p.price}</span>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-6">
                      <small className="text-muted d-block">Category</small>
                      <span className="badge bg-purple text-white">
                        {p.category}
                      </span>
                    </div>
                    <div className="col-6">
                      <small className="text-muted d-block">Stock</small>
                      <span className={`badge ${
                        p.stock > 0 ? 'bg-success' : 'bg-danger'
                      }`}>
                        {p.stock}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onEdit(p)}
                    className="btn btn-primary w-100"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
