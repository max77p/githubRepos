import React from "react";
import Aux from "../../hoc/Aux";

export const Table = (props) => {
  console.log("test");

  return ([
      <tr>
        <td>{props.response.name}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
  ]);
};
