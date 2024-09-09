import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home'; // Adjust the path based on your structure
import { Product } from '../../../interfaces/global';
import BasicTemplate from '../../Templates/Basic/BasicTemplate';
import Table from '../../Molecules/Table/Table';
import { useEffect, useState } from 'react';

// Mock data for the story
const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description: 'A popular mascara known for its volumizing and lengthening effects.',
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

// Storybook Meta Configuration
const meta: Meta<typeof Home> = {
  title: 'Pages/Home', // Organize in Storybook's sidebar
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

// Mocking the `useEffect` behavior to use the mocked data
export const Primary: Story = {
  render: () => {
    const HomeWithMockData = () => {
      const [productData, setProductData] = useState<Product[]>([]);

      useEffect(() => {
        // Instead of fetching from an API, use the mock data
        setProductData(mockProducts);
      }, []);

      const columns = [
        {
          key: 'id',
          header: 'ID',
          accessor: (row: Product) => row.id,
        },
        {
          key: 'title',
          header: 'Title',
          accessor: (row: Product) => row.title,
        },
        {
          key: 'description',
          header: 'Description',
          accessor: (row: Product) => row.description,
        },
        {
          key: 'category',
          header: 'Category',
          accessor: (row: Product) => row.category,
        },
        {
          key: 'price',
          header: 'Price',
          accessor: (row: Product) => `$${row.price.toFixed(2)}`, // Format the price
        },
      ];

      return (
        <BasicTemplate>
          <Table columns={columns} data={productData} />
        </BasicTemplate>
      );
    };

    return <HomeWithMockData />;
  },
};
