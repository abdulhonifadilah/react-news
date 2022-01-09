import React, { Component } from "react";
import Card from "../component/card";
// import Test from "../component/Test";
import "./style.css";

export default class Homepage extends Component {
  state = {
    data: {
    data: [],
    status: false
    },
    search: "",
  };
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=fdd3d8165a8a4a87800cd8ceb85988c9")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: {data : res.articles, status: true} });
      });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    let {data, search}=this.state;
    return (
      <div className="homepage">
        <nav>
          <h3>HiNews</h3>
        </nav>
        <div className="search">
          <label>
            Cari :
            <input
              type="text"
              name="search"
              onChange={(e) => this.setState({search: e.target.value })}
            />
          </label>
        </div>
        <div className="list-card">
          <Card data={data} search={search}/>
          {/* <Test/> */}
        </div>
      </div>
    );
  }
}
