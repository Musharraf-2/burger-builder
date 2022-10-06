import { useEffect } from 'react';
import './style/burgerBuilder.css'

function Burger(props) {

  const displayIngredients= (ingredient, ingredientCount)=>{
    for (let i = 0; i < ingredientCount; i++) {
      document.getElementById(`${ingredient}-div`).innerHTML += `<div class=${ingredient}></div>`;
    }
  }

  useEffect(() => {
    document.getElementById("lettuce-div").innerHTML = "";
    document.getElementById("bacon-div").innerHTML = "";
    document.getElementById("cheese-div").innerHTML = "";
    document.getElementById("meat-div").innerHTML = "";
    displayIngredients("lettuce", props.lettuceCount)
    displayIngredients("bacon", props.baconCount)
    displayIngredients("cheese", props.cheeseCount)
    displayIngredients("meat", props.meatCount)
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
