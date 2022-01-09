import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    let search = this.props.search.toLowerCase();
    let {data, status}= this.props.data;
    let dataFilter = data.filter((e) => e.title.toLowerCase().includes(search));
    if(status){
      if(dataFilter.length <1){
        return <p className="data-kosong">data kosong</p>
      }else{
        return (
        <>
          {dataFilter.map((e,i) =>
          <div className="card" key={i}>
            <img src={e.urlToImage} alt="hero" />
            <div className="heading">
              <h5 className="title">{e.title}</h5>
              <p className="publish">{e.publishedAt.slice(0,10)} {e.publishedAt.slice(11,16)}</p>
            </div>
            <div className="description">
              <p>
                {e.description}
              </p>
            </div>
            <a href={e.url} className="btn-link">Selengkapnya</a>
          </div>
          )}
        </>
      );
      }
    }else{
      return <p className="loading">Loading.....</p>
    }
    

    
  }
}
