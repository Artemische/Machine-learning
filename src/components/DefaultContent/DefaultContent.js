import React, { Fragment, useState } from 'react';

import Description from "../Description/Description"

import * as ml5 from "ml5";
import classifyImg from "../../utils/ml5/basic"

import tigerImage from "./tiger.jpg"
import './DefaultContent.css'

export default function DefaultContent() {

  const [state, setState] = useState({
    description: ""
  });

  const onButtonClick = () => {
    classifyImg(ml5, setState)
  }

  return (
    <section className="default-content">
      <img id="image" src={tigerImage} width="400" alt="Logo" />
      {/* <section>
        <input type="file" disabled="true" accept=".jpg, .jpeg, .png" name="img" className="custom-file-input" ></input>
        <button className="get-btn" type="button" onClick={onButtonClick}>Get description</button>
      </section> */}
      <section>
        <label htmlFor="file-upload" className="content-btn">Browse...</label>
        <input id="file-upload" type="file" name="Browse..." disabled={true} className="custom-file-input" />
        <button className="content-btn" disabled={false} type="button" onClick={onButtonClick}>Recognize!</button>
      </section>
      {state.description.length ? <Description description={state.description} /> : <span className="nodata-text">No description</span> }
    </section>
  )
}