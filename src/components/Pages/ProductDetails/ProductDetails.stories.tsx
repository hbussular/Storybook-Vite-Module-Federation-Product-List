import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom'; // Needed for routing behavior
import ProductDetails from './ProductDetails';
import { Product } from '../../../interfaces/global';

// Mock Product Data for Storybook
const mockProduct: Product = {
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
};

const meta: Meta<typeof ProductDetails> = {
  title: 'Pages/ProductDetails',
  component: ProductDetails,
};

export default meta;
type Story = StoryObj<typeof ProductDetails>;

// Wrap the ProductDetails in a BrowserRouter and pass the mock product via location state
export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <ProductDetails />
    </BrowserRouter>
  ),
  parameters: {
    reactRouter: {
      routePath: '/details/:id',
      routeState: mockProduct, // Passing the mock product as state
    },
  },
};
