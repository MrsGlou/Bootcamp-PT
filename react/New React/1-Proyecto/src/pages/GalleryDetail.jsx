import { useParams } from "react-router-dom";
import WineDetail from "../components/WineDetail";
import { listWine } from "../data/data.gallery";

const GalleryDetail = () => {
  const { id } = useParams();
  const filterData = listWine.filter((item) => item.id == id);

  return (
    <>
      <div className="wn-detail">
        <WineDetail data={filterData} />
      </div>
    </>
  );
};

export default GalleryDetail;
