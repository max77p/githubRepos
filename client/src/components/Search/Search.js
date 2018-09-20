import React from "react";
import Aux from "../../hoc/Aux";
import { Table } from "../../components/Search";
import "./Search.css";

export const Search = props => {
  console.log(props.resp);
  let content=Object.keys(props.resp).map(x=>{
    return (
      <Table response={props.resp[x]}/>
    )
  })
  return [
    <Aux>
      <form className="formStyle" onSubmit={props.submit}>
        <div class="form-group searchSection">
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
        <button type="submit" class="btn btn-primary" onClick={props.submit}>
          Submit
        </button>
      </form>
    </Aux>,
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Language</th>
          <th scope="col">latest tag</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
          {content}
      </tbody>
    </table>
  ];
};
