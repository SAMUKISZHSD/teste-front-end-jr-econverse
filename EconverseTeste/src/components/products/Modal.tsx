import { Dispatch, SetStateAction, useState } from "react";
import "./modal.scss";
import Close from "../../assets/icons/modal/close.svg?react";
import { ProductType } from "../../typesJson";
import Plus from "../../assets/icons/modal/plus.svg?react";
import Minus from "../../assets/icons/modal/minus.svg?react";

// Define o tipo ModalProps, que inclui os dados do modal e o setter para abrir/fechar o modal.
type ModalProps = {
  modalData: ProductType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

// Define o componente Modal, que recebe as propriedades definidas em ModalProps.
const Modal = ({ modalData, setIsModalOpen }: ModalProps) => {
  // Extrai as propriedades do produto a partir do modalData.
  const { photo, productName, price, descriptionShort } = modalData;

  // Define um estado local para controlar a quantidade do produto.
  const [count, setCount] = useState(1);

  // Função para lidar com o clique dos botões de incrementar e decrementar.
  const handleClick = (type: string) => {
    switch (type) {
      case "plus":
        setCount((prev) => prev + 1); // Incrementa a quantidade.
        break;
      case "minus":
        if (count === 0) return; // Se a quantidade for 0, não faz nada.
        setCount((prev) => prev - 1); // Decrementa a quantidade.
        break;
    }
  };

  // Função auxiliar para formatar um valor numérico como moeda BRL (Real brasileiro).
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <button
          aria-label="Fechar"
          className="modal-btn-close"
          onClick={() => setIsModalOpen(false)}
        >
          <Close />
        </button>
        <img src={photo} />
        <div className="modal-info">
          <p className="modal-title">{productName}</p>
          <p className="modal-price">{formatCurrency(price)}</p>
          <p className="modal-description">{descriptionShort}</p>
          <a href="" className="modal-details">
            Veja mais detalhes do produto {">"}
          </a>
          <div className="modal-input">
            <button onClick={() => handleClick("minus")}>
              <Minus />
            </button>
            <input type="number" value={count} />
            <button onClick={() => handleClick("plus")}>
              <Plus />
            </button>
          </div>
          <button className="modal-button">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;