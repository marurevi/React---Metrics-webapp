import { useParams } from 'react-router-dom';
import Countries from '../Countries/Countries';

function Country() {
  const { continent } = useParams();
  return (
    <div>
      <Countries name={continent} />
    </div>
  );
}

export default Country;
