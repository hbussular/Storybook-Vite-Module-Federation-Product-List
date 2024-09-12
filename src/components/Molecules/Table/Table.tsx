import "./styles.css";
import { Product } from "../../../interfaces/global";

// Define the type for a column
interface Column {
  key: string;
  header: string;
  accessor: (row: Product) => React.ReactNode;
}

// Props for the Table component
interface TableProps {
  columns: Column[];
  data: Product[]; 
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr className="upper-row">
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>{column.accessor(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
