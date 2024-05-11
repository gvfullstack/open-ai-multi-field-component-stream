export type NeighborhoodRecommendation = {
    rating?: string;
    title?: string;
    description?: string;
  }
  
  export type NeighborhoodRecommendationList = {
    neighborhoodRecommendationArray?: NeighborhoodRecommendation[];
    showNeighborhoodList?:Boolean;
    showNeighborhoodSection?:Boolean;
    selectedIndicesAtom?: number[];
    hoverIndexAtom?:number | null
  };