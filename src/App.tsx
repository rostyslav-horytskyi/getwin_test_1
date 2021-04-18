import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { getDataFromServer } from './api/api';
import { TableWithData } from './components/TableWithData';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromServer()
      .then(setData);
  }, []);

  return (
    <>
      {data.length ? (
        <div className="App">
          <TableWithData data={data} />
        </div>
        ) : (
          <div className="loader">
            <Loader
              type="Circles"
              height="200"
              width="200"
              color="#696969"
            />
          </div>
        )}
    </>
  );
}

export default App;
