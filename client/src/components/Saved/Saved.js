import React from "react";
import { SaveTable } from "../../components/Saved";

export const Saved = (props) => {

let content=[];

Object.keys(props.saved).map(x => {
  if (props.saved[x].id === props.itemsSaved[x]) {
   content.push(<SaveTable response={props.saved[x]} click={props.clickSave} saved={true} clickRemove={props.clickRemove}/>);
  }
  else{
    content.push("")
  }
});

  return [
    <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Language</th>
        <th scope="col">Latest tag</th>
        <th scope="col" />
      </tr>
    </thead>
    <tbody>
        {content}
    </tbody>
  </table>
  ];
};


