import React from 'react';

import "./Description.css";


export default function Description({description}) {
  
  return (
    <span className="description-span">
      {description}
    </span>
  )
}