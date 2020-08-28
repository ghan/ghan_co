import React from 'react';
import routes from './../data/routes';
import { Link } from "react-router-dom";

function Home() {
  const works = routes.map((w) => {
    return (
      <div key={w.tag}>
        <h4><Link to={w.tag}>{w.name}</Link></h4>
        <p>{w.date}: {w.description}</p>
      </div>
    )
  });

  return (
    <div id="home">
        <h1>Ghan.co</h1>
        <div>
            <h3>Works</h3>
            <div className="works-list">
                { works }
            </div>
        </div>
    </div>
  );
}

export default Home;
