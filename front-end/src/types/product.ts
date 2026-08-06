import type { PaginationParams } from "./pagination";

export type ProductSortField = "id" | "price" | "name" | "category";
export type SortOrder = "ASC" | "DESC";

export interface ProductQueryParams extends PaginationParams {
  category?: string;
  search?: string;
  sort?: ProductSortField;
  order?: SortOrder;
  minPrice?: number;
  maxPrice?: number;
}

export interface ProductColor {
  name: string;
  value: string;
}

export interface ApiProduct {
  id: number;
  slug: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  finalPrice: number;
  discount: number;
  isNew: boolean;
  image: string;
  description: string;
  gallery: string[];
  colors: ProductColor[];
  sizes: string[];
  badge: string | null;
  badgeColor: string | null;
  complementaryDescription: string;
  additionalInfo: string;
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  description: string;
  price: string;
  oldPrice: string | null;
  image: string;
  gallery: string[];
  colors: ProductColor[];
  sizes: string[];
  badge: string | null;
  badgeColor: string | null;
  complementaryDescription: string;
  additionalInfo: string;
}
