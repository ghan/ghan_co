import React from 'react';
import routes from './../data/routes';
import { Link } from "react-router-dom";

function ExternalRoute({ url }) {
  window.location.href = url;
}

export default ExternalRoute;
