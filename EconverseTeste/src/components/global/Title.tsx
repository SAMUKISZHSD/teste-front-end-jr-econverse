import "./title.scss";

type TitleProps = {
  title: string;
  decoration: boolean;
};

const Title = ({ title, decoration }: TitleProps) => {
  return (
    <div className="container title-container">
      <h3
        className={`title ${decoration ? "title-detailed" : null}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default Title;
