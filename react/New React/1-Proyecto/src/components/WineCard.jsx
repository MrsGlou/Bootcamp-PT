import { Link } from "react-router-dom";

const WineCard = ({ data }) => {
  const { id, name, image } = data;
  const pathCustom = `/gallery/${id}`;
  return (
    <>
      <Link to={pathCustom}>
        <figure>
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </figure>
      </Link>
    </>
  );
};

export default WineCard;
