import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Table from "./Table";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends Component {
  constructor(props) {
    super(props);

    //binding list to App class local state
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result: result });
  }

  onDismiss(id) {
    if (window.confirm("Are you sure?")) {
      const isNotId = item => {
        console.log(item);
        return item.objectID !== id;
      };
      const updatedHits = this.state.result.hits.filter(isNotId);
      this.setState({
        result: Object.assign({}, this.state.result, { hits: updatedHits })
      });
    }
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  //map  creates new array object with value from callback
  render() {
    let { searchTerm, result } = this.state;
    if (!result) {
      return "Loading.....";
    }
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
          <Table
            list={result.hits}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}

export default App;
