import { Dispatch, SetStateAction } from "react";
import "./productCard.scss";
import { ProductType } from "../../typesJson";

type ProductCardProps = ProductType & {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalData: Dispatch<SetStateAction<ProductType | null>>;
};

const ProductCard = ({
  productName,
  descriptionShort,
  photo,
  price,
  setIsModalOpen,
  setModalData,
}: ProductCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setModalData({
      productName,
      descriptionShort,
      photo,
      price,
    });
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={photo} />
      <h4 className="product-name">{productName}</h4>
      <p className="product-deal">{formatCurrency(price + 999.99)}</p>
      <p className="product-price">{formatCurrency(price)}</p>
      <p className="product-payment">
        ou 2x de R$ {formatCurrency(price / 2)} sem juros
      </p>
      <p className="product-freight">Frete grátis</p>
      <button className="product-button">Comprar</button>
    </div>
  );
};

export default ProductCard;
