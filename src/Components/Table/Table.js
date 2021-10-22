import styles from "./table.module.css";

function Table({ data, filterBy }) {
  return (
    <div className={styles.table}>
      <h3>Table</h3>
      <table>
        <tbody>
          <tr>
            <th>{filterBy}</th>
            <th>Sales</th>
            <th>Profit</th>
          </tr>
          {data &&
            data.map((el, i) => {
              return (
                <tr key={`tableGraph${i}filtercdxx`}>
                  <td>{el[filterBy]}</td>
                  <td>{el.Sales}</td>
                  <td>{el.Profit}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
