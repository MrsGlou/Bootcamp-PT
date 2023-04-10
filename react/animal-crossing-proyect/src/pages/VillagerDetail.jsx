import { useOutletContext, useParams } from 'react-router-dom';
import VillagerCard from '../components/VillagerCard';

const VillagerDetail = () => {
  const { id } = useParams();
  const [requestVillagers] = useOutletContext();
  const filterData = requestVillagers.filter((villager) => villager.id === id);
  return (
    <div>
      <VillagerCard key={filterData[0].id} data={filterData[0]} />
    </div>
  );
};

export default VillagerDetail;
