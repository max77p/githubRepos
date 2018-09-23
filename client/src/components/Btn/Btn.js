import React from "react";
import Aux from "../../hoc/Aux";

export const Btn = props => {
  // console.log(props.itemsSaved);

  if (!props.saved) {
    return (
      <button
        onClick={event => props.click(event, props.response.id)}
        data-id={JSON.stringify(props.response)}
        data-clickid={props.response.id}
      >
        Add
      </button>
    );
  } else {
    return (
      <button
        onClick={event => props.click(event, props.response.id)}
        data-id={JSON.stringify(props.response)}
        data-clickid={props.response.id}
      >
        Remove
      </button>
    );
  }
};
