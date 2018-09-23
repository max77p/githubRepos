import React from "react";
import Aux from "../../hoc/Aux";
import { Btn } from "../Btn";

export const Table = props => {
  let button = [];
  let savedBtn=[]
  // console.log(props.response);

  if (props.saved) {
    button.push("");
  } else {
    button.push(
      <Btn
        click={props.click}
        response={props.response}
        itemsSaved={props.itemsSaved}
      />
    );
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