import React from "react";
import Aux from "../../hoc/Aux";
import "./Search.css";

const Search = (props) => {
  return (
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
        <button type="submit" class="btn btn-primary" onClick={props.submit}>Submit</button>
      </form>
    </Aux>
  );
};

export default Search;
