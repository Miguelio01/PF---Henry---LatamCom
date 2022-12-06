import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
	createComment,
	getAllComments,
	updateRatingProduct,
} from '../../../../redux/actions';
import s from './CreateComment.module.css';
import star from '../../../../asset/puntajes.png';

const CreateComment = (id) => {
	const { isAuthenticated } = useAuth0();
	const product = useSelector((state) => state.productDetail);
	const user = useSelector((state) => state.user);

	const [comment, setComment] = useState({
		comment: '',
		rating: 1,
	});

	function handleComment(e) {
		e.preventDefault();
		setComment({
			...comment,
			[e.target.name]: e.target.value,
		});
		return comment;
	}
	const comments = useSelector((state) => state.productComments);
	const productComments = comments.filter((c) => {
		return c.products[0].name === product.name;
	});
	let ratings = 0;
	for (const c of productComments) {
		ratings += c.rating;
	}
	ratings /= productComments.length;

	async function sendComment(e, idUser) {
		e.preventDefault();
		let idProduct = product.id;
		if (!idUser) return alert("Debes loguearte para realizar esta acción");
		dispatch(
			createComment({
				...comment,
				idUser,
				idProduct,
			}),
		);
		setComment({ ...comment, comment: '' });
	}

	const dispatch = useDispatch();
	// const user = useSelector((state) => state.user);
	useEffect(() => {
		if (ratings && product.id !== undefined) {
			dispatch(updateRatingProduct({ rating: ratings, id: product.id }));
		}
	}, [dispatch, product.id, ratings]);

	useEffect(() => {
		dispatch(getAllComments());
	}, [dispatch]);

	return (
		<div className={s.conten}>
			{ratings > 0 ? (
				<label>
					Rating General del Producto: {ratings.toFixed(1)} (
					{productComments.length})
				</label>
			) : (
				''
			)}
			<>
				{isAuthenticated || user.username ? (
					<div>
						<div className={s.rating}>
							<label>Rating:</label>
							<br />
							<select
								className={s.select}
								name='rating'
								onChange={(e) => handleComment(e)}>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
							<br />
						</div>
						<div className={s.comment}>
							<textarea
								className={s.textarea}
								cols={50}
								name='comment'
								rows={10}
								placeholder={'Please, write a comment'}
								value={comment.comment}
								onChange={(e) => handleComment(e)}
							/>
							<button className={s.btn} onClick={(e) => sendComment(e, user.id)}>
								Send Comment
							</button>
						</div>
					</div>
				) : (
					<p className={s.parafo}>Must Log in to make a comment!</p>
				)}
			</>

			<div>
				{productComments.length ? (
					<div>
						<h3 className={s.h3}>Comments:</h3>
						{productComments.map((c, index) => {
							return (
								<div className={s.contenComments} key={index}>
									<p>{c.users.length ? c.users[0].username : ''}</p>
									<div className={s.divrow}>
										<h4 className={s.h3}>Rating:</h4>
										<div className={s.divrow}>
											<p className={s.par}>{c.rating}</p>
											<img
												src={star}
												alt=''
												height={'10px'}
												className={s.immg}
											/>
										</div>
									</div>

									<p className={s.parafo}>{c.comment}</p>
								</div>
							);
						})}
					</div>
				) : (
					<p className={s.parafo}>Without comentaries</p>
				)}
			</div>
		</div>
	);
};

export default CreateComment;
