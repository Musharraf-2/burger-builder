import './style/orderModal.css'
import { useNavigate } from 'react-router-dom';

function OrderModal(props) {
  const navigate = useNavigate();
  let button;

  const redirectToCheckout = () => {
    navigate('checkout', { state: { lettuceCount: props.lettuceCount, baconCount: props.baconCount, meatCount: props.meatCount, cheeseCount: props.cheeseCount } });
  }

  if (props.lettuceCount === 0 && props.baconCount === 0 && props.meatCount === 0 && props.cheeseCount === 0) {
    button = <button type="button" id="order-btn" className="order-btn px-4 py-3" data-bs-toggle="modal" data-bs-target="#orderModal" disabled={true}>ORDER NOW</button>;
  }
  else {
    button = <button type="button" id="order-btn" className="order-btn px-4 py-3" data-bs-toggle="modal" data-bs-target="#orderModal">ORDER NOW</button>;
  }

  return (
    <div>
      {button}
      <div className="modal fade" id="orderModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your Order Summary</h5>
            </div>
            <div className="modal-body">
              <ul>
                <li>Lettuce {props.lettuceCount}</li>
                <li>Bacon {props.baconCount}</li>
                <li>Cheese {props.cheeseCount}</li>
                <li>Meat {props.meatCount}</li>
              </ul>
              <h5>Total proice: ${props.price.toFixed(2)}</h5>
              <p>Continue to  Checkout?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={redirectToCheckout}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { OrderModal };
