import { useState, useEffect } from "react";
import Table from "./Table.jsx";
import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import Pagination from "./Pagination.jsx";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCity, setFilterCity] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Step 1: filter by search (name or email)
  const afterSearch = allData.filter((user) => {
    const q = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q)
    );
  });

  // Step 2: filter by city
  const afterFilter =
    filterCity === "All"
      ? afterSearch
      : afterSearch.filter((user) => user.address.city === filterCity);

  // Step 3: sort by name
  const afterSort = [...afterFilter].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  // Step 4: paginate
  const totalPages = Math.ceil(afterSort.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const paginated = afterSort.slice(start, start + rowsPerPage);

  // Build unique city list for filter dropdown
  const cities = ["All", ...new Set(allData.map((u) => u.address.city))];

  // Reset to page 1 whenever filters change
  const handleSearch = (val) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handleFilter = (val) => {
    setFilterCity(val);
    setCurrentPage(1);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handleDelete = (id) => {
    setAllData((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">Student Records</h1>
          <p className="app-subtitle">Management Dashboard</p>
        </div>
      </header>

      <main className="app-main">
        <div className="controls-row">
          <Search value={search} onChange={handleSearch} />
          <Filter
            cities={cities}
            selected={filterCity}
            onChange={handleFilter}
          />
          <div className="sort-controls">
            <span className="sort-label">Sort by name</span>
            <button
              className={`sort-btn ${sortOrder === "asc" ? "active" : ""}`}
              onClick={() => handleSort("asc")}
            >
              A → Z
            </button>
            <button
              className={`sort-btn ${sortOrder === "desc" ? "active" : ""}`}
              onClick={() => handleSort("desc")}
            >
              Z → A
            </button>
          </div>
          <div className="rows-control">
            <label htmlFor="rows-select">Rows</label>
            <select
              id="rows-select"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loading-state">Loading records...</div>
        ) : (
          <>
            <Table
              data={paginated}
              onDelete={handleDelete}
            />
            <div className="footer-row">
              <span className="result-count">
                Showing {paginated.length} of {afterSort.length} results
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
