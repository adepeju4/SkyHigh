
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
        <option value="Order Date">Filter By Date</option>
        <option value="Product Name">Product Name</option>
        <option value="City">City</option>
        <option value="Category">Category</option>
        <option value="Country">Country</option>
      </select>
    </div>
  );
}

export default GlobalSelect;
