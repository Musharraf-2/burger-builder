import './style/burgerBuilder.css'

function Burger(props) {
  const { lettuceCount, baconCount, cheeseCount, meatCount } = props

  return (
    <div className='burger'>
      <div className='bread-top'></div>
      {lettuceCount === 0 && baconCount === 0 && cheeseCount === 0 && meatCount === 0 && <h2 className='text-center'>No Ingredients Added</h2>}
      <div id="lettuce-div">
        {[...Array(lettuceCount)].map(() => {
          return (<div className='lettuce'></div>)
        })
        }
      </div>
      <div id="bacon-div">
        {[...Array(baconCount)].map(() => {
          return (<div className='bacon'></div>)
        })
        }
      </div>
      <div id="cheese-div">
        {[...Array(cheeseCount)].map(() => {
          return (<div className='cheese'></div>)
        })
        }
      </div>
      <div id="meat-div">
        {[...Array(meatCount)].map(() => {
          return (<div className='meat'></div>)
        })
        }
      </div>
      <div className='bread-bottom'></div>
    </div>
  );
}

export { Burger };
