import { useEffect, useRef, useState } from "react";

import Webcam from "react-webcam";
import * as ml5 from "ml5";
import cameraClassify from "../../utils/ml5/camera";

import "./CameraContent.css";

export default function CameraContent() {
  const [state, setState] = useState({
    description: null
  })

  let webcamRef = useRef(null);

  useEffect(() => {
    cameraClassify(ml5, webcamRef, setState)
    
    return () => {
      webcamRef = null
    }
  }, []);

  return (
    <section className="camera-section">
      <Webcam ref={webcamRef} />
      {state.description ? <span className="camera-description">{state.description}</span> : <span className="nodata-text">No description</span>}
    </section>
  );
}
