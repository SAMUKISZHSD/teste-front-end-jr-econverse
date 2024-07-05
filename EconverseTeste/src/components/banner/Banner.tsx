import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner-bg">
      <div>
        <div className="container">
          <h1 className="banner-main">
            Venha conhecer nossas <br /> promoções
          </h1>
          <p className="banner-sub">50% Off nos produtos</p>
          <button className="banner-button">Ver produto</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
