export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface APIResponse {
  products: ProductType[];
}
