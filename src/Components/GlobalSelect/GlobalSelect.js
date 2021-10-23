
import styles from "./dropdown.module.css";

function GlobalSelect({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  return (
    <div className={styles.select}>
      <select
        name="filter"
        value={filter}
        id="filter"
        onChange={handleFilterChange}
      >
        <option value="Year">Filter By Year</option>
        <option value = "Month"> Filter by Month </option>
        <option value="Order Date">Filter By Day</option>
        <option value="Product Name">Filter by Product Name</option>
        <option value="City">Filter by City</option>
        <option value="Category">Filter by Category</option>
        <option value="Country"> Filter by Country</option>
      </select>
    </div>
  );
}

export default GlobalSelect;
