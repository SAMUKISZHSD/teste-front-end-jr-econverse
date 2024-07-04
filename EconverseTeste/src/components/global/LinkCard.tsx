import "./LinkCard.scss";

const LinkCard = ({ type }: {type: string}) => {
  return (
    <div className="linkCard">
      <div
        className={`linkCard-content linkCard-${type}`}
      >
        <h4 className="linkCard-title">
          {type === 'partners' ? 'Parceiros' : 'Produtos'}
        </h4>
        <span className="linkCard-description">
          Lorem ipsum dolor sit amet, consectetur
        </span>
        <button>confira</button>
      </div>
    </div>
  );
};

export default LinkCard;
