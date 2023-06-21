import WineCard from "../components/WineCard";
import { listWine } from "../data/data.gallery";

const Gallery = () => {
  return (
    <>
      <div className="wn-gallery">
        {listWine.map((item) => (
          <WineCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
