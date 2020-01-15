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

class App extends Component {
  constructor(props) {
    super(props);

    //binding list to App class local state
    this.state = {
      list //equivalent of list: list because they share same name
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    if (window.confirm("Are you sure?")) {
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
    }
  }

  //map  creates new array objectwith value from callback
  render() {
    let { list } = this.state;
    return (
      <div className="App">
        {list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                X
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
