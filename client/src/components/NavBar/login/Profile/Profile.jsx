import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import s from './Profile.module.css';
import Loading from '../../../loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import usericon from '../../../../asset/usericon.png';
import { getUserPurchases } from '../../../../redux/actions';
import { useHistory } from 'react-router-dom';

export const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const history = useHistory()
	const dispatch = useDispatch();

	const userNow = useSelector((state) => state.user);
	const userPurchases = useSelector((state) => state.userPurchases)

	useEffect(() => {
		if (userNow.id) {
			dispatch(getUserPurchases(userNow.id))
		}
	}, [dispatch, userNow.id])

	if (isLoading) {
		return (
			<div className={s.cont}>
				<Loading />
			</div>
		);
	}


	// Object.keys(userNow).length > 0 && !name ? setItems(userNow) : isAuthenticated ? setItems(user) : setItems(voidItem)

	return (
		<>
			{
				Object.keys(userNow).length > 0 || isAuthenticated ? (
					<div className={s.conten}>
						<div className={s.barPerfil}>
							<div className={s.imgPerfil}>
								{user ? (
									<img src={user.picture} alt={user.name ? user.name : userNow.name} className={s.img} />
								) : userNow.picture ? (
									<img src={userNow.picture} alt={userNow.name} className={s.img} />
								) :
									<img src={usericon} alt={'user icon'} className={s.img} />
								}
							</div>
							<div className={s.infoPerfil}>
								<h2>{user ? user.name : userNow.name}</h2>
								<p>Email: {user ? user.email : userNow.email}</p>
							</div>
						</div>
						<div className={s.conCompra}>
							<h2>Consola de Compras</h2>
							{
								userPurchases.length > 0? userPurchases.map((p) => {
									console.log(p)
								}) : ""
							}
							<div></div>
						</div>
						<div>
							<button onClick={()=>history.push(`/profile/changedata/${userNow.id}`)}>Edit information</button>
						</div>
					</div>
				) : (<h1>Inicie Sesión</h1>)}
		</>
	);
};

export default Profile;
