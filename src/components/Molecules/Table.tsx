// Define the type for a column
interface Column {
  key: string;
  header: string;
  accessor: (row: DataRow) => React.ReactNode; // Function to access data for each column
}

// Define the type for a row of data
interface DataRow {
  id: number;
  name: string;
  age: number;
  [key: string]: unknown; // To allow additional fields
}

// Props for the Table component
interface TableProps {
  columns: Column[];
  data: DataRow[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table">
        <thead>
            <tr>
                {columns.map((column) => <th key={column.key}>{column.header}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={column.key}>
                            {column.accessor(row)}
                        </td>
                    )
                    )}
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Table;
