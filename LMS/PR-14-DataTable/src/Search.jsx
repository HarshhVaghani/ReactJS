function Search({ value, onChange }) {
  return (
    <div className="search-box">
      <span className="search-icon">&#128269;</span>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      {value && (
        <button className="clear-btn" onClick={() => onChange("")}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Search;
