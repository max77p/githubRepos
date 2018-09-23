import React from "react";
import Aux from "../../hoc/Aux";
import "./Btn.css";

export const Btn = props => {
  // console.log(props.itemsSaved);

  if (!props.saved) {
    return (
      <a
        onClick={event => props.click(event, props.response.id)}
        data-id={JSON.stringify(props.response)}
        data-clickid={props.response.id}
        className="btnStyle"
        href="#"
      >
        Add
      </a>
    );
  } else {
    return (
      <a
        onClick={event => props.click(event, props.response.id)}
        data-id={JSON.stringify(props.response)}
        data-clickid={props.response.id}
        className="btnStyle"
        href="#"
      >
        Remove
      </a>
    );
  }
};
