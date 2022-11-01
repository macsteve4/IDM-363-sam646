import React from 'react'
import './ramencard.css';

function RamenCard() {

  return (
    <div class="container">
  <div class="card">
    <div class="card-header">
      <div class="overlay"></div>
        <button class="view-item">View Item</button>
      <img src="https://mcinerneymedia.com/idm250/wp-content/uploads/2022/11/kimchi.jpeg" alt="ramen"></img>
    </div>
    <div class="card-body">
      <span>Kimchi Flavor</span><br></br>
      <p>🔥        <span>Medium</span></p>
      <h3>$4.75</h3>
      <div class="btn6">
        <a href="#">Add To Cart</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default RamenCard