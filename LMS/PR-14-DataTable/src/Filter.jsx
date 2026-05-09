function Filter({ cities, selected, onChange }) {
  return (
    <div className="filter-box">
      <label htmlFor="city-filter" className="filter-label">
        Filter by city
      </label>
      <select
        id="city-filter"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="filter-select"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
