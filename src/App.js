import React, { Component } from "react";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

//higher order function
function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

class App extends Component {
  constructor(props) {
    super(props);

    //binding list to App class local state
    this.state = {
      list, //equivalent of list: list because they share same name (es6)
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    if (window.confirm("Are you sure?")) {
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
    }
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  //map  creates new array object with value from callback
  render() {
    let { list, searchTerm } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={this.onSearchChange}
            value={searchTerm}
          />
        </form>

        {list.filter(isSearched(searchTerm)).map(item => {
          //as function with parenthesis invokes immediately so a wrapper is added
          const onHandleDismiss = () => this.onDismiss(item.objectID);

          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={onHandleDismiss} type="button">
                  X
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
