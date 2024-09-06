import { Meta, StoryObj } from '@storybook/react';
import Table from './Table'; // Make sure this path is correct based on your project structure

// Define the types for the Table component
interface DataRow {
  id: number;
  name: string;
  age: number;
  [key: string]: unknown;
}

// Define the columns for the Table component
const columns = [
  {
    key: 'name',
    header: 'Name',
    accessor: (row: DataRow) => row.name,
  },
  {
    key: 'age',
    header: 'Age',
    accessor: (row: DataRow) => row.age,
  },
  {
    key: 'actions',
    header: 'Actions',
    accessor: (row: DataRow) => (
      <div>
        <button onClick={() => handleDetails(row.id)}>See Details</button>
        <button onClick={() => handleEdit(row.id)}>Edit</button>
      </div>
    ),
  },
];

// Example data
const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
];

// Action handlers
const handleDetails = (id: number) => {
  console.log(`See details for item ${id}`);
};

const handleEdit = (id: number) => {
  console.log(`Edit item ${id}`);
};

// Storybook Meta Configuration
const meta: Meta<typeof Table> = {
  title: 'Molecules/Table', // Storybook title and folder structure
  component: Table,
};

export default meta;

// Define the type for the story
type Story = StoryObj<typeof Table>;

// Primary story for the Table component
export const Primary: Story = {
  args: {
    columns: columns,
    data: data,
  },
};
