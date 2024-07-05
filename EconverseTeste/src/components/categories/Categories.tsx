import Category from "./Category";
import "./categories.scss";

const categories = [
  {
    title: "Tecnologia",
    url: "/src/assets/img/categories/Tecnologia.png",
    active: true,
  },
  {
    title: "Supermercado",
    url: "/src/assets/img/categories/Supermercado.png",
    active: false,
  },
  {
    title: "Bebidas",
    url: "/src/assets/img/categories/Bebidas.png",
    active: false,
  },
  {
    title: "Ferramentas",
    url: "/src/assets/img/categories/Ferramentas.png",
    active: false,
  },
  {
    title: "Saúde",
    url: "/src/assets/img/categories/Saude.png",
    active: false,
  },
  {
    title: "Esportes e Fitness",
    url: "/src/assets/img/categories/Esportes.png",
    active: false,
  },
  {
    title: "Moda",
    url: "/src/assets/img/categories/Moda.png",
    active: false,
  },
];

const Categories = () => {
  return (
    <div className="container">
      <ul className="categories">
        {categories.map((category) => {
          return (
            <Category
              title={category.title}
              url={category.url}
              active={category.active}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
