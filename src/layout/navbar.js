import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/"><img src={require('../assets/images/burger.png')} alt='burger' className='burger-image' /></a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Burger Builder</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/auth">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
