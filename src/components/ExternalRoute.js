import React from 'react';
import { Link } from "react-router-dom";

function ExternalRoute({ route }) {
  return (
    <div className="external-route">
      <div className="topbar">
        <Link to="/">&larr; Ghan.co</Link>
      </div>
      <iframe
        className="youtube-frame"
        src={route.url}
        allowFullScreen
      />
    </div>
  );
}

export default ExternalRoute;
