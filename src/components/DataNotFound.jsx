import React from 'react';
import './DataNotFound.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const DataNouFound = () => {
  const history = useHistory();
  return (
    <div className="no-data">
      <div className="no-data_header">
        <h1>Data not found </h1>
      </div>
      <div className="no-data_action">
        <button onClick={() => history.push('/')}>Back to home</button>
      </div>
    </div>
  );
};
