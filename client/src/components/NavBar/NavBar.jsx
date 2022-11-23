import React from 'react';
import Logo from '../../asset/Logo.png';
import Carito from '../../asset/carrito.png';
import SearchBar from '../searchBar/SearchBar.jsx';
import { Link, NavLink } from 'react-router-dom';

import s from './NavBar.module.css';
import LoginRegister from '../Loging/LoginBar';

function NavBar() {
	return (
		<div className={s.navBar}>
			<nav className={s.navbar}>
				<div className={s.logodiv}>
					<Link to={'/'}>
						<img src={Logo} alt='Logo' height='40px' />
					</Link>
				</div>
				<div>
					<ul className={s.ul}>
						<li className={s.li}>
							<Link to={'/home'} className={s.Link}>
								<a>Home</a>
							</Link>
						</li>
						<li className={s.li}>
							<Link to={'/shop'} className={s.Link}>
								<a>Shop</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<SearchBar />
				</div>

				<div>
					<div>
						<LoginRegister />
					</div>
				</div>
				<div className={s.cart}>
					<img src={Carito} alt='Carro de compras' height='25px' />
				</div>
				<div className={s.favorites}>♥</div>
			</nav>
		</div>
	);
}

export default NavBar;
