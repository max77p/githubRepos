import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import Nav from "../../components/Nav";
import { Search } from "../../components/Search";
import { Saved } from "../../components/Saved";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickToAdd = this.clickToAdd.bind(this);
    this.clickToRemove = this.clickToRemove.bind(this);
    this.state = {
      response: [],
      search: "",
      saved: [],
      addedItems: [],
      disableBtn: false,
      prevSearch: "",
      paginate: 1
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => {
        if (!this.state.search) {
          this.setState(prevState => {
            return {
              response: []
            };
          });
        }
      }
    );
  }

  handleSearch = event => {
    event.preventDefault();
    this.apicall();
  };

  clickToAdd = (event, id) => {
    event.preventDefault();
    console.log(id);
    let getid = event.target.getAttribute("data-id");
    let y = JSON.parse(getid);
    // console.log(this.state.response);

    this.setState(
      prevState => {
        return {
          saved: [...prevState.saved, y],
          addedItems: [...prevState.addedItems, id]
        };
      },
      () => {
        console.log("**********added state****************");
        console.log(this.state.saved);
        console.log(this.state.addedItems);
      }
    );
  };

  clickToRemove = (event, id) => {
    event.preventDefault();
    console.log(id);
    let getid = event.target.getAttribute("data-id");
    let y = JSON.parse(getid);

    this.setState(
      prevState => {
        return {
          saved: prevState.saved.filter((val, index) => {
            return val.id !== id;
          }),
          addedItems: prevState.addedItems.filter((val, index) => {
            return val !== id;
          })
        };
      },
      () => {
        console.log("**********removed state****************");
        console.log(this.state.saved);
        console.log(this.state.addedItems);
      }
    );
  };

  apicall() {
    let search = this.state.search;

    let queryURL;

    if (this.state.prevSearch === search) {
      this.setState(
        prevState => {
          return {
            paginate: prevState.paginate + 1
          };
        },
        () => {
          queryURL =
            "https://api.github.com/search/repositories?q=" +
            search +
            "&sort=stars&per_page=10&page=" +
            this.state.paginate;
            this.getData(queryURL,search);
        }
      );
    } else {
      this.setState(
        prevState => {
          return {
            paginate: 1,
            response: []
          };
        },
        () => {
          queryURL =
            "https://api.github.com/search/repositories?q=" +
            search +
            "&sort=stars&per_page=10&page=" +
            this.state.paginate;
            this.getData(queryURL,search);
        }
      );
    }

  
  }

  getData=(queryURL,search)=>{
    console.log(queryURL);
    axios
    .get(queryURL)
    .then(res => {
      console.log(res.data.items);
      this.setState(prevState => {
        return {
          response: [...prevState.response, ...res.data.items]
        };
      });
      // }
    })
    .then(() => {
      this.setState(
        prevState => {
          return {
            prevSearch: search
          };
        },
        () => {
          console.log(this.state.prevSearch);
        }
      );
    });
  }

  render() {
    let saved;
    if (this.state.saved.length > 1) {
      saved = (
        <Saved
          saved={this.state.saved}
          itemsSaved={this.state.addedItems}
          clickRemove={this.clickToRemove}
        />
      );
    } else {
      saved = null;
    }

    return [
      <Nav />,
      <div className="row mainRow">
        <div className="col-sm leftCol">
          <div className="container">
            <Search
              click={this.handleSearch}
              submit={this.handleSearch}
              change={this.handleChange}
              value={this.state.search}
              resp={this.state.response}
              clickSave={this.clickToAdd}
              itemsSaved={this.state.addedItems}
            />
          </div>
        </div>
        <div className="col-sm rightCol">
          <div className="container">{saved}</div>
        </div>
      </div>
    ];
  }
}
export default Home;
