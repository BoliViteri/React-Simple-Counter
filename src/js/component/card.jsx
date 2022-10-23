import React from "react";

//create your first component
const Card = () => {
    
  return (
    <div class="card-deck" style={{ display: "flex", margin:'auto',padding: '15rem' }}>
      <div
        class="card"
        style={{ height: "24rem", width: "16rem", flex: "5%", padding: "1rem", backgroundColor:'black' }}
      >
        <div class="card-body">
        <h1 class="card-title" style={{color:'white'}}>Hours</h1>
        </div>
      </div>
      <div
        class="card"
        style={{ height: "24rem", width: "16rem", flex: "5%", padding: "1rem" , backgroundColor:'black' }}
      >
        <div class="card-body">
        <h1 class="card-title" style={{color:'white'}}>Minutes</h1>
        </div>
      </div>
      <div
        class="card"
        style={{ height: "24rem", width: "16rem", flex: "5%", padding: "1rem" , backgroundColor:'black' }}
      >
        <div class="card-body">
        <h1 class="card-title" style={{color:'white'}}>Seconds</h1>
        </div>
      </div>
      <div
        class="card"
        style={{ height: "24rem", width: "16rem", flex: "5%", padding: "1rem", backgroundColor:'black'  }}
      >
        <div class="card-body">
          <h1 class="card-title" style={{color:'white'}}>Milliseconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
