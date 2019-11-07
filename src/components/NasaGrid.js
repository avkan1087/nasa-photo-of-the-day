import React from "react";

const NasaGrid = (props) => {
    return (
    <>
        <div>
          <h1>{props.date}</h1>
        </div>

        <div>
          <img src = {props.url} alt="rendom daily photo"/>
        </div>

        <div>
          <h2>{props.title}</h2>
          <p>{props.explanation}</p>
        </div>

    </>
  )
};
export default NasaGrid;
