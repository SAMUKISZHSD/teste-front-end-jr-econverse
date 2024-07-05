export type APIResponse = {
  products: ProductType[];
  success: boolean;
};

export type ProductType = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};