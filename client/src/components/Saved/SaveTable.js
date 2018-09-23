import React from "react";
import Aux from "../../hoc/Aux";
import { Btn } from "../Btn";
import "./Saved.css";

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
    <tr className="searchResultsTable">
      <td>
        <a href={props.response.html_url} target="_blank" rel="noopener" className="gitHubLink">{props.response.full_name}</a>
      </td>
      <td>{props.response.language}</td>
      <td>{props.response.tag_name?props.response.tag_name:"_"}</td>
      <td>{button}</td>
    </tr>
  ];
};
