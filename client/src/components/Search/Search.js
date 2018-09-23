import React from "react";
import Aux from "../../hoc/Aux";
import { Table } from "../../components/Search";
import "./Search.css";

export const Search = props => {
let content=[];

 Object.keys(props.resp).map(x => {
    if (props.itemsSaved.includes(props.resp[x].id)) {
     content.push(<Table response={props.resp[x]} click={props.clickSave} saved={true}/>);
    }
    else{
      content.push(<Table response={props.resp[x]} click={props.clickSave} saved={false}/>)
    }
  });

  return [
    <Aux>
      <form className="formStyle" onSubmit={props.submit}>
        <div className="form-group searchSection">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search"
            name="search"
            onChange={props.change}
          />
        </div>
        <button type="submit" class="btn btn-primary searchBtnStyle" onClick={props.submit}>
          Search
        </button>
      </form>
    </Aux>,
    
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col" >Name</th>
          <th scope="col" >Language</th>
          <th scope="col" >Latest tag</th>
          <th scope="col" />
        </tr>
      </thead>
    
      <tbody>{content}</tbody>
    </table>
    
  ];
};
