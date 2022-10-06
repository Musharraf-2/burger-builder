import React, { useEffect, useState } from 'react';
import './style/burgerBuilder.css'
import { OrderModal } from '../orderInfo/orderModal';
import { Burger } from './burger';

function BurgerBuilder() {
  const [lettuceCount, setLettuceCount] = useState(0);
  const [baconCount, setBaconCount] = useState(0);
  const [cheeseCount, setCheeseCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);
  const [price, setPrice] = useState(3.0);

  useEffect(() => {
    setPrice(lettuceCount * 0.5 + baconCount * 0.7 + cheeseCount * 0.4 + meatCount * 1.3)
  }, [lettuceCount, baconCount, cheeseCount, meatCount]);

  return (
    <div>
      <Burger lettuceCount={lettuceCount} baconCount={baconCount} cheeseCount={cheeseCount} meatCount={meatCount} />
      <div className='btn-table'>
        <br />
        <p className='text-center'>Current Price: <b id="price">${price.toFixed(2)}</b></p>
        <table className='m-auto'>
          <tbody>
            <tr>
              <td className='px-5'><b>Lettuce</b></td>
              <td className='px-5'><button onClick={() => lettuceCount > 0 && setLettuceCount(lettuceCount - 1)} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={() => setLettuceCount(lettuceCount + 1)} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Bacon</b></td>
              <td className='px-5'><button onClick={() => baconCount > 0 && setBaconCount(baconCount - 1)} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={() => setBaconCount(baconCount + 1)} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Cheese</b></td>
              <td className='px-5'><button onClick={() => cheeseCount > 0 && setCheeseCount(cheeseCount - 1)} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={() => setCheeseCount(cheeseCount + 1)} className='px-3 more-btn'>More</button></td>
            </tr>
            <tr>
              <td className='px-5'><b>Meat</b></td>
              <td className='px-5'><button onClick={() => meatCount > 0 && setMeatCount(meatCount - 1)} className='px-3 less-btn'>Less</button></td>
              <td className='px-5'><button onClick={() => setCheeseCount(cheeseCount + 1)} className='px-3 more-btn'>More</button></td>
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
