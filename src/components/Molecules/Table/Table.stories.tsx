import { Meta, StoryObj } from '@storybook/react';
import Table from './Table'; // Adjust the path if necessary
import { Product } from '../../../interfaces/global'; // Import Product type

// Define the columns for the Table component
const columns = [
  {
    key: 'title',
    header: 'Title',
    accessor: (row: Product) => row.title,
  },
  {
    key: 'price',
    header: 'Price',
    accessor: (row: Product) => `$${row.price.toFixed(2)}`, // Formatting price
  },
  {
    key: 'category',
    header: 'Category',
    accessor: (row: Product) => row.category,
  },
  {
    key: 'actions',
    header: 'Actions',
    accessor: (row: Product) => (
      <div>
        <button onClick={() => handleDetails(row.id)}>See Details</button>
        <button onClick={() => handleEdit(row.id)}>Edit</button>
      </div>
    ),
  },
];

// Example Product data
const data: Product[] = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.',
    category: 'beauty',
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ['beauty', 'mascara'],
    brand: 'Essence',
    sku: 'RCH45Q1A',
    weight: 2,
    dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
    warrantyInformation: '1 month warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'Low Stock',
    reviews: [],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 24,
    meta: { createdAt: '2024-05-23T08:56:21.618Z', updatedAt: '2024-05-23T08:56:21.618Z', barcode: '9164035109868', qrCode: 'https://assets.dummyjson.com/public/qr-code.png' },
    images: ['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'],
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
  },
  {
    id: 2,
    title: 'Jane Smith Beauty Product',
    description: 'An awesome beauty product for everyone.',
    category: 'beauty',
    price: 14.99,
    discountPercentage: 10.00,
    rating: 4.5,
    stock: 10,
    tags: ['beauty', 'skincare'],
    brand: 'JaneSmith',
    sku: 'JS12345',
    weight: 3,
    dimensions: { width: 20, height: 15, depth: 30 },
    warrantyInformation: '6 months warranty',
    shippingInformation: 'Ships in 2 weeks',
    availabilityStatus: 'In Stock',
    reviews: [],
    returnPolicy: '15 days return policy',
    minimumOrderQuantity: 10,
    meta: { createdAt: '2024-06-15T08:56:21.618Z', updatedAt: '2024-06-15T08:56:21.618Z', barcode: '9876543210', qrCode: 'https://assets.dummyjson.com/public/qr-code2.png' },
    images: ['https://cdn.dummyjson.com/products/images/beauty/Jane%20Smith%20Product/1.png'],
    thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Jane%20Smith%20Product/thumbnail.png',
  },
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
  argTypes: {
    columns: {
      control: false, // Hide the columns control in Storybook (as it’s static here)
    },
    data: {
      control: false, // Hide the data control in Storybook (since data is static in this story)
    },
  },
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
