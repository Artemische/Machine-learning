import React, {useEffect} from 'react';

import DefaultContent from "../DefaultContent/DefaultContent"
import UploadContent from "../UploadContent/UploadContent"
import CameraContent from "../CameraContent/CameraContent"

import "./Content.css";


function Content({selectedItem}) {

  const getContent = (selectedItem) => {
    switch (selectedItem) {
      case "Upload File":
        return <UploadContent />
      break;
      case "Use Camera":
        return <CameraContent />
      break;
      case "Default Image":
      default:
        return <DefaultContent />
      break;
    }
  }

  return (
    <main>
      <div className="content-div"> {getContent(selectedItem)} </div>
    </main>
  )
}

export default Content;
