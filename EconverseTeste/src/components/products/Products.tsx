import "./products.scss";
import Title from "../global/Title";
import { useState } from "react";
import LinkCard from "../global/LinkCard";
import Modal from "./Modal";
import Carousel from "../carousel/Carousel";
import useFetch from "../../hooks/useFetchJsonProducts";
import { ProductType, APIResponse } from "../../typesJson";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ProductType | null>(null);

  const { data, loading, error } = useFetch<APIResponse>(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  return (
    <section className="container">
      <Title title="Produtos relacionados" decoration={true} />
      <ul className="products-categories">
        <li className="active">celular</li>
        <li>acessórios</li>
        <li>tablets</li>
        <li>notebooks</li>
        <li>TVs</li>
        <li>Ver todos</li>
      </ul>

      {data && data.products && (
        <Carousel
          products={data.products}
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
        />
      )}
      {loading && "Carregando Produtos..."}
      {error && "Erro ao recuperar produtos."}

      <div className="products-partners">
        <LinkCard type="partners" />
        <LinkCard type="partners" />
      </div>
      {isModalOpen && modalData && (
        <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} />
      )}
    </section>
  );
};

export default Products;
