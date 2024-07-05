import Title from "../global/Title";
import Brand from "./Brand";
import Arrow from "../../assets/icons/brands/arrow.svg?react";

const Brands = () => {
  return (
    <section className="container">
      <Title title="Navegue por marcas" decoration={false} />
      <ul className="brands-container">
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <div className="brands-arrow">
          <Arrow />
        </div>
      </ul>
    </section>
  );
};

export default Brands;
