"use client";
import React from "react";
import styles from './NeighborhoodsDisplay.module.css';
import { NeighborhoodRecommendation } from "./NeighborhoodsDisplayTypes";
import { neighborhoodRecommendationList, destination } from "./NeighborhoodsDisplayAtoms"
import { useRecoilState } from 'recoil';
import getConfig from 'next/config';


const GetNeighborhoodSuggestions: React.FC<any> = (props) => {
  const [dest, setDest] = useRecoilState(destination);
  const [neighborhoodRecommendationsArr, setNeighborhoodRecommendationsArr] = useRecoilState(neighborhoodRecommendationList);
  const { publicRuntimeConfig } = getConfig();
  const baseUrl = publicRuntimeConfig.BASE_URL;
  let disabled = !dest ? true : false;
  const neighborhoodButtonText = "generate neighborhood suggestions"
  const generateResponse = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    setNeighborhoodRecommendationsArr(prev => {
      let arr:NeighborhoodRecommendation[] = [];
      return {neighborhoodRecommendationArray: arr };
    });

    const prompt = `Provide the top Neighborhoods in ${dest} for tourists to explore. The AI should generate objects that includes a rating, title, and description. The rating for each neighborhood can be either "Top Match" or "Good Match" depending on compatibility. Response JSON Object Format is: {"rating": "Top Match", "title": "...", "description": "This is a great option for you because..."}; Another JSON object should follow if there are more suggestions. I will format the objects into proper JSON, only provide the objects.`;
    
    const response = await fetch('http://localhost:3001/api/GPTRequest', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    
    let properties: (keyof NeighborhoodRecommendation)[] = ['rating', 'title', 'description'];
    let propertyIndex = 0;
    let parsingString = false;
    let expectValue = false;
    let buffer = '';

    while (!done) {
      let count = 0
      count += 1
      const { value, done: doneReading } = await reader.read();
      
      done = doneReading;
      let chunkValue = decoder.decode(value);
      
      for (let i = 0; i < chunkValue.length; i++) {
        switch (chunkValue[i]) {
          case '"':
            if (parsingString) {
              // End of string found
              parsingString = false;

              if (expectValue) {
                // Clear the buffer
                buffer = '';
                // Move to the next property
                propertyIndex++;
                if (propertyIndex >= properties.length) {
                  propertyIndex = 0;
                  // We've finished an object, add a new placeholder
                }
                // Expect a property name next
                expectValue = false;
              }
            } else {
              // Start of string found
              parsingString = true;
            }
            break;
          case ':':
            // Found a colon, which means we should expect a value next
            expectValue = true;
            break;
          default:
            if (parsingString && expectValue) {
              buffer += chunkValue[i];
              if (buffer.length === 1 && expectValue && propertyIndex === 0) {
                setNeighborhoodRecommendationsArr(prev => {
                  let arr = [...(prev.neighborhoodRecommendationArray || [])];
                  arr.push({ rating: '', title: '', description: '' });
                  return {...prev, neighborhoodRecommendationArray: arr };
                });
              }
              setNeighborhoodRecommendationsArr(prev => {
                let newArray = [...(prev.neighborhoodRecommendationArray || [])]; // create a copy
                let last = newArray.length - 1;
                let obj = { ...newArray[last] }; // create a new copy of the object
                obj[properties[propertyIndex]] = buffer; // modify the copied object
                newArray[last] = obj; // replace the object in the copied array
                return {...prev,
                  neighborhoodRecommendationArray: newArray,
                };
              });
            }
            break;
        }
      }
    }
}

  return (
    <div className={styles.createItineraryButtonContainer}>
       <button className={`${styles.createItineraryButton} ${disabled ? styles.disabled : ""}`} disabled={disabled} onClick={generateResponse}>{neighborhoodButtonText}</button>
    </div>
  );
};

export default GetNeighborhoodSuggestions;

