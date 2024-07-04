import "./productsSecondary.scss";
import LinkCard from "../global/LinkCard";
import Title from "../global/Title";

const ProductsSecondary = () => {
  return (
    <section className="container">
      <Title title="Produtos relacionados" decoration={true} />
      <p className="products-sec-all">Ver todos</p>
      <div className="products-sec-partners">
        <LinkCard type="products" />
        <LinkCard type="products" />
      </div>
    </section>
  );
};

export default ProductsSecondary;
