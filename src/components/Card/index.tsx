import { FC, useEffect, useState } from 'react'
import styles from './Card.module.scss'
import { Plus, Minus } from 'lucide-react'
import CardPhoto from './CardPhoto'

interface ICard {
	id: number
	title: string
	imageUrl: string
	price: number
	countItem: number
	isFavoriteItem: boolean
	onPlus: Function
	onMinus: Function
	onFavorite: Function
}

const Card: FC<ICard> = ({
	id,
	title,
	imageUrl,
	price,
	countItem,
	isFavoriteItem,
	onPlus,
	onMinus,
	onFavorite,
}) => {
	const [isAdded, setIsAdded] = useState(false)
	const [count, setCount] = useState<number>(1)
	const [isFavorite, setIsFavorite] = useState(false)
	const [isPhotoOpened, setIsPhotoOpened] = useState(false)
	const [loading, isLoading] = useState(false)

	useEffect(() => {
		if (countItem > 0) {
			setIsAdded(true)
			setCount(countItem)
		}
		setIsFavorite(isFavoriteItem)
	}, [])

	const onFirstClickPlus = () => {
		onPlus({ id, title, imageUrl, price, count }, isAdded, isLoading)
		setIsAdded(!isAdded)
	}

	const onClickPlus = () => {
		setCount(prev => prev + 1)
		onPlus({ id, title, imageUrl, price, count }, isAdded, isLoading)
	}

	const onLastClickMinus = () => {
		setIsAdded(!isAdded)
		onMinus({ id, title, imageUrl, price, count }, isLoading)
	}

	const onClickMinus = () => {
		setCount(prev => prev - 1)
		onMinus({ id, title, imageUrl, price, count }, isLoading)
	}

	const onClickFavorite = () => {
		onFavorite({ id, title, imageUrl, price }, isFavorite)
		setIsFavorite(!isFavorite)
	}

	const onClickImg = () => {
		setIsPhotoOpened(true)
	}

	return (
		<>
			{isPhotoOpened && (
				<CardPhoto imageUrl={imageUrl} setIsPhotoOpened={setIsPhotoOpened} />
			)}
			<div className={styles.card}>
				<div className={styles.favorite} onClick={onClickFavorite}>
					<img
						src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
						alt='Unliked'
					/>
				</div>
				<div className={styles.img}>
					<img
						className={styles.sneakers}
						width={160}
						height={140}
						src={imageUrl}
						alt='Sneakers'
						onClick={onClickImg}
					/>
				</div>
				<h5>{title}</h5>
				<div className={styles.add}>
					<div>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					{!loading ? (
						<div className={styles.btn}>
							{isAdded ? (
								<span>
									<div onClick={count === 1 ? onLastClickMinus : onClickMinus}>
										<Minus color='#9B9B9B' />
									</div>
									<h3>{count}</h3>
									<div onClick={onClickPlus}>
										<Plus color='#9B9B9B' />
									</div>
								</span>
							) : (
								<div className={styles.addCard} onClick={onFirstClickPlus}>
									<Plus color='#CDCDCD' />
								</div>
							)}
						</div>
					) : (
						<div>
							<img src='/img/loading_circle.gif' alt='loading_circle' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default Card
