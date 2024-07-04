import { Dispatch, SetStateAction, useRef } from "react";
import { ProductType } from "../../typesJson";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ProductCard from "../products/ProductCard";

type CarouselProps = {
  products: ProductType[];
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalData: Dispatch<SetStateAction<ProductType | null>>;
};

const Carousel = ({
  products,
  setIsModalOpen,
  setModalData,
}: CarouselProps) => {
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 500;
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 500;
    }
  };

  return (
    <div className="products-container">
      <NextArrow onClick={handleNextClick} />
      <PrevArrow onClick={handlePrevClick} />
      <ul className="products-slider" ref={carouselRef}>
        {products.map((product, i) => {
          return (
            <li key={i}>
              <ProductCard
                productName={product.productName}
                descriptionShort={product.descriptionShort}
                photo={product.photo}
                price={product.price}
                setIsModalOpen={setIsModalOpen}
                setModalData={setModalData}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousel;
