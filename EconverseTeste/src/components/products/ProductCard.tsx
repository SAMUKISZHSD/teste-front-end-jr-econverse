import { Dispatch, SetStateAction } from "react";
import "./productCard.scss";
import { ProductType } from "../../typesJson";

// Define o tipo ProductCardProps, que inclui os campos do tipo ProductType
// e também os setters para abrir o modal e definir os dados do modal.
type ProductCardProps = ProductType & {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalData: Dispatch<SetStateAction<ProductType | null>>;
};

// Define o componente ProductCard, que recebe as propriedades definidas em ProductCardProps.
const ProductCard = ({
  productName,
  descriptionShort,
  photo,
  price,
  setIsModalOpen,
  setModalData,
}: ProductCardProps) => {
  
  // Função auxiliar para formatar um valor numérico como moeda BRL (Real brasileiro).
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // Função chamada quando o produto é clicado.
  const handleClick = () => {
    setIsModalOpen(true); // Abre o modal.
    setModalData({
      productName,
      descriptionShort,
      photo,
      price,
    }); // Define os dados do produto no modal.
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
