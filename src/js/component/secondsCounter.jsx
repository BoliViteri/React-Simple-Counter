import React, { useState, useEffect } from 'react';

const SecondsElapsed = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
<div class="card-deck" style={{ display: "flex", margin:'auto',padding: '15rem', width: "50rem" }}>

      <div
        class="card"
        style={{ height: "24rem", width: "16rem", flex: "5%", padding: "1rem" , backgroundColor:'black' }}
      >
        <div class="card-body">
        <h1 class="card-title" style={{color:'white'}}>{seconds} Second(s)</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondsElapsed;