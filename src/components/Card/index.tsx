import React from 'react'
import styles from './Card.module.scss'

interface ICard {
	id: number
	title: string
	imageUrl: string
	price: number
	onPlus: Function
	onFavorite: Function
}

function Card({ id, title, imageUrl, price, onPlus, onFavorite }: ICard) {
	const [isAdded, setIsAdded] = React.useState(false)
	const [isFavorite, setIsFavorite] = React.useState(false)

	const onClickPlus = () => {
		onPlus({ id, title, imageUrl, price }, isAdded)
		setIsAdded(!isAdded)
	}

	const onClickFavorite = () => {
		onFavorite()
		setIsFavorite(!isFavorite)
	}

	return (
		<>
			<div className={styles.card}>
				<div className={styles.favorite} onClick={onClickFavorite}>
					<img
						src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
						alt='Unliked'
					/>
				</div>
				<img
					className='sneakers'
					width={133}
					height={112}
					src={imageUrl}
					alt='Sneakers'
				/>
				<h5>{title}</h5>
				<div className='d-flex justify-between align-center'>
					<div className='d-flex flex-column'>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<img
						onClick={onClickPlus}
						className={styles.plus}
						src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
						alt='plus'
					/>
				</div>
			</div>
		</>
	)
}
export default Card
