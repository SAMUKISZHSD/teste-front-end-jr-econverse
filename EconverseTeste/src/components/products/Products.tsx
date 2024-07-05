import "./products.scss"; 
import Title from "../global/Title"; 
import { useState } from "react"; 
import LinkCard from "../global/LinkCard"; 
import Modal from "./Modal"; 
import Carousel from "../carousel/Carousel"; 
import useFetch from "../../hooks/useFetchJsonProducts"; 
import { ProductType, APIResponse } from "../../typesJson"; 

const Products = () => {
  // Define os estados locais usando useState
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Estado para controlar se o modal está aberto
  const [modalData, setModalData] = useState<ProductType | null>(null); // Estado para armazenar os dados do produto selecionado

  // Usa o hook personalizado para buscar os dados de produtos
  // link json do testes: https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
  const { data, loading, error } = useFetch<APIResponse>(
    "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  );

  return (
    <section className="container"> {/* Container principal do componente */}
      <Title title="Produtos relacionados" decoration={true} /> {/* Componente de título */}
      <ul className="products-categories"> {/* Lista de categorias de produtos */}
        <li className="active">celular</li>
        <li>acessórios</li>
        <li>tablets</li>
        <li>notebooks</li>
        <li>TVs</li>
        <li>Ver todos</li>
      </ul>

      {data && data.products && ( // Se os dados foram carregados com sucesso
        <Carousel
          products={data.products} // Passa os produtos para o componente de carrossel
          setIsModalOpen={setIsModalOpen} // Passa a função para abrir o modal
          setModalData={setModalData} // Passa a função para definir os dados do modal
        />
      )}
      {loading && "Carregando Produtos..."} 
      {error && "Erro ao recuperar produtos."} 

      <div className="products-partners"> {/* Seção para os parceiros */}
        <LinkCard type="partners" /> {/* Componente de cartão de link */}
        <LinkCard type="partners" /> {/* Outro componente de cartão de link */}
      </div>
      {isModalOpen && modalData && ( // Se o modal está aberto e há dados do produto
        <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} /> // Exibe o modal com os dados do produto
      )}
    </section>
  );
};

export default Products; 
