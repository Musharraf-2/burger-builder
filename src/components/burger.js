import { useEffect } from 'react';
import './burgerBuilder.css'

function Burger(props) {

  const displayLettuce = () => {
    for (let i = 0; i < props.lettuceCount; i++) {
      document.getElementById("lettuce-div").innerHTML += "<div class='lettuce'></div>";
    }
  }

  const displayBacon = () => {
    for (let i = 0; i < props.baconCount; i++) {
      document.getElementById("bacon-div").innerHTML += "<div class='bacon'></div>";
    }
  }

  const displayCheese = () => {
    for (let i = 0; i < props.cheeseCount; i++) {
      document.getElementById("cheese-div").innerHTML += "<div class='cheese'></div>";
    }
  }

  const displayMeat = () => {
    for (let i = 0; i < props.meatCount; i++) {
      document.getElementById("meat-div").innerHTML += "<div class='meat'></div>";
    }
  }

  useEffect(() => {
    document.getElementById("lettuce-div").innerHTML = "";
    document.getElementById("bacon-div").innerHTML = "";
    document.getElementById("cheese-div").innerHTML = "";
    document.getElementById("meat-div").innerHTML = "";
    displayLettuce();
    displayBacon();
    displayCheese();
    displayMeat();
  });

  return (
    <div className='burger'>
      <div className='bread-top'></div>
      <div id="lettuce-div"></div>
      <div id="bacon-div"></div>
      <div id="cheese-div"></div>
      <div id="meat-div"></div>
      <div className='bread-bottom'></div>
    </div>
  );
}

export { Burger };
