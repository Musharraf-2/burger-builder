import React, { useEffect, useState } from 'react';
import './burgerBuilder.css'
import { OrderModal } from './orderModal';

function BurgerBuilder() {
  const [lettuceCount, setLettuceCount] = useState(0);
  const [baconCount, setBaconCount] = useState(0);
  const [cheeseCount, setCheeseCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);
  const [price, setPrice] = useState(3.0);

  useEffect(() => {
    if (lettuceCount === 0 && baconCount === 0 && cheeseCount === 0 && meatCount === 0) {
      document.getElementById("no-ingredients").innerText = "No Ingredients Added";
    }
    else {
      document.getElementById("no-ingredients").innerText = "";
    }
  });

  const removeLettuce = () => {
    if (document.querySelector(".lettuce")) {
      setLettuceCount(lettuceCount - 1);
      document.querySelector(".lettuce").remove();
      setPrice(price - 0.5)
    }
  }

  const addLettuce = () => {
    setLettuceCount(lettuceCount + 1);
    document.getElementById("lettuce-div").innerHTML += "<div class='lettuce'></div>";
    setPrice(price + 0.5)
  }

  const removeBacon = () => {
    if (document.querySelector(".bacon")) {
      setBaconCount(baconCount - 1);
      document.querySelector(".bacon").remove();
      setPrice(price - 0.7)
    }
  }

  const addBacon = () => {
    setBaconCount(baconCount + 1);
    document.getElementById("bacon-div").innerHTML += "<div class='bacon'></div>";
    setPrice(price + 0.7)
  }

  const removeCheese = () => {
    if (document.querySelector(".cheese")) {
      setCheeseCount(cheeseCount - 1);
      document.querySelector(".cheese").remove();
      setPrice(price - 0.4)
    }
  }

  const addCheese = () => {
    setCheeseCount(cheeseCount + 1);
    document.getElementById("cheese-div").innerHTML += "<div class='cheese'></div>";
    setPrice(price + 0.4)
  }

  const removeMeat = () => {
    if (document.querySelector(".meat")) {
      setMeatCount(meatCount - 1);
      document.querySelector(".meat").remove();
      setPrice(price - 1.3)
    }
  }

  const addMeat = () => {
    setMeatCount(meatCount + 1);
    document.getElementById("meat-div").innerHTML += "<div class='meat'></div>";
    setPrice(price + 1.3)
  }

  return (
    <div>
      <div className='burger'>
        <div className='bread-top'></div>
        <h2 id='no-ingredients' className='text-center m-2'> </h2>
        <div id="lettuce-div"></div>
        <div id="bacon-div"></div>
        <div id="cheese-div"></div>
        <div id="meat-div"></div>
        <div className='bread-bottom'></div>
      </div>
      <div className='btn-table'>
        <br />
        <p className='text-center'>Current Price: <b id="price">${price.toFixed(2)}</b></p>
        <table className='m-auto'>
          <tbody>
            <tr>
              <td className='px-5'><b>Lettuce</b></td>
              <td className='px-5'><button onClick={removeLettuce} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={addLettuce} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Bacon</b></td>
              <td className='px-5'><button onClick={removeBacon} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={addBacon} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Cheese</b></td>
              <td className='px-5'><button onClick={removeCheese} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={addCheese} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Meat</b></td>
              <td className='px-5'><button onClick={removeMeat} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={addMeat} className='px-3 more-btn'>More</button></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className='text-center'>
          <OrderModal lettuceCount={lettuceCount} baconCount={baconCount} meatCount={meatCount} cheeseCount={cheeseCount} price={price} />
        </div>
      </div>
    </div>
  );
}

export { BurgerBuilder };
