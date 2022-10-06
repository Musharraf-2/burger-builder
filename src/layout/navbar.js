import { Link } from 'react-router-dom';
import './style/navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/"><img src={require('../assets/images/burger.png')} alt='burger' className='burger-image' /></Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Burger Builder</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/auth">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
