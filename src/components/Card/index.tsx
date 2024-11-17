import { useState } from 'react'
import styles from './Card.module.scss'
import { Plus, Minus } from 'lucide-react'

interface ICard {
	id: number
	title: string
	imageUrl: string
	price: number
	onFirstPlus: Function
	onPlus: Function
	onLastMinus: Function
	onMinus: Function
	onFavorite: Function
}

function Card({
	id,
	title,
	imageUrl,
	price,
	onFirstPlus,
	onPlus,
	onLastMinus,
	onMinus,
	onFavorite,
}: ICard) {
	const [isAdded, setIsAdded] = useState(false)
	const [count, setCount] = useState<number>(1)
	const [isFavorite, setIsFavorite] = useState(false)

	const onFirstClickPlus = () => {
		onFirstPlus({ id, title, imageUrl, price, count })
		setIsAdded(!isAdded)
	}

	const onClickPlus = () => {
		setCount(prev => prev + 1)
		onPlus({ id, title, imageUrl, price, count })
	}

	const onLastClickMinus = () => {
		onLastMinus({ id, title, imageUrl, price, count })
		setIsAdded(!isAdded)
	}

	const onClickMinus = () => {
		setCount(prev => prev - 1)
		onMinus({ id, title, imageUrl, price, count })
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
						src={
							isFavorite
								? '/react-sneakers/img/heart-liked.svg'
								: '/react-sneakers/img/heart-unliked.svg'
						}
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
				<div className={styles.add}>
					<div>
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<div className={styles.btn}>
						{isAdded ? (
							<span>
								<div onClick={count === 1 ? onLastClickMinus : onClickMinus}>
									<Minus />
								</div>
								<h3>{count}</h3>
								<div onClick={onClickPlus}>
									<Plus />
								</div>
							</span>
						) : (
							<div className={styles.addCard} onClick={onFirstClickPlus}>
								<Plus color='#9B9B9B' />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
export default Card
