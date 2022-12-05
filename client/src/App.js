import { Route, useLocation } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import HomePage from './components/home/home/HomePage';
import NavBar from './components/NavBar/Navbar/NavBar.jsx';
import FooterBar from './components/Footer/FooterBar';
import Product from './components/home/ProductDetail/ProductDetail/Product';
import ProductShopCart from './components/shoppingCart/ProductShopCart.jsx';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ProductSended from './components/CreateProduct/ProductSended.jsx';
import { Profile } from './components/NavBar/login/Profile/Profile';
import { LoginForm } from './components/NavBar/login/LoginForm/LoginForm';
import Buy from './components/BuyProducts/Buy'
import SuccessedPayment from './components/CompletePayment/Successedpayment'
import {ContactUs} from "./components/Footer/Contact/ContactEmailJS"
import messageSended from './components/Footer/Contact/MessageSended';

function App() {
	let location = useLocation();
	return (
		<div className='App'>
			{location.pathname !== '/' && location.pathname !== '/SuccessPayment' && (
				<NavBar />
			)}

			<Route path='/' exact component={LandingPage} />
			<Route exact path='/home' component={HomePage} />
			<Route path='/SearchResults' exact component={HomePage} />
			<Route path='/product/:id' component={Product} />
			<Route path='/shoppingcart' component={ProductShopCart} />
			<Route path='/create/product' component={CreateProduct} />
			<Route path='/create/productsended' component={ProductSended} />
			<Route path='/profile' component={Profile} />
			<Route path='/LoginForm' component={LoginForm} />
			<Route exact path='/contact' component={ContactUs} />
			<Route path='/contact/messagesended' component={messageSended} />
			<Route path="/buyproducts" component={Buy} />
			<Route path="/SuccessPayment" component={SuccessedPayment}/>

			{location.pathname !== '/' && <FooterBar />}
		</div>
	);
}

export default App;
