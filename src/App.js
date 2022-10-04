import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { BurgerBuilder } from './components/burgerBuilder';
import { Checkout } from './components/checkout';
import { ContactData } from './components/contactData';
import { Login } from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BurgerBuilder />} />
        <Route path="auth" element={<Login />} />
        <Route path="checkout" element={<Checkout />} >
          <Route path="contact-data" element={<ContactData />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
