import React from 'react';
import routes from './../data/routes';
import { Link } from "react-router-dom";

function Home() {
  const works = routes.map((w) => {
    return (
      <div key={w.tag}>
        <h4>{w.date}: <a href={w.url}>{w.name}</a></h4>
        <p>{w.description}</p>
      </div>
    )
  });

  return (
    <div id="home">
        <div className="content-box">
          <h1>ghan</h1>
          <div className="works-list">
            { works }
          </div>
        </div>
    </div>
  );
}

export default Home;
