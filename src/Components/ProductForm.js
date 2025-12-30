import { useEffect, useState } from "react";

const initialState = {
  name: "",
  price: "",
  category: "",
  stock: "",
  description: ""
};

export default function ProductForm({ onSave, editingProduct, onCancel, isModal = false }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
    else setForm(initialState);
  }, [editingProduct]);

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name required";
    if (!form.price) err.price = "Price required";
    if (!form.category) err.category = "Category required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock || 0)
    });

    setForm(initialState);
  };

  const formContent = (
    <form onSubmit={submit}>
      <div className="mb-4">
        <label className="form-label fw-semibold">Product Name *</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
        />
        {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="mb-4">
            <label className="form-label fw-semibold">Price (₹) *</label>
            <input
              type="number"
              placeholder="Enter price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            />
            {errors.price && <div className="invalid-feedback d-block">{errors.price}</div>}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-4">
            <label className="form-label fw-semibold">Category *</label>
            <input
              type="text"
              placeholder="Enter category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className={`form-control ${errors.category ? 'is-invalid' : ''}`}
            />
            {errors.category && <div className="invalid-feedback d-block">{errors.category}</div>}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">Stock Quantity</label>
        <input
          type="number"
          placeholder="Enter stock quantity"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
          className="form-control"
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-semibold">Description</label>
        <textarea
          placeholder="Enter product description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows="4"
          className="form-control"
        />
      </div>

      <div className="d-flex gap-3 pt-3">
        <button
          type="submit"
          className="btn btn-primary flex-grow-1"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
        {editingProduct && (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary flex-grow-1"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );

  // If used as modal, just return the form content
  if (isModal) {
    return formContent;
  }

  // Default standalone form
  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h2 className="card-title mb-4">
          {editingProduct ? "Edit Product" : "Add New Product"}
        </h2>
        {formContent}
      </div>
    </div>
  );
}
