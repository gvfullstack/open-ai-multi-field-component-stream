import {atom} from 'recoil';
import { NeighborhoodRecommendationList} from './NeighborhoodsDisplayTypes'

export const neighborhoodRecommendationList = atom<NeighborhoodRecommendationList>({
    key: 'neighborhoodRecommendationList',
    default:{ 
      neighborhoodRecommendationArray:[],
      hoverIndexAtom: null
    }
  });
  
  export const destination = atom<string>({
    key: 'destination', 
    default: ''
  })