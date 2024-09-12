import { ReactNode } from "react";

export interface JustChildrenProps {
    children: ReactNode
}

export interface ContainerProps {
    children: ReactNode,
    bgColor: string,
    maxWidth: string,
    maxHeight: string,
    minHeight: string
}

export interface HomePageProps {
    children: ReactNode
}

export interface NavLinkProps {
    linkPath: string;
    children: ReactNode;
}


// Product Info
interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string; // Using ISO date string
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

export interface ProductTableObj {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
}
  