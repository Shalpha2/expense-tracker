export default function SearchBar({ search, setSearch }) {
    return (
      <div className="mb-3">

        <label htmlFor="searchbar" className="form-label">

        </label>
        <input
          type="text"
          className="form-control"
          id="searchbar"
          placeholder="Search by name, description , category"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    );
  }
  
  