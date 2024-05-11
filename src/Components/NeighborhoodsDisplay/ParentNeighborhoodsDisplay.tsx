import React, { useEffect, useRef } from 'react';
import GetNeighborhoodSuggestions from './GetNeighborhoodsButton'
import NeighborhoodRecommendations from "./NeighborhoodRecommendations";
import DestinationInputBar from './DestinationInputBar'

const ParentNeighborhoodSection = (props: any) => {

  return (
    <div style={{ borderTop: 'none', borderBottom: 'none', margin: '0rem', maxWidth: '20rem', alignSelf: 'center' }}>
      <div style={{ padding: '10px' }}>
            <div>
                <DestinationInputBar/>
                <NeighborhoodRecommendations/>
                <GetNeighborhoodSuggestions/>
            </div>    
      </div>
    </div>
  );
};

export default ParentNeighborhoodSection;
