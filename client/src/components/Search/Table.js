import React from "react";
import Aux from "../../hoc/Aux";
import { Btn } from "../Btn";
import "./Search.css";

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
