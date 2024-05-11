import { useRecoilState } from 'recoil';
import { neighborhoodRecommendationList } from './NeighborhoodsDisplayAtoms';
import { NeighborhoodRecommendation, NeighborhoodRecommendationList} from './NeighborhoodsDisplayTypes';
import DynamicFontAwesomeIcon from '../DynamicFontAwesomeIcon';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import styles from './NeighborhoodsDisplay.module.css';

const NeighborhoodRecommendations: React.FC<NeighborhoodRecommendationList> = () => {
  const [neighborhoodRecommendations, setNeighborhoodRecommendations] = useRecoilState<NeighborhoodRecommendationList>(
    neighborhoodRecommendationList
  );
  const { hoverIndexAtom } = neighborhoodRecommendations;
  const neighborhoodRecommendationArray = neighborhoodRecommendations.neighborhoodRecommendationArray?? [];
 

  const handleHover = (index: number) => {
    setNeighborhoodRecommendations((prevRecommendations) => ({
      ...prevRecommendations,
      hoverIndexAtom: index,
    }));
  };
  
  const handleMouseLeave = () => {
    setNeighborhoodRecommendations((prevRecommendations) => ({
      ...prevRecommendations,
      hoverIndexAtom: null,
    }));
  };


  return (
    <>
      <div className={styles.container}>
        {neighborhoodRecommendationArray?.map((recommendation: NeighborhoodRecommendation, index: number) => {
          const isHovered = hoverIndexAtom === index;
          return (
            <div
              key={index}
              className={`${styles.card} ${ isHovered ? styles.cardHover : ''}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className={styles.rating}>
                {recommendation.rating === 'Top Match' && (
                  <DynamicFontAwesomeIcon className={styles.icon} icon={faMedal} />
                )}
                {recommendation.rating}
              </h3>
              <h2 className={styles.title}>{recommendation.title}</h2>
              <p className={styles.description}>{recommendation.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NeighborhoodRecommendations;
