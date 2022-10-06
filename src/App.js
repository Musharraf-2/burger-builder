import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { BurgerBuilder } from './components/burger/burgerBuilder';
import { Checkout } from './components/checkout/checkout';
import { ContactData } from './components/user/contactData';
import { Login } from './components/user/login';
import { PageNotFound } from './components/errors/pageNotFound';
import { Navbar } from './layout/navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BurgerBuilder />} />
      <Route exact path="auth" element={<Login />} />
      <Route exact path="checkout" element={<Checkout />} >
        <Route exact path="contact-data" element={<ContactData />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App;
