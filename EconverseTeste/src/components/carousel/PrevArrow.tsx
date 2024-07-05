import { ComponentProps } from "react";
import Prev from "../../assets/icons/carousel/left-arrow.svg?react";
import "./carousel.scss";

const PrevArrow = ({ onClick }: ComponentProps<'button'>) => {
  return (
    <button className="carousel-button left-arrow" onClick={onClick}>
      <Prev />
    </button>
  );
};

export default PrevArrow;
