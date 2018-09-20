import React, { Component } from "react";
import "./Home.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Nav";
import {Search} from "../../components/Search";
import Saved from "../../components/Saved";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      response: [],
      search: ""
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSearch = event => {
    event.preventDefault();
    this.apicall();
  };

  componentDidMount() {}

  apicall() {
    var search = this.state.search;
    var queryURL = "https://api.github.com/search/repositories?q=" + search;
    axios.get(queryURL).then(res => {
      if (res.data.items.length > 10) {
        console.log(res.data.items.slice(0, 10));
        var searchitems = res.data.items.slice(0, 10);
        this.setState(prevState => {
          return {
            response: [...searchitems]
          };
        });
      }
    });
  }

  render() {
    // var content = [];
    // {this.state.response.map(x=>{
    //   content.push(x);
    // })}

    return [
      <Nav />,
      <div className="row mainRow">
        <div className="col-md-6 leftCol">
          <div className="container">
            <Search
              click={this.handleSearch}
              submit={this.handleSearch}
              change={this.handleChange}
              value={this.state.search}
              resp={this.state.response}
            />
          </div>
        </div>
        <div className="col-md-6 rightCol">
          <div className="container">
            <Saved />
          </div>
        </div>
      </div>
    ];
  }
}
export default Home;
