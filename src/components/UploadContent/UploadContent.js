import { useState } from 'react'
import './UploadContent.css'

import Description from "../Description/Description"

import * as ml5 from "ml5";
import classifyImg from "../../utils/ml5/basic"
import defaultImg from "./img/questionM.png"

export default function UploadContent() {

  const [state, setState] = useState({
    imageUrl: null, 
    loaded: false, 
    description: ""
  })

  const onSubmit = (e) => {
    setState({
      imageUrl: URL.createObjectURL(e.target.files[0]),
      loaded: true,
      description: ""
    });
  }

  const onButtonClick = () => {
    classifyImg(ml5, setState)
  }

  return (
    <section className="upload-content">
      {state.loaded ? 
        <img id="image" src={state.imageUrl} width="550rem" alt="User Image" /> : 
        <img id="image" src={defaultImg} width="550rem" alt="Default Image" />}
      <section>
        <label htmlFor="file-upload" className="content-btn">Browse...</label>
        <input id="file-upload" type="file" name="Browse..." accept=".jpg, .jpeg, .png" onChange={onSubmit} name="img" className="custom-file-input" />
        <button className="content-btn" disabled={!state.loaded} type="button" onClick={onButtonClick}>Recognize!</button>
      </section>
      {state.description ?
        <Description className="description-text" description={state.description} /> :
        <span className="nodata-text">No description</span>
      }
    </section>
  )
}