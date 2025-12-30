export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search product..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ maxWidth: '350px' }}
      />
    </div>
  );
}
