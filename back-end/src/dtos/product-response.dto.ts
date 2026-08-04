import { Product, ProductColor } from '../entities/product.entity';

export class ProductResponseDto {
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

  static from(product: Product): ProductResponseDto {
    const discountPrice = product.price * (1 - product.discount / 100);
    const hasDiscount = product.discount > 0;

    return {
      ...product,
      badge: hasDiscount ? `-${product.discount}%` : product.isNew ? 'New' : null,
      badgeColor: hasDiscount ? '#E97171' : product.isNew ? '#2EC1AC' : null,
      finalPrice: Number(discountPrice.toFixed(2))
    };
  }
}
