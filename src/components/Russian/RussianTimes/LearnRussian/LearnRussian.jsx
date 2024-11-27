import LearnCards from './LearnCards/LearnCards'
import './LearnRussian.scss'
import { useEffect, useState } from 'react';

export default function LearnRussian() {

  const [data, setData] = useState([]);

  useEffect(() => {
    import('../../../../assets/json/LearnRussian.json')
      .then((module) => setData(module.default))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className='learnRussian'>
      <h2 className="learnRussian__title">
        Kursda nimalarni o{"'"}rganasiz?
      </h2>
      <div className="learnRussian__general">
        {
          data.map(item => (
            <LearnCards
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
    </div>
  )
}
