import { useEffect } from 'react';
import { useLocation, Link, useNavigate, Outlet } from 'react-router-dom';
import './style/checkout.css'
import { Burger } from '../burger/burger';

function Checkout(props) {
  const { state } = useLocation();
  const { lettuceCount, baconCount, meatCount, cheeseCount } = state;
  const navigate = useNavigate();

  const redirectToContactData = () => {
    navigate('contact-data', { state: { lettuceCount: lettuceCount, baconCount: baconCount, meatCount: meatCount, cheeseCount: cheeseCount } });
  }

  useEffect(() => {
    if (document.querySelector('.modal-backdrop')) {
      document.querySelector('.modal-open').style = null;
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove('modal-backdrop');
    }
  });

  return (
    <div>
      <h2 className='text-center my-5'>We hope it tastes well!</h2>
      <Burger lettuceCount={lettuceCount} baconCount={baconCount} cheeseCount={cheeseCount} meatCount={meatCount} />
      <div className="d-flex flex-row justify-content-center">
        <Link to="/" className='cancel-link mx-5'>Cancel</Link>
        <span className='continue-link mx-5 continue-link' onClick={redirectToContactData}>Continue</span>
      </div>
      <Outlet />
    </div>
  );
}

export { Checkout };
