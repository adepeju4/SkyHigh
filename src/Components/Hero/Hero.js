import React from 'react'
import { container } from './hero.module.css';
import Spinner from 'react-bootstrap/Spinner'


function Load() {
    
    return (
      <div className={container}>
        <h3>SkyHigh Retails</h3>
        <p>Historical Sales Data</p>

        <p>
          Please wait while our data loads...{" "}
          <Spinner animation="grow" variant="light" style={{ zIndex: 1 }} />
        </p>
      </div>
    );
}

export default Load
