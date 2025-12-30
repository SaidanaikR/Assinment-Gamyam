import { useState } from "react";
import productsData from "../data/products.json";
import useDebounce from "../hooks/useDebounce";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";
import Pagination from "./Pagination";

export default function ProductList() {
  const [products, setProducts] = useState(productsData);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [editingProduct, setEditingProduct] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const saveProduct = (product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  return (
    <>
      {/* Modal Overlay */}
      {editingProduct && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Edit Product</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingProduct(null)}
                ></button>
              </div>
              <div className="modal-body">
                <ProductForm
                  onSave={saveProduct}
                  editingProduct={editingProduct}
                  onCancel={() => setEditingProduct(null)}
                  isModal={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Product Form */}
      <ProductForm
        onSave={saveProduct}
        editingProduct={null}
        onCancel={() => setEditingProduct(null)}
      />

      <SearchBar value={search} onChange={setSearch} />

      <div className="d-flex gap-3 mb-4">
        <button
          onClick={() => setView("table")}
          className={`btn ${
            view === "table"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
        >
          Table View
        </button>
        <button
          onClick={() => setView("card")}
          className={`btn ${
            view === "card"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
        >
          Card View
        </button>
      </div>

      {view === "table" ? (
        <ProductTable products={paginated} onEdit={setEditingProduct} />
      ) : (
        <ProductCard products={paginated} onEdit={setEditingProduct} />
      )}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
}
