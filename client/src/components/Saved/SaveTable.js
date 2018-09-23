import React from "react";
import Aux from "../../hoc/Aux";
import { Btn } from "../Btn";

export const SaveTable = props => {
  let button = [];
  let savedBtn=[]
  console.log(props.response);

  if (props.saved) {
    button.push(
        <Btn
          click={props.clickRemove}
          response={props.response}
          itemsSaved={props.itemsSaved}
          saved={props.saved}
        />
      );
  } else {
    button.push("");
  }

  

  return [
    <tr>
      <td>
        <a href={props.response.html_url}>{props.response.full_name}</a>
      </td>
      <td>{props.response.language}</td>
      <td>@mdo</td>
      <td>{button}</td>
    </tr>
  ];
};
