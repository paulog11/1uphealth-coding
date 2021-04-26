import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';
import JSONPretty from 'react-json-pretty';

/**
 * Extensible for multiple patients, but for now it is written for the single data entry that we have for Wilma
 */
function Patients() {
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState([]);

  function handleGetPatients() {
    fetch("http://localhost:8005/api/getAllPatients", {
    })
    .then(res => res.json())
    .then(
      (data) => {
        setIsFetched(true);
        setPatients(data.allPatients);
        setPatientData(data.allPatients.data);
      }
    );
  }

  return  (
    <div>
      <button onClick={handleGetPatients}>Get Patients</button>
      <div>
          {isFetched ? 
            (<div>
              <p>{patients.username}</p>
              <div>
                <JSONPretty id="patientData" data={patientData}></JSONPretty>
              </div>
             </div>
            )
            : ""}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to 1UpHealth API Accessor</h1> 
      <div>
        <h2>Patient Data</h2>
        <Patients />
      </div>
    </div>
  );
}

export default App;